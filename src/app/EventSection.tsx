import { useRef, useState } from 'react';
import type { ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { QRCodeSVG } from 'qrcode.react';
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
import { ChevronDown, ChevronRight, GripVertical, Plus, Trash, Upload, X } from 'lucide-react';
import type { EventLink, LinkKind } from '../content/schema';
import { LINK_KINDS, isHttpUrl, linkDefaultLabel, linkIcon } from '../lib/eventMeta';
import { useDeckStore } from '../store/deckStore';
import type { EventState } from '../store/deckStore';
import { modules } from '../content/modules';
import Icon from '../components/Icon';

const uid = () => `l${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`;

/** The "04 Event" block in the customize column: live-event settings + community links. */
export default function EventSection() {
  const { t } = useTranslation();
  const event = useDeckStore((s) => s.event);
  const moduleIds = useDeckStore((s) => s.moduleIds);
  const lang = useDeckStore((s) => s.lang);
  const setEvent = (patch: Partial<EventState>) => useDeckStore.getState().setEvent(patch);

  const [open, setOpen] = useState(true);
  const [picking, setPicking] = useState(false);
  const logoRef = useRef<HTMLInputElement>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 4 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates }),
  );

  const links = event.links;
  const setLinks = (ls: EventLink[]) => setEvent({ links: ls });
  const patchLink = (id: string, patch: Partial<EventLink>) =>
    setLinks(links.map((l) => (l.id === id ? { ...l, ...patch } : l)));

  const addLink = (kind: LinkKind) => {
    setLinks([...links, { id: uid(), kind, label: linkDefaultLabel(kind, lang), url: '' }]);
    setPicking(false);
  };

  const onDragEnd = (e: DragEndEvent) => {
    const { active, over } = e;
    if (!over || active.id === over.id) return;
    const from = links.findIndex((l) => l.id === active.id);
    const to = links.findIndex((l) => l.id === over.id);
    if (from >= 0 && to >= 0) setLinks(arrayMove(links, from, to));
  };

  const defaultMin = moduleIds.reduce(
    (a, id) => a + (modules.find((m) => m.id === id)?.durationMin ?? 0),
    0,
  );

  const onLogo = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    e.target.value = '';
    if (!file) return;
    if (file.size > 300 * 1024) return;
    const r = new FileReader();
    r.onload = () => setEvent({ hostLogo: String(r.result) });
    r.readAsDataURL(file);
  };

  return (
    <div className="field event-section">
      <button className="event-head" onClick={() => setOpen((v) => !v)}>
        <span className="col-num">04</span>
        <span className="col-title">{t('eventkit.section')}</span>
        {open ? <ChevronDown size={13} /> : <ChevronRight size={13} />}
      </button>
      {open && (
        <div className="event-body">
          {/* event identity */}
          <input
            className="text-input"
            value={event.name}
            placeholder={t('eventkit.namePh')}
            onChange={(e) => setEvent({ name: e.target.value })}
          />
          <div className="two-inputs">
            <input
              className="text-input"
              value={event.date}
              placeholder={t('eventkit.datePh')}
              onChange={(e) => setEvent({ date: e.target.value })}
            />
            <input
              className="text-input"
              value={event.location}
              placeholder={t('eventkit.locationPh')}
              onChange={(e) => setEvent({ location: e.target.value })}
            />
          </div>
          <input
            className="text-input"
            value={event.hashtag}
            placeholder={t('eventkit.hashtagPh')}
            onChange={(e) => setEvent({ hashtag: e.target.value })}
          />

          {/* channels */}
          <label className="event-sub">{t('eventkit.channels')}</label>
          <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={onDragEnd}>
            <SortableContext items={links.map((l) => l.id)} strategy={verticalListSortingStrategy}>
              {links.map((l) => (
                <SortableLinkRow
                  key={l.id}
                  link={l}
                  onPatch={patchLink}
                  onRemove={() => setLinks(links.filter((x) => x.id !== l.id))}
                  urlPh={t('eventkit.urlPh')}
                />
              ))}
            </SortableContext>
          </DndContext>
          {picking ? (
            <div className="kind-grid">
              {LINK_KINDS.map((k) => (
                <button key={k.kind} className="kind-tile" onClick={() => addLink(k.kind)}>
                  <Icon name={k.icon} size={16} strokeWidth={1.5} />
                  <small>{k.label[lang === 'it' ? 'it' : 'en']}</small>
                </button>
              ))}
              <button className="kind-tile cancel" onClick={() => setPicking(false)}>
                <X size={16} />
                <small>{t('eventkit.cancel')}</small>
              </button>
            </div>
          ) : (
            <button className="btn outline wide" onClick={() => setPicking(true)}>
              <Plus size={13} /> {t('eventkit.addChannel')}
            </button>
          )}

          {/* live Q&A */}
          <label className="event-sub">{t('eventkit.liveQa')}</label>
          <input
            className="text-input"
            value={event.liveQa.url}
            placeholder={t('eventkit.qaUrlPh')}
            onChange={(e) => setEvent({ liveQa: { ...event.liveQa, url: e.target.value } })}
          />
          <input
            className="text-input"
            value={event.liveQa.label}
            placeholder={t('eventkit.qaLabelPh')}
            onChange={(e) => setEvent({ liveQa: { ...event.liveQa, label: e.target.value } })}
          />
          <label className="check-label">
            <input
              type="checkbox"
              checked={event.liveQa.badge}
              onChange={(e) => setEvent({ liveQa: { ...event.liveQa, badge: e.target.checked } })}
            />
            <span>{t('eventkit.qaBadge')}</span>
          </label>

          {/* wifi */}
          <label className="event-sub">Wi-Fi</label>
          <div className="two-inputs">
            <input
              className="text-input"
              value={event.wifi.ssid}
              placeholder="SSID"
              onChange={(e) => setEvent({ wifi: { ...event.wifi, ssid: e.target.value } })}
            />
            <input
              className="text-input"
              value={event.wifi.password}
              placeholder={t('eventkit.wifiPassPh')}
              onChange={(e) => setEvent({ wifi: { ...event.wifi, password: e.target.value } })}
            />
          </div>
          <div className="segmented">
            {(['WPA', 'nopass'] as const).map((s) => (
              <button
                key={s}
                className={event.wifi.security === s ? 'active' : ''}
                onClick={() => setEvent({ wifi: { ...event.wifi, security: s } })}
              >
                {s === 'WPA' ? 'WPA' : t('eventkit.wifiOpen')}
              </button>
            ))}
          </div>
          <p className="hint">{t('eventkit.wifiHint')}</p>

          {/* host logo */}
          <label className="event-sub">{t('eventkit.hostLogo')}</label>
          <div className="logo-row">
            {event.hostLogo ? (
              <>
                <img src={event.hostLogo} alt="host logo" className="logo-preview" />
                <button className="btn ghost" onClick={() => setEvent({ hostLogo: undefined })}>
                  <X size={13} />
                </button>
              </>
            ) : (
              <button className="btn outline wide" onClick={() => logoRef.current?.click()}>
                <Upload size={13} /> {t('eventkit.logoUpload')}
              </button>
            )}
            <input
              ref={logoRef}
              type="file"
              accept="image/png,image/svg+xml"
              hidden
              onChange={onLogo}
            />
          </div>
          <p className="hint">{t('eventkit.logoHint')}</p>

          {/* auto slides */}
          <label className="event-sub">{t('eventkit.autoSlides')}</label>
          <label className="check-label">
            <input
              type="checkbox"
              checked={event.autoSlides.agenda}
              onChange={(e) =>
                setEvent({ autoSlides: { ...event.autoSlides, agenda: e.target.checked } })
              }
            />
            <span>{t('eventkit.autoAgenda')}</span>
          </label>
          <label className="check-label">
            <input
              type="checkbox"
              checked={event.autoSlides.community}
              onChange={(e) =>
                setEvent({ autoSlides: { ...event.autoSlides, community: e.target.checked } })
              }
            />
            <span>{t('eventkit.autoCommunity')}</span>
          </label>

          {/* planned duration */}
          <label className="event-sub">{t('eventkit.planned')}</label>
          <input
            className="text-input"
            type="number"
            min={1}
            value={event.plannedMinutes ?? ''}
            placeholder={`${defaultMin}`}
            onChange={(e) =>
              setEvent({
                plannedMinutes:
                  e.target.value === '' ? undefined : Math.max(1, Number(e.target.value)),
              })
            }
          />
          <p className="hint">{t('eventkit.plannedHint')}</p>
        </div>
      )}
    </div>
  );
}

