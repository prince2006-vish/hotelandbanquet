import { useState } from "react";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  X,
  Users,
  BedDouble,
  Check,
  MessageCircle,
  Images,
} from "lucide-react";
import { HOTEL, ROOM_TYPES, BANQUET_TYPES } from "../config";

function whatsapp(message) {
  window.open(
    `https://wa.me/${HOTEL.whatsapp}?text=${encodeURIComponent(message)}`,
    "_blank",
    "noopener,noreferrer",
  );
}

function ImageStrip({ images, title, onView }) {
  return (
    <div className="multi-image-strip">
      <button
        className="card-main-image"
        onClick={onView}
        aria-label={`View ${title} photos`}
      >
        <img
          src={images[0]}
          alt={`${title} - photo 1`}
          loading="lazy"
          decoding="async"
        />
        <span className="image-count">
          <Images size={14} /> {images.length} photos
        </span>
      </button>
      <div className="mini-images">
        {images.slice(1, 3).map((image, i) => (
          <button
            key={image}
            onClick={onView}
            aria-label={`View ${title} photo ${i + 2}`}
          >
            <img
              src={image}
              alt={`${title} - photo ${i + 2}`}
              loading="lazy"
              decoding="async"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export function DetailModal({ item, type, onClose, onBook }) {
  const [index, setIndex] = useState(0);
  if (!item) return null;
  const isRoom = type === "room";
  return (
    <div
      className="detail-backdrop"
      role="presentation"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <section
        className="detail-modal"
        role="dialog"
        aria-modal="true"
        aria-label={`${item.name} details`}
      >
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Close details"
        >
          <X size={20} />
        </button>
        <div className="modal-photo-wrap">
          <img
            src={item.images[index]}
            alt={`${item.name} photo ${index + 1}`}
            loading="lazy"
            decoding="async"
          />
          <button
            className="modal-arrow prev"
            onClick={() =>
              setIndex((index + item.images.length - 1) % item.images.length)
            }
            aria-label="Previous photo"
          >
            <ChevronLeft />
          </button>
          <button
            className="modal-arrow next"
            onClick={() => setIndex((index + 1) % item.images.length)}
            aria-label="Next photo"
          >
            <ChevronRight />
          </button>
          <span className="modal-count">
            {index + 1} / {item.images.length}
          </span>
        </div>
        <div className="modal-content">
          <span className="eyebrow">
            {isRoom ? "ROOM DETAILS" : "BANQUET DETAILS"}
          </span>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          {isRoom ? (
            <>
              <div className="detail-meta">
                <span>
                  <Users size={16} /> {item.guests}
                </span>
                <span>
                  <BedDouble size={16} /> {item.bed}
                </span>
              </div>
              <div className="amenity-list">
                {item.amenities.map((a) => (
                  <span key={a}>
                    <Check size={14} /> {a}
                  </span>
                ))}
              </div>
              <strong className="price-line">{item.price}</strong>
            </>
          ) : (
            <>
              <div className="capacity-pill">
                <Users size={17} /> {item.capacity}
              </div>
              <p className="capacity-disclaimer">{item.capacityNote}</p>
              <div className="amenity-list">
                {item.occasions.map((a) => (
                  <span key={a}>
                    <Check size={14} /> {a}
                  </span>
                ))}
              </div>
            </>
          )}
          <button
            className="button button-primary form-submit"
            onClick={() => onBook(item)}
          >
            <MessageCircle size={18} />{" "}
            {isRoom ? "Book on WhatsApp" : "Enquire on WhatsApp"}{" "}
            <ArrowUpRight size={17} />
          </button>
        </div>
      </section>
    </div>
  );
}

export function RoomCards() {
  const [selected, setSelected] = useState(null);
  const book = (room) =>
    whatsapp(
      [
        `Hello ${HOTEL.fullName}, I would like to enquire about the ${room.name}.`,
        `Room category: ${room.name}`,
        "Please share current room availability, confirmed facilities and price.",
        "I understand this message is an enquiry and the booking will be confirmed by the hotel.",
      ].join("\n"),
    );
  return (
    <>
      <div className="room-cards room-cards-detailed">
        {ROOM_TYPES.map((room, i) => (
          <article className="room-card detailed-card" key={room.id}>
            <ImageStrip
              images={room.images}
              title={room.name}
              onView={() => setSelected(room)}
            />
            <div className="room-card-copy">
              <div className="card-eyebrow">ROOM COLLECTION 0{i + 1}</div>
              <h3>{room.name}</h3>
              <p>{room.tagline}</p>
              <div className="card-meta-line">
                <span>
                  <Users size={15} /> {room.guests}
                </span>
                <strong>{room.price}</strong>
              </div>
              <div className="card-actions">
                <button
                  className="button button-outline"
                  onClick={() => setSelected(room)}
                >
                  View details <ArrowUpRight size={15} />
                </button>
                <button
                  className="button button-primary"
                  onClick={() => book(room)}
                >
                  <MessageCircle size={16} /> Book on WhatsApp
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
      {selected && (
        <DetailModal
          item={selected}
          type="room"
          onClose={() => setSelected(null)}
          onBook={book}
        />
      )}
    </>
  );
}

export function BanquetCards() {
  const [selected, setSelected] = useState(null);
  const book = (hall) =>
    whatsapp(
      [
        `Hello ${HOTEL.fullName}, I would like to enquire about the ${hall.name}.`,
        `Venue / setup: ${hall.name}`,
        `Planning guest range: ${hall.capacity}`,
        "Please confirm actual capacity, available dates, package/pricing, seating arrangements and decoration options.",
      ].join("\n"),
    );
  return (
    <>
      <div className="banquet-cards">
        {BANQUET_TYPES.map((hall, i) => (
          <article className="banquet-card" key={hall.id}>
            <ImageStrip
              images={hall.images}
              title={hall.name}
              onView={() => setSelected(hall)}
            />
            <div className="banquet-card-copy">
              <span className="card-eyebrow">CELEBRATION SPACE 0{i + 1}</span>
              <h3>{hall.name}</h3>
              <p>{hall.tagline}</p>
              <div className="capacity-pill">
                <Users size={16} /> {hall.capacity}
              </div>
              <p className="capacity-disclaimer">{hall.capacityNote}</p>
              <div className="occasion-list">
                {hall.occasions.slice(0, 3).map((x) => (
                  <span key={x}>{x}</span>
                ))}
              </div>
              <div className="card-actions">
                <button
                  className="button button-outline"
                  onClick={() => setSelected(hall)}
                >
                  View details <ArrowUpRight size={15} />
                </button>
                <button
                  className="button button-primary"
                  onClick={() => book(hall)}
                >
                  <MessageCircle size={16} /> Enquire on WhatsApp
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
      {selected && (
        <DetailModal
          item={selected}
          type="banquet"
          onClose={() => setSelected(null)}
          onBook={book}
        />
      )}
    </>
  );
}
