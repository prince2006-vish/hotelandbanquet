import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  MapPin,
  MessageCircle,
  Sparkles,
  BedDouble,
  CalendarDays,
  Heart,
  CheckCircle2,
  X,
  ChevronLeft,
  ChevronRight,
  Utensils,
  Leaf,
} from "lucide-react";
import Navbar from "./components/Navbar";
import Scene3D from "./components/Scene3D";
import Reveal from "./components/Reveal";
import { RoomEnquiry, BanquetEnquiry } from "./components/BookingForms";
import { RoomCards, BanquetCards } from "./components/DetailCards";
import { HOTEL, GALLERY, RESTAURANT_MENU } from "./config";

const heroImage =
  "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=2200&q=90";
const banquetImage =
  "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1800&q=90";

function Hero() {
  const reduce = useReducedMotion();
  return (
    <section className="hero" id="home">
      <div
        className="hero-image"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="hero-shade" />
      <div className="hero-grain" />
      <div className="hero-content shell">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-kicker">
            <span /> A PLACE TO STAY. A PLACE TO CELEBRATE.
          </div>
          <h1>
            Where moments
            <br />
            become <em>memories.</em>
          </h1>
          <p className="hero-copy">
            A thoughtful stay and a beautiful setting for life's most meaningful
            celebrations in Ghazipur.
          </p>
          <div className="hero-actions">
            <a className="button button-gold" href="#booking">
              Explore room stays <ArrowUpRight size={17} />
            </a>
            <a className="text-link light-link" href="#banquet">
              Plan your celebration <ArrowRight size={16} />
            </a>
          </div>
        </motion.div>
        <div className="hero-bottom">
          <span>
            <MapPin size={15} /> {HOTEL.city}
          </span>
          <a href="#about">
            SCROLL TO DISCOVER <ArrowDown size={14} />
          </a>
        </div>
      </div>
      <Scene3D />
      <div className="hero-orbit orbit-one" />
      <div className="hero-orbit orbit-two" />
    </section>
  );
}