function SortableLinkRow({
  link,
  onPatch,
  onRemove,
  urlPh,
}: {
  link: EventLink;
  onPatch: (id: string, patch: Partial<EventLink>) => void;
  onRemove: () => void;
  urlPh: string;
}) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: link.id,
  });
  const valid = isHttpUrl(link.url);
  return (
    <div
      ref={setNodeRef}
      className={`link-row${isDragging ? ' dragging' : ''}`}
      style={{ transform: CSS.Transform.toString(transform), transition }}
    >
      <button className="drag-handle" {...attributes} {...listeners} aria-label="drag">
        <GripVertical size={13} />
      </button>
      <span className="link-kind">
        <Icon name={linkIcon(link.kind)} size={15} strokeWidth={1.5} />
      </span>
      <div className="link-fields">
        <input
          className="text-input"
          value={link.label}
          onChange={(e) => onPatch(link.id, { label: e.target.value })}
        />
        <input
          className={`text-input mono${link.url && !valid ? ' invalid' : ''}`}
          value={link.url}
          placeholder={urlPh}
          onChange={(e) => onPatch(link.id, { url: e.target.value })}
        />
      </div>
      {valid && (
        <span className="link-qr">
          <QRCodeSVG value={link.url.trim()} size={64} level="M" />
        </span>
      )}
      <button className="remove-btn" onClick={onRemove} aria-label="remove">
        <Trash size={13} />
      </button>
    </div>
  );
}
