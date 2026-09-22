import { useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import type { DragEndEvent } from '@dnd-kit/core';
import {
  SortableContext,
  arrayMove,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import {
  Check,
  ChevronDown,
  ChevronRight,
  Copy,
  GripVertical,
  Play,
  Search,
  Trash,
} from 'lucide-react';
import { categories, getL10n, modules } from '../content/modules';
import type { Lang, Module } from '../content/schema';
import { presets } from '../content/presets';
import { deckPayload, useDeckStore, useSlides } from '../store/deckStore';
import type { Density, Theme } from '../store/deckStore';
import { shareUrl } from '../lib/share';
import { exportDeckFile, importDeckFile } from '../lib/deckFile';
import Icon from '../components/Icon';
import BrandLogo from '../components/BrandLogo';
import Mascot from '../components/Mascot';
import { slideHeading } from '../components/slides/shared';
import './Builder.css';

const THEME_SWATCHES: { id: Theme; colors: [string, string, string] }[] = [
  { id: 'devin', colors: ['#f7f6f5', '#191919', '#2200ff'] },
  { id: 'cognition', colors: ['#f7f6f5', '#000000', '#2200ff'] },
  { id: 'dark', colors: ['#191919', '#e7e7e7', '#317cff'] },
  { id: 'product', colors: ['#fcfcfc', '#191919', '#317cff'] },
];

export default function Builder() {
  const { t } = useTranslation();
  const moduleIds = useDeckStore((s) => s.moduleIds);
  const lang = useDeckStore((s) => s.lang);
  const tone = useDeckStore((s) => s.tone);
  const theme = useDeckStore((s) => s.theme);
  const density = useDeckStore((s) => s.density);
  const showNotes = useDeckStore((s) => s.showNotes);
  const presenter = useDeckStore((s) => s.presenter);
  const store = useDeckStore;
  const slides = useSlides();

  const [search, setSearch] = useState('');
  const [collapsed, setCollapsed] = useState<Set<string>>(new Set());
  const [expanded, setExpanded] = useState<Set<string>>(new Set());
  const [status, setStatus] = useState('');
  const fileRef = useRef<HTMLInputElement>(null);

  const query = search.trim().toLowerCase();
  const filtered = useMemo(
    () =>
      modules.filter(
        (m) =>
          !query ||
          getL10n(m.title, lang).toLowerCase().includes(query) ||
          getL10n(m.summary, lang).toLowerCase().includes(query),
      ),
    [query, lang],
  );

  const grouped = useMemo(
    () =>
      [...categories]
        .sort((a, b) => a.order - b.order)
        .map((c) => ({ category: c, mods: filtered.filter((m) => m.category === c.id) }))
        .filter((g) => g.mods.length > 0),
    [filtered],
  );

  const totalMin = moduleIds.reduce(
    (acc, id) => acc + (modules.find((m) => m.id === id)?.durationMin ?? 0),
    0,
  );

  const toggleCollapsed = (id: string) =>
    setCollapsed((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  const toggleExpanded = (id: string) =>
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  const toggleCategory = (mods: Module[]) => {
    const ids = mods.map((m) => m.id);
    const allIn = ids.every((id) => moduleIds.includes(id));
    store.getState().setModules(
      allIn
        ? moduleIds.filter((id) => !ids.includes(id))
        : [...moduleIds, ...ids.filter((id) => !moduleIds.includes(id))],
    );
  };

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 4 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates }),
  );

  const onDragEnd = (e: DragEndEvent) => {
    const { active, over } = e;
    if (!over || active.id === over.id) return;
    const from = moduleIds.indexOf(String(active.id));
    const to = moduleIds.indexOf(String(over.id));
    if (from >= 0 && to >= 0) store.getState().setModules(arrayMove(moduleIds, from, to));
  };

  const flash = (msg: string) => {
    setStatus(msg);
    window.setTimeout(() => setStatus(''), 2200);
  };

  const copyLink = async () => {
    const url = shareUrl(deckPayload(store.getState()));
    window.location.hash = `d=${url.split('#d=')[1]}`;
    try {
      await navigator.clipboard.writeText(url);
      flash(t('builder.copied'));
    } catch {
      flash(url);
    }
  };

  const onImport = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    e.target.value = '';
    if (!file) return;
    const payload = await importDeckFile(file);
    if (payload) store.getState().loadDeck(payload);
    else flash('⚠ invalid deck file');
  };

  return (
    <div className="builder">
      <header className="topbar">
        <div className="wordmark">
          <BrandLogo brand="devin" height={20} />
          <span className="wordmark-sep" />
          <span className="wordmark-sub">Explained</span>
        </div>
        <div className="topbar-right">
          <div className="segmented sm">
            {(['it', 'en'] as Lang[]).map((l) => (
              <button
                key={l}
                className={lang === l ? 'active' : ''}
                onClick={() => store.getState().setLang(l)}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
          <button className="btn ghost" onClick={() => store.getState().reset()}>
            {t('builder.reset')}
          </button>
          <button className="btn outline" onClick={() => exportDeckFile(deckPayload(store.getState()))}>
            {t('builder.export')}
          </button>
          <button className="btn outline" onClick={() => fileRef.current?.click()}>
            {t('builder.import')}
          </button>
          <input
            ref={fileRef}
            type="file"
            accept="application/json,.json"
            hidden
            onChange={onImport}
          />
          <button
            className="btn ink"
            disabled={moduleIds.length === 0}
            onClick={() => store.getState().enterPresent()}
          >
            <Play size={13} fill="currentColor" />
            {t('builder.present')}
          </button>
        </div>
      </header>

      <div className="builder-cols">
        {/* ---------- 01 modules ---------- */}
        <aside className="col catalog">
          <div className="col-head">
            <span className="col-num">01</span>
            <span className="col-title">{t('builder.colModules')}</span>
          </div>
          <div className="search-box">
            <Search size={14} />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={t('builder.search')}
            />
          </div>
          <div className="catalog-actions">
            <button
              className="cat-all"
              onClick={() => store.getState().setModules(modules.map((m) => m.id))}
            >
              {t('builder.selectAll')}
            </button>
            <button className="cat-all" onClick={() => store.getState().setModules([])}>
              {t('builder.deselectAll')}
            </button>
          </div>
          <div className="catalog-list">
            {grouped.length === 0 && <p className="catalog-empty">{t('builder.empty')}</p>}
            {grouped.map(({ category, mods }) => {
              const isCollapsed = collapsed.has(category.id);
              const allIn = mods.every((m) => moduleIds.includes(m.id));
              return (
                <section key={category.id} className="cat-group">
                  <div className="cat-head">
                    <button className="cat-toggle" onClick={() => toggleCollapsed(category.id)}>
                      {isCollapsed ? <ChevronRight size={13} /> : <ChevronDown size={13} />}
                      <span>{getL10n(category.title, lang)}</span>
                      <em>({mods.length})</em>
                    </button>
                    <button className="cat-all" onClick={() => toggleCategory(mods)}>
                      {allIn ? t('builder.deselectAll') : t('builder.selectAll')}
                    </button>
                  </div>
                  {!isCollapsed &&
                    mods.map((m) => {
                      const checked = moduleIds.includes(m.id);
                      return (
                        <label key={m.id} className={`mod-row${checked ? ' checked' : ''}`}>
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={() => store.getState().toggleModule(m.id)}
                          />
                          <span className="mod-check">
                            <Check size={11} strokeWidth={3} />
                          </span>
                          <Icon name={m.icon} size={15} className="mod-icon" strokeWidth={1.5} />
                          <span className="mod-text">
                            <strong>{getL10n(m.title, lang)}</strong>
                            <small>{getL10n(m.summary, lang)}</small>
                          </span>
                          <span className="mod-chip">
                            {t('builder.minShort', { count: m.durationMin })}
                          </span>
                        </label>
                      );
                    })}
                </section>
              );
            })}
          </div>
        </aside>

        {/* ---------- 02 deck ---------- */}
        <main className="col outline">
          <div className="col-head">
            <span className="col-num">02</span>
            <span className="col-title">{t('builder.colDeck')}</span>
            <span className="col-total">
              ~{t('builder.minShort', { count: totalMin })} ·{' '}
              {t('builder.slidesCount', { count: slides.length })}
            </span>
          </div>
          <div className="outline-list">
            {moduleIds.length === 0 && (
              <div className="outline-empty">
                <Mascot size={56} mood="think" />
                <p>{t('builder.outlineEmpty')}</p>
              </div>
            )}
            <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={onDragEnd}>
              <SortableContext items={moduleIds} strategy={verticalListSortingStrategy}>
                {moduleIds.map((id) => {
                  const mod = modules.find((m) => m.id === id);
                  if (!mod) return null;
                  return (
                    <SortableModuleCard
                      key={id}
                      mod={mod}
                      lang={lang}
                      expanded={expanded.has(id)}
                      onToggleExpand={() => toggleExpanded(id)}
                      onRemove={() => store.getState().toggleModule(id)}
                      slideCountLabel={t('builder.moduleSlides', { count: mod.slides.length })}
                      minLabel={t('builder.minShort', { count: mod.durationMin })}
                    />
                  );
                })}
              </SortableContext>
            </DndContext>
          </div>
        </main>

        {/* ---------- 03 customize ---------- */}
        <aside className="col customize">
          <div className="col-head">
            <span className="col-num">03</span>
            <span className="col-title">{t('builder.colCustomize')}</span>
          </div>
          <div className="customize-body">
            <div className="field">
              <label>{t('builder.presets')}</label>
              <div className="preset-grid">
                {presets.map((p) => (
                  <button
                    key={p.id}
                    className="preset-btn"
                    onClick={() => store.getState().setModules(p.moduleIds)}
                  >
                    {getL10n(p.title, lang)}
                  </button>
                ))}
              </div>
            </div>

            <div className="field">
              <label>{t('builder.tone')}</label>
              <div className="tone-row">
                <div className="segmented grow">
                  <button
                    className={tone === 'serious' ? 'active' : ''}
                    onClick={() => store.getState().setTone('serious')}
                  >
                    {t('builder.toneSerious')}
                  </button>
                  <button
                    className={tone === 'fun' ? 'active' : ''}
                    onClick={() => store.getState().setTone('fun')}
                  >
                    {t('builder.toneFun')}
                  </button>
                </div>
                <Mascot size={30} mood={tone === 'fun' ? 'wink' : 'idle'} />
              </div>
            </div>

            <div className="field">
              <label>{t('builder.theme')}</label>
              <div className="swatches">
                {THEME_SWATCHES.map((sw) => (
                  <button
                    key={sw.id}
                    className={`swatch${theme === sw.id ? ' active' : ''}`}
                    onClick={() => store.getState().setTheme(sw.id)}
                    title={sw.id}
                  >
                    <span className="swatch-sq" style={{ background: sw.colors[0] }}>
                      <i style={{ background: sw.colors[1] }} />
                      <i style={{ background: sw.colors[2] }} />
                    </span>
                    <small>{sw.id}</small>
                  </button>
                ))}
              </div>
            </div>

            <div className="field">
              <label>{t('builder.density')}</label>
              <div className="segmented">
                {(['short', 'full'] as Density[]).map((d) => (
                  <button
                    key={d}
                    className={density === d ? 'active' : ''}
                    onClick={() => store.getState().setDensity(d)}
                  >
                    {d === 'short' ? t('builder.densityShort') : t('builder.densityFull')}
                  </button>
                ))}
              </div>
              <p className="hint">{t('builder.densityHint')}</p>
            </div>

            <div className="field">
              <label className="check-label">
                <input
                  type="checkbox"
                  checked={showNotes}
                  onChange={() => store.getState().toggleNotes()}
                />
                <span>{t('builder.notes')}</span>
              </label>
              <p className="hint">{t('builder.notesHint')}</p>
            </div>

            <div className="field">
              <label>{t('builder.presenter')}</label>
              <input
                className="text-input"
                value={presenter.name}
                placeholder={t('builder.namePh')}
                onChange={(e) => store.getState().setPresenter({ name: e.target.value })}
              />
              <div className="two-inputs">
                <input
                  className="text-input"
                  value={presenter.handle}
                  placeholder={t('builder.handlePh')}
                  onChange={(e) => store.getState().setPresenter({ handle: e.target.value })}
                />
                <input
                  className="text-input"
                  value={presenter.org}
                  placeholder={t('builder.orgPh')}
                  onChange={(e) => store.getState().setPresenter({ org: e.target.value })}
                />
              </div>
            </div>

            <div className="field actions">
              <button className="btn outline wide" onClick={copyLink}>
                <Copy size={13} /> {t('builder.copyLink')}
              </button>
              {status && <p className="status-line">{status}</p>}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

function SortableModuleCard({
  mod,
  lang,
  expanded,
  onToggleExpand,
  onRemove,
  slideCountLabel,
  minLabel,
}: {
  mod: Module;
  lang: Lang;
  expanded: boolean;
  onToggleExpand: () => void;
  onRemove: () => void;
  slideCountLabel: string;
  minLabel: string;
}) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: mod.id,
  });
  return (
    <div
      ref={setNodeRef}
      className={`outline-card${isDragging ? ' dragging' : ''}`}
      style={{ transform: CSS.Transform.toString(transform), transition }}
    >
      <div className="outline-card-row">
        <button className="drag-handle" {...attributes} {...listeners} aria-label="drag">
          <GripVertical size={14} />
        </button>
        <button className="outline-card-main" onClick={onToggleExpand}>
          <Icon name={mod.icon} size={15} className="mod-icon" strokeWidth={1.5} />
          <span className="outline-card-title">{getL10n(mod.title, lang)}</span>
          <span className="outline-card-meta">
            {slideCountLabel} · {minLabel}
          </span>
          {expanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
        </button>
        <button className="remove-btn" onClick={onRemove} aria-label="remove">
          <Trash size={13} />
        </button>
      </div>
      {expanded && (
        <ul className="slide-mini-list">
          {mod.slides.map((s) => (
            <li key={s.id}>
              <span className="type-badge">{s.block.type}</span>
              <span className="slide-mini-title">{slideHeading(s.block, lang)}</span>
              {s.tone === 'fun' && <span className="fun-badge">fun</span>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