function SectionHeading({ eyebrow, title, copy, light = false }) {
  return (
    <div className={`section-heading ${light ? "heading-light" : ""}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </div>
  );
}

function About() {
  return (
    <section className="section about-section" id="about">
      <div className="shell about-grid">
        <Reveal className="about-visual">
          <img
            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1300&q=85"
            alt="Elegant, warm hotel interior"
            loading="lazy"
          />
          <div className="image-caption">
            <span>THE MEETHA PANI EXPERIENCE</span>
            <Sparkles size={18} />
          </div>
          <div className="floating-note">
            <span className="note-icon">MP</span>
            <span>
              <strong>Stay a little longer.</strong>
              <small>Celebrate a little bigger.</small>
            </span>
          </div>
        </Reveal>
        <Reveal className="about-copy" delay={0.12}>
          <SectionHeading
            eyebrow="WELCOME TO MEETHA PANI"
            title={
              <>
                A warm welcome.
                <br />
                <em>A memorable experience.</em>
              </>
            }
          />
          <p className="body-copy">
            Some places are made for a peaceful stay. Others are made for the
            moments you'll remember for years. Meetha Pani brings both
            possibilities together in Ghazipur.
          </p>
          <p className="body-copy muted-copy">
            Whether you're visiting the city, gathering with family or planning
            a special occasion, our team is here to help you explore the right
            arrangements.
          </p>
          <div className="value-list">
            <span>
              <CheckCircle2 size={17} /> Room stay enquiries
            </span>
            <span>
              <CheckCircle2 size={17} /> Banquet & event enquiries
            </span>
            <span>
              <CheckCircle2 size={17} /> Personal assistance
            </span>
          </div>
          <a className="text-link" href="#contact">
            Get to know us <ArrowRight size={17} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function Rooms() {
  return (
    <section className="section rooms-section" id="rooms">
      <div className="shell">
        <Reveal>
          <SectionHeading
            eyebrow="YOUR HOME AWAY FROM HOME"
            title={
              <>
                Find your kind of <em>comfort.</em>
              </>
            }
            copy="Explore room styles, view multiple photos and enquire directly on WhatsApp. The hotel will confirm actual facilities, rates and availability."
          />
        </Reveal>
        <RoomCards />
        <p className="disclaimer-line">
          Room names and photos are illustrative until the hotel confirms its
          actual room inventory. Facilities, occupancy and prices must be
          verified before publishing.
        </p>
      </div>
    </section>
  );
}

function Banquet() {
  return (
    <section className="banquet-section" id="banquet">
      <div
        className="banquet-photo"
        style={{ backgroundImage: `url(${banquetImage})` }}
      />
      <div className="banquet-overlay" />
      <div className="shell banquet-content">
        <Reveal>
          <span className="eyebrow gold-eyebrow">FOR THE DAYS THAT MATTER</span>
          <h2>
            Bring your people.
            <br />
            We'll help set the <em>scene.</em>
          </h2>
          <p>
            From intimate family gatherings to milestone celebrations, start
            planning your event with a personal enquiry.
          </p>
          <div className="event-tags">
            <span>Weddings</span>
            <span>Engagements</span>
            <span>Birthdays</span>
            <span>Family functions</span>
            <span>Corporate events</span>
          </div>
          <a className="button button-gold" href="#booking">
            Enquire about the banquet <ArrowUpRight size={17} />
          </a>
          <small className="capacity-note">
            Banquet capacity and packages available on enquiry.
          </small>
        </Reveal>
      </div>
    </section>
  );
}

function BanquetOptions() {
  return (
    <section className="section banquet-options-section" id="banquet-options">
      <div className="shell">
        <Reveal>
          <SectionHeading
            eyebrow="CHOOSE YOUR CELEBRATION"
            title={
              <>
                A space for every <em>gathering.</em>
              </>
            }
            copy="Compare suggested event setups, browse multiple photos and send your requirements to the hotel. Final capacity and packages are confirmed by the team."
          />
        </Reveal>
        <BanquetCards />
        <p className="disclaimer-line">
          Guest ranges shown here are sample planning estimates, not verified
          Meetha Pani capacity. Confirm exact seating and standing capacity with
          the hotel before making an event commitment.
        </p>
      </div>
    </section>
  );
}

function RestaurantMenu() {
  const [active, setActive] = useState("All");
  const categories = [
    "All",
    ...new Set(RESTAURANT_MENU.map((item) => item.category)),
  ];
  const items =
    active === "All"
      ? RESTAURANT_MENU
      : RESTAURANT_MENU.filter((item) => item.category === active);
  return (
    <section className="section restaurant-menu-section" id="restaurant-menu">
      <div className="shell">
        <Reveal>
          <SectionHeading
            eyebrow="FROM OUR RESTAURANT"
            title={
              <>
                Good food, made for <em>good moments.</em>
              </>
            }
            copy="Browse the sample menu and prices below. Please confirm current availability and final prices directly with the restaurant."
          />
        </Reveal>
        <div className="menu-intro-note">
          <Utensils size={18} />
          <span>
            <strong>Restaurant menu only</strong>
            <small>
              Browse dishes and prices here. Online ordering, cart and payment
              are not available on this website.
            </small>
          </span>
        </div>
        <div
          className="menu-filters"
          role="group"
          aria-label="Filter restaurant menu"
        >
          {categories.map((category) => (
            <button
              type="button"
              key={category}
              className={
                active === category ? "menu-filter active" : "menu-filter"
              }
              onClick={() => setActive(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="menu-card-grid">
          {items.map((item) => (
            <article className="food-card" key={item.id}>
              <div className="food-card-image">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  decoding="async"
                />
                <span className="food-type">
                  <Leaf size={12} /> {item.type}
                </span>
              </div>
              <div className="food-card-copy">
                <div className="food-card-title">
                  <h3>{item.name}</h3>
                  <strong>₹{item.price}</strong>
                </div>
                <p>{item.description}</p>
                <span className="food-category">{item.category}</span>
              </div>
            </article>
          ))}
        </div>
        <p className="disclaimer-line menu-disclaimer">
          Demo menu and sample prices are for layout preview only and are not
          verified Meetha Pani restaurant rates. Replace them with the client's
          approved menu and actual prices before publishing.
        </p>
      </div>
    </section>
  );
}

function Gallery() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState(null);
  const filters = [
    "All",
    "Rooms",
    "Banquet",
    "Interiors",
    "Events",
    "Celebrations",
  ];
  const items =
    active === "All" ? GALLERY : GALLERY.filter((x) => x.category === active);
  return (
    <section className="section gallery-section" id="gallery">
      <div className="shell">
        <Reveal>
          <SectionHeading
            eyebrow="A GLIMPSE OF THE EXPERIENCE"
            title={
              <>
                Spaces for <em>special moments.</em>
              </>
            }
            copy="Explore a visual moodboard of the kind of comfort and celebrations we're here to help you plan."
          />
        </Reveal>
        <div
          className="gallery-filters"
          role="group"
          aria-label="Filter gallery"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              className={active === filter ? "filter active" : "filter"}
              onClick={() => setActive(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
        <motion.div layout className="gallery-grid">
          {items.map((item, i) => (
            <motion.figure
              layout
              key={item.title}
              className={`gallery-item gallery-item-${i % 3}`}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
            >
              <button
                className="gallery-open"
                type="button"
                onClick={() => setLightbox(item)}
                aria-label={`Open photo: ${item.title}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                />
              </button>
              <figcaption>
                <span>{item.category}</span>
                <strong>{item.title}</strong>
                <ArrowUpRight size={17} />
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
        <p className="disclaimer-line">
          Gallery images are illustrative placeholders. Replace them with
          authentic Meetha Pani property photos before launch.
        </p>
      </div>
      {lightbox && (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.title}
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setLightbox(null);
          }}
        >
          <button
            type="button"
            className="gallery-lightbox-close"
            onClick={() => setLightbox(null)}
            aria-label="Close photo"
          >
            <X />
          </button>
          <img src={lightbox.image} alt={lightbox.title} decoding="async" />
          <div className="gallery-lightbox-caption">
            <span>{lightbox.category}</span>
            <strong>{lightbox.title}</strong>
          </div>
        </div>
      )}
    </section>
  );
}

