import { useState } from "react";
import {
  CalendarDays,
  Users,
  BedDouble,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";
import { HOTEL } from "../config";

function localToday() {
  const now = new Date();
  const offset = now.getTimezoneOffset();
  return new Date(now.getTime() - offset * 60_000).toISOString().slice(0, 10);
}

function openWhatsApp(message) {
  const url = `https://wa.me/${HOTEL.whatsapp}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

export function RoomEnquiry() {
  const [form, setForm] = useState({
    checkIn: "",
    checkOut: "",
    guests: "2",
    rooms: "1",
    name: "",
    phone: "",
  });
  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    if (form.checkIn && form.checkOut && form.checkOut <= form.checkIn) {
      alert("Check-out date must be after check-in date.");
      return;
    }
    const message = [
      `Hello ${HOTEL.fullName}, I would like to enquire about a room booking.`,
      "",
      `Name: ${form.name || "Not provided"}`,
      `My contact number: ${form.phone || "Not provided"}`,
      `Check-in: ${form.checkIn}`,
      `Check-out: ${form.checkOut}`,
      `Guests: ${form.guests}`,
      `Number of rooms: ${form.rooms}`,
      "",
      "Please share room availability, room types and prices. Thank you!",
    ].join("\n");
    openWhatsApp(message);
  };
  return (
    <form className="booking-form" onSubmit={submit}>
      <div className="form-intro">
        <span className="eyebrow">YOUR STAY, YOUR WAY</span>
        <h3>Room enquiry</h3>
        <p>
          Tell us your dates. Our team can share room options and rates on
          WhatsApp.
        </p>
      </div>
      <div className="form-grid">
        <label>
          Check-in date{" "}
          <span className="input-icon">
            <CalendarDays size={16} />
          </span>
          <input
            required
            type="date"
            name="checkIn"
            value={form.checkIn}
            min={localToday()}
            onChange={update}
          />
        </label>
        <label>
          Check-out date{" "}
          <span className="input-icon">
            <CalendarDays size={16} />
          </span>
          <input
            required
            type="date"
            name="checkOut"
            value={form.checkOut}
            min={form.checkIn || localToday()}
            onChange={update}
          />
        </label>
        <label>
          Guests{" "}
          <span className="input-icon">
            <Users size={16} />
          </span>
          <select name="guests" value={form.guests} onChange={update}>
            {["1", "2", "3", "4", "5", "6", "7", "8+"].map((x) => (
              <option key={x} value={x}>
                {x} {x === "1" ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </label>
        <label>
          Rooms{" "}
          <span className="input-icon">
            <BedDouble size={16} />
          </span>
          <select name="rooms" value={form.rooms} onChange={update}>
            {["1", "2", "3", "4", "5+"].map((x) => (
              <option key={x} value={x}>
                {x} {x === "1" ? "room" : "rooms"}
              </option>
            ))}
          </select>
        </label>
        <label>
          Your name{" "}
          <input
            name="name"
            value={form.name}
            onChange={update}
            placeholder="Full name"
            autoComplete="name"
          />
        </label>
        <label>
          Contact number{" "}
          <input
            name="phone"
            value={form.phone}
            onChange={update}
            placeholder="Your phone number"
            inputMode="tel"
            autoComplete="tel"
          />
        </label>
      </div>
      <button className="button button-primary form-submit" type="submit">
        <MessageCircle size={18} /> Enquire on WhatsApp{" "}
        <ArrowUpRight size={17} />
      </button>
      <p className="form-note">
        This is an enquiry, not an instant confirmed reservation. The hotel will
        confirm availability and rates.
      </p>
    </form>
  );
}

export function BanquetEnquiry() {
  const [form, setForm] = useState({
    event: "Wedding",
    date: "",
    guests: "100–200",
    name: "",
    phone: "",
    notes: "",
  });
  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    const message = [
      `Hello ${HOTEL.fullName}, I would like to enquire about a banquet booking.`,
      "",
      `Name: ${form.name}`,
      `Contact number: ${form.phone}`,
      `Event type: ${form.event}`,
      `Event date: ${form.date}`,
      `Expected guests: ${form.guests}`,
      `Additional details: ${form.notes || "None"}`,
      "",
      "Please share availability, banquet capacity and package/pricing details. Thank you!",
    ].join("\n");
    openWhatsApp(message);
  };
  return (
    <form className="booking-form banquet-form" onSubmit={submit}>
      <div className="form-intro">
        <span className="eyebrow">MAKE IT A MOMENT</span>
        <h3>Banquet enquiry</h3>
        <p>
          Share a few details about your celebration and discuss the
          arrangements with our team.
        </p>
      </div>
      <div className="form-grid">
        <label>
          Event type
          <select name="event" value={form.event} onChange={update}>
            {[
              "Wedding",
              "Engagement",
              "Birthday",
              "Anniversary",
              "Corporate event",
              "Family function",
              "Other",
            ].map((x) => (
              <option key={x}>{x}</option>
            ))}
          </select>
        </label>
        <label>
          Preferred event date
          <input
            required
            type="date"
            name="date"
            min={localToday()}
            value={form.date}
            onChange={update}
          />
        </label>
        <label>
          Expected guests
          <select name="guests" value={form.guests} onChange={update}>
            {[
              "Under 50",
              "50–100",
              "100–200",
              "200–300",
              "300+",
              "Not sure yet",
            ].map((x) => (
              <option key={x}>{x}</option>
            ))}
          </select>
        </label>
        <label>
          Your name
          <input
            required
            name="name"
            value={form.name}
            onChange={update}
            placeholder="Full name"
            autoComplete="name"
          />
        </label>
        <label>
          Contact number
          <input
            required
            name="phone"
            value={form.phone}
            onChange={update}
            placeholder="Your phone number"
            inputMode="tel"
            autoComplete="tel"
          />
        </label>
        <label className="full-field">
          Anything else?{" "}
          <textarea
            name="notes"
            value={form.notes}
            onChange={update}
            placeholder="Decoration, timing or other requirements (optional)"
            rows="3"
          />
        </label>
      </div>
      <button className="button button-primary form-submit" type="submit">
        <MessageCircle size={18} /> Enquire on WhatsApp{" "}
        <ArrowUpRight size={17} />
      </button>
      <p className="form-note">
        The hotel team will confirm venue availability, capacity and pricing
        directly.
      </p>
    </form>
  );
}