function FAQ() {
  const questions = [
    {
      q: "How do I enquire about a room?",
      a: "Choose your check-in and check-out dates in the Room Enquiry form and send the pre-filled message on WhatsApp. The hotel team will confirm availability and rates.",
    },
    {
      q: "Does the website confirm my booking automatically?",
      a: "No. This website is a frontend enquiry experience. Your booking is not confirmed until the hotel team confirms the details with you on WhatsApp.",
    },
    {
      q: "How can I enquire about a wedding or banquet?",
      a: "Select Banquet Event in the enquiry section, add the event date, event type and expected guest count, then send the message on WhatsApp.",
    },
    {
      q: "Where can I see room prices and banquet packages?",
      a: "Prices and packages are shared by the hotel on enquiry. Please confirm the latest rates, inclusions and any advance or cancellation terms directly with the team.",
    },
    {
      q: "Are the room photos and capacities final?",
      a: "Some photos and sample capacity ranges on this demo are illustrative placeholders. Please confirm actual room features, venue capacity and available arrangements with the hotel before making plans.",
    },
    {
      q: "Can I order food from the restaurant menu online?",
      a: "No. The restaurant menu is for viewing dishes and prices only. This website does not include a cart, food ordering or online payments. Please contact the restaurant directly for availability and service.",
    },
  ];
  return (
    <section className="section faq-section" id="faq">
      <div className="shell faq-layout">
        <Reveal>
          <SectionHeading
            eyebrow="GOOD TO KNOW"
            title={
              <>
                A few helpful <em>answers.</em>
              </>
            }
            copy="Find out how enquiries work before you get in touch."
          />
        </Reveal>
        <Reveal className="faq-list" delay={0.08}>
          {questions.map((item, i) => (
            <details className="faq-item" key={item.q} open={i === 0}>
              <summary>
                {item.q}
                <span>+</span>
              </summary>
              <p>{item.a}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function Booking() {
  const [tab, setTab] = useState("room");
  return (
    <section className="section booking-section" id="booking">
      <div className="shell booking-layout">
        <Reveal className="booking-aside">
          <span className="eyebrow">LET'S PLAN YOUR VISIT</span>
          <h2>
            One message
            <br />
            starts it <em>all.</em>
          </h2>
          <p>
            Choose what you're planning and share a few details. WhatsApp will
            open with a ready-to-send enquiry for our team.
          </p>
          <div className="booking-benefit">
            <span>
              <MessageCircle size={19} />
            </span>
            <div>
              <strong>Direct WhatsApp enquiry</strong>
              <small>No account or app form required on this website.</small>
            </div>
          </div>
          <div className="booking-benefit">
            <span>
              <CalendarDays size={19} />
            </span>
            <div>
              <strong>Your dates, your details</strong>
              <small>
                We pass your selected dates and requirements into the message.
              </small>
            </div>
          </div>
          <div className="booking-benefit">
            <span>
              <Heart size={19} />
            </span>
            <div>
              <strong>Personal follow-up</strong>
              <small>
                Availability and final booking are confirmed by the hotel.
              </small>
            </div>
          </div>
        </Reveal>
        <Reveal className="booking-panel" delay={0.1}>
          <div
            className="booking-tabs"
            role="tablist"
            aria-label="Choose enquiry type"
          >
            <button
              role="tab"
              aria-selected={tab === "room"}
              className={tab === "room" ? "booking-tab active" : "booking-tab"}
              onClick={() => setTab("room")}
            >
              <BedDouble size={17} /> Room stay
            </button>
            <button
              role="tab"
              aria-selected={tab === "banquet"}
              className={
                tab === "banquet" ? "booking-tab active" : "booking-tab"
              }
              onClick={() => setTab("banquet")}
            >
              <Sparkles size={17} /> Banquet event
            </button>
          </div>
          {tab === "room" ? <RoomEnquiry /> : <BanquetEnquiry />}
        </Reveal>
      </div>
    </section>
  );
}

function Contact() {
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(HOTEL.mapQuery)}`;
  const waUrl = `https://wa.me/${HOTEL.whatsapp}?text=${encodeURIComponent(`Hello ${HOTEL.fullName}, I would like to make an enquiry.`)}`;
  return (
    <section className="section contact-section" id="contact">
      <div className="shell contact-grid">
        <Reveal>
          <span className="eyebrow">WE'RE HERE TO HELP</span>
          <h2>
            Let's make your
            <br />
            <em>visit memorable.</em>
          </h2>
          <p className="body-copy">
            For room stays, celebrations or general questions, get in touch with
            Meetha Pani Hotel & Banquet.
          </p>
          <div className="contact-details">
            <a href={mapUrl} target="_blank" rel="noreferrer">
              <span>
                <MapPin size={19} />
              </span>
              <div>
                <small>FIND US</small>
                <strong>{HOTEL.city}</strong>
                <em>Open in Google Maps ↗</em>
              </div>
            </a>
            <a href={waUrl} target="_blank" rel="noreferrer">
              <span>
                <MessageCircle size={19} />
              </span>
              <div>
                <small>WHATSAPP ENQUIRIES</small>
                <strong>+91 88532 60723</strong>
                <em>Start a conversation ↗</em>
              </div>
            </a>
          </div>
        </Reveal>
        <Reveal className="contact-card" delay={0.12}>
          <div className="contact-card-top">
            <span className="brand-mark">MP</span>
            <span className="eyebrow">MEETHA PANI / GHAZIPUR</span>
          </div>
          <div className="contact-card-bottom">
            <span>
              Stay with us.
              <br />
              <em>Celebrate with us.</em>
            </span>
            <Sparkles size={27} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-top">
        <a className="brand footer-brand" href="#home">
          <span className="brand-mark">MP</span>
          <span className="brand-name">
            <strong>MEETHA PANI</strong>
            <small>HOTEL & BANQUET</small>
          </span>
        </a>
        <p>
          Made for meaningful stays
          <br />
          and memorable celebrations.
        </p>
        <div className="footer-links">
          <a href="#rooms">Rooms</a>
          <a href="#banquet">Banquet</a>
          <a href="#restaurant-menu">Restaurant Menu</a>
          <a href="#gallery">Gallery</a>
          <a href="#faq">FAQs</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="back-top" href="#home">
          BACK TO TOP ↑
        </a>
      </div>
      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} Meetha Pani Hotel & Banquet</span>
        <span>{HOTEL.city}</span>
        <span>Website enquiries via WhatsApp</span>
      </div>
    </footer>
  );
}

function WhatsAppFloat() {
  const url = `https://wa.me/${HOTEL.whatsapp}?text=${encodeURIComponent(`Hello ${HOTEL.fullName}, I have a booking enquiry.`)}`;
  return (
    <a
      className="whatsapp-float"
      href={url}
      target="_blank"
      rel="noreferrer"
      aria-label="Message Meetha Pani on WhatsApp"
    >
      <MessageCircle size={22} />
      <span>WhatsApp us</span>
    </a>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Rooms />
        <Banquet />
        <BanquetOptions />
        <RestaurantMenu />
        <Gallery />
        <Booking />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
