import {
  ArrowRight,
  CalendarDays,
  ChevronRight,
  Clock3,
  MapPin,
  Menu as MenuIcon,
  Phone,
  Star,
  Utensils,
  X,
} from "lucide-react";
import { useState } from "react";
import "./index.css";

const menuItems = [
  {
    name: "Butter Chicken",
    description: "Tender chicken in a rich, creamy tomato gravy.",
    price: "₹320",
    category: "Main Course",
    image:
      "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Paneer Tikka",
    description: "Char-grilled cottage cheese with aromatic spices.",
    price: "₹260",
    category: "Starters",
    image:
      "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Biryani Royale",
    description: "Fragrant basmati rice layered with traditional spices.",
    price: "₹290",
    category: "Main Course",
    image:
      "https://images.unsplash.com/photo-1563379091339-03246963d96c?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Tandoori Platter",
    description: "A generous selection of smoky tandoor favourites.",
    price: "₹450",
    category: "Chef's Special",
    image:
      "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=900&q=85",
  },
];
const fullMenu = {
  Starters: [
    ["Paneer Tikka", "Char-grilled cottage cheese with aromatic spices.", "₹260"],
    ["Chicken Tikka", "Juicy chicken pieces marinated in our signature spices.", "₹320"],
    ["Crispy Corn", "Crunchy corn tossed with herbs and house seasoning.", "₹190"],
    ["Tandoori Mushroom", "Mushrooms marinated and roasted in the tandoor.", "₹220"],
  ],

  "Main Course": [
    ["Butter Chicken", "Tender chicken in a rich, creamy tomato gravy.", "₹320"],
    ["Kadai Chicken", "Chicken cooked with peppers, onions and aromatic spices.", "₹330"],
    ["Paneer Butter Masala", "Soft paneer in a smooth buttery tomato gravy.", "₹280"],
    ["Dal Makhani", "Slow-cooked black lentils finished with butter and cream.", "₹220"],
  ],

  Biryani: [
    ["Chicken Biryani", "Fragrant basmati rice layered with spiced chicken.", "₹290"],
    ["Mutton Biryani", "Slow-cooked mutton with aromatic long-grain rice.", "₹390"],
    ["Veg Biryani", "Seasonal vegetables with fragrant basmati rice.", "₹240"],
    ["Egg Biryani", "Flavoured basmati rice served with perfectly cooked eggs.", "₹230"],
  ],

  Breads: [
    ["Butter Naan", "Soft tandoori naan finished with butter.", "₹60"],
    ["Garlic Naan", "Tandoori naan topped with fresh garlic and herbs.", "₹80"],
    ["Tandoori Roti", "Traditional whole-wheat bread cooked in the tandoor.", "₹40"],
    ["Laccha Paratha", "Crispy layered Indian flatbread.", "₹70"],
  ],

  Desserts: [
    ["Gulab Jamun", "Warm soft dumplings soaked in fragrant sugar syrup.", "₹120"],
    ["Gajar Halwa", "Traditional carrot dessert finished with nuts.", "₹140"],
    ["Kulfi", "Creamy traditional Indian frozen dessert.", "₹130"],
    ["Chocolate Brownie", "Warm chocolate brownie served with vanilla ice cream.", "₹180"],
  ],

  Beverages: [
    ["Masala Chai", "Traditional Indian tea with aromatic spices.", "₹70"],
    ["Fresh Lime Soda", "Refreshing sweet or salted lime soda.", "₹90"],
    ["Mango Lassi", "Creamy yoghurt drink blended with ripe mango.", "₹120"],
    ["Cold Coffee", "Rich chilled coffee finished with cream.", "₹150"],
  ],
};

const reviews = [
  {
    name: "Rahul Sharma",
    text: "Beautiful ambience, amazing food and genuinely warm service. One of my favourite places for dinner.",
  },
  {
    name: "Ananya Das",
    text: "The biryani was absolutely delicious. Everything felt fresh, premium and perfectly prepared.",
  },
  {
    name: "Arjun Mehta",
    text: "A perfect place for a family dinner. Great atmosphere and the staff were extremely welcoming.",
  },
];

const gallery = [
  "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=85",
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
    setMenuOpen(false);
  };
const reserveOnWhatsApp = () => {
  const restaurantWhatsApp = "91XXXXXXXXXX";

  const message = encodeURIComponent(
    "Hello Taste & Spice! I would like to reserve a table."
  );

  window.open(
    `https://wa.me/${restaurantWhatsApp}?text=${message}`,
    "_blank"
  );
};

  return (
    <div className="site">
      <header className="navbar">
        <div className="nav-inner">
          <button className="logo" onClick={() => scrollTo("home")}>
            <span className="logo-mark">T</span>
            <span>
              TASTE <em>&</em> SPICE
            </span>
          </button>

          <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
            <button onClick={() => scrollTo("home")}>Home</button>
            <button onClick={() => scrollTo("menu")}>Menu</button>
            <button onClick={() => scrollTo("about")}>Our Story</button>
            <button onClick={() => scrollTo("gallery")}>Gallery</button>
            <button onClick={() => scrollTo("contact")}>Contact</button>

            <button className="nav-reserve" onClick={reserveOnWhatsApp}>
              Reserve a Table
            </button>
          </nav>

          <button
            className="mobile-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={25} /> : <MenuIcon size={25} />}
          </button>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="hero" id="home">
          <div className="hero-overlay"></div>

          <div className="hero-content">
            <div className="eyebrow">
              <span></span>
              AUTHENTIC • FRESH • TIMELESS
              <span></span>
            </div>

            <h1>
              Food that tells
              <br />
              <i>a story.</i>
            </h1>

            <p>
              Experience authentic flavours, warm hospitality and unforgettable
              moments — all served under one roof.
            </p>

            <div className="hero-buttons">
              <button className="primary-btn" onClick={() => scrollTo("menu")}>
                Explore Our Menu
                <ArrowRight size={18} />
              </button>

              <button className="outline-btn" onClick={reserveOnWhatsApp}>
                <CalendarDays size={18} />
                Reserve a Table
              </button>
            </div>

            <div className="hero-rating">
              <div className="stars">
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
              </div>
              <strong>4.9/5</strong>
              <span>from 500+ happy guests</span>
            </div>
          </div>

          <div className="scroll-indicator">
            <span>SCROLL TO DISCOVER</span>
            <div></div>
          </div>
        </section>

        {/* INTRO */}
        <section className="intro section">
          <div className="section-label">WELCOME TO TASTE & SPICE</div>

          <h2>
            Where every meal becomes
            <br />
            <span>an experience.</span>
          </h2>

          <p className="intro-text">
            We believe great food is more than what's on the plate. It is
            about the aroma that welcomes you, the people around the table,
            and the memories you take home.
          </p>

          <div className="feature-row">
            <div className="feature">
              <div className="feature-icon">
                <Utensils size={24} />
              </div>
              <h3>Authentic Flavours</h3>
              <p>Traditional recipes with our signature modern touch.</p>
            </div>

            <div className="feature">
              <div className="feature-icon">
                <Star size={24} />
              </div>
              <h3>Premium Quality</h3>
              <p>Fresh ingredients carefully selected every single day.</p>
            </div>

            <div className="feature">
              <div className="feature-icon">
                <Clock3 size={24} />
              </div>
              <h3>Made Fresh</h3>
              <p>Every dish is prepared fresh when you place your order.</p>
            </div>
          </div>
        </section>

        {/* MENU */}
        <section className="menu-section section" id="menu">
          <div className="section-heading">
            <div>
              <div className="section-label">OUR SIGNATURE MENU</div>
              <h2>Made to <span>be remembered.</span></h2>
            </div>

            <button
  className="text-button"
  onClick={() => scrollTo("full-menu")}
>
  View Full Menu
  <ChevronRight size={18} />
</button>
          </div>

          <div className="menu-grid">
            {menuItems.map((item) => (
              <article className="menu-card" key={item.name}>
                <div className="menu-image">
                  <img src={item.image} alt={item.name} />
                  <span>{item.category}</span>
                </div>

                <div className="menu-info">
                  <div>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                  </div>
                  <strong>{item.price}</strong>
                </div>
              </article>
            ))}
          </div>
        </section>
        {/* FULL MENU */}
<section className="full-menu section" id="full-menu">
  <div className="section-heading centered">
    <div>
      <div className="section-label">EXPLORE OUR MENU</div>
      <h2>
        Something for
        <br />
        <span>every craving.</span>
      </h2>
    </div>
  </div>

  <div className="full-menu-content">
    {Object.entries(fullMenu).map(([category, items]) => (
      <div className="menu-category" key={category}>
        <div className="category-title">
          <h3>{category}</h3>
          <span></span>
        </div>

        <div className="menu-list">
          {items.map(([name, description, price]) => (
            <div className="menu-list-item" key={name}>
              <div>
                <h4>{name}</h4>
                <p>{description}</p>
              </div>

              <strong>{price}</strong>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
</section>

        {/* STORY */}
        <section className="story section" id="about">
          <div className="story-image">
            <img
              src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=85"
              alt="Restaurant interior"
            />
          </div>

          <div className="story-content">
            <div className="section-label">OUR STORY</div>

            <h2>
              Born from a love
              <br />
              <span>for good food.</span>
            </h2>

            <p>
              Taste & Spice began with one simple idea: bring people together
              over food that feels both familiar and exciting.
            </p>

            <p>
              From carefully sourced ingredients to recipes inspired by
              generations of cooking, every detail has been thoughtfully
              created to make your visit special.
            </p>

            <button className="dark-btn">
              Discover Our Story
              <ArrowRight size={18} />
            </button>
          </div>
        </section>

        {/* GALLERY */}
        <section className="gallery-section section" id="gallery">
          <div className="section-heading centered">
            <div>
              <div className="section-label">A GLIMPSE INSIDE</div>
              <h2>Moments worth <span>sharing.</span></h2>
            </div>
          </div>

          <div className="gallery-grid">
            {gallery.map((image, index) => (
              <div className={`gallery-item gallery-${index + 1}`} key={image}>
                <img src={image} alt={`Taste & Spice ${index + 1}`} />
              </div>
            ))}
          </div>
        </section>

        {/* REVIEWS */}
        <section className="reviews-section section">
          <div className="section-heading centered">
            <div>
              <div className="section-label">GUEST LOVE</div>
              <h2>Don't just take <span>our word for it.</span></h2>
            </div>
          </div>

          <div className="reviews-grid">
            {reviews.map((review) => (
              <article className="review-card" key={review.name}>
                <div className="review-stars">
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                </div>

                <p>“{review.text}”</p>

                <div className="review-author">
                  <div>{review.name.charAt(0)}</div>
                  <strong>{review.name}</strong>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* RESERVATION */}
        <section className="reservation">
          <div className="reservation-content">
            <div className="section-label">YOUR TABLE AWAITS</div>

            <h2>
              Good food.
              <br />
              <span>Good company.</span>
            </h2>

            <p>
              Make your next meal a memorable one. Reserve your table today.
            </p>

            <button className="light-btn" onClick={reserveOnWhatsApp}>
              Reserve via WhatsApp
              <ArrowRight size={18} />
            </button>
          </div>
        </section>

        {/* CONTACT */}
        <section className="contact-section section" id="contact">
          <div className="contact-info">
            <div className="section-label">COME SAY HELLO</div>

            <h2>
              Find us,
              <br />
              <span>we'll save you a seat.</span>
            </h2>

            <div className="contact-item">
              <MapPin size={22} />
              <div>
                <strong>Our Location</strong>
                <p>MG Road, Central City<br />Odisha, India</p>
              </div>
            </div>

            <div className="contact-item">
              <Clock3 size={22} />
              <div>
                <strong>Opening Hours</strong>
                <p>Monday – Sunday<br />11:00 AM – 11:00 PM</p>
              </div>
            </div>

            <div className="contact-item">
              <Phone size={22} />
              <div>
                <strong>Reservations</strong>
                <p>Available daily from 10 AM</p>
              </div>
            </div>
          </div>

          <div className="map-placeholder">
            <div className="map-card">
              <MapPin size={30} />
              <h3>Taste & Spice</h3>
              <p>MG Road, Central City</p>
              <button onClick={() => alert("Map link can be connected here.")}>
                Get Directions
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer>
        <div className="footer-main">
          <div>
            <div className="footer-logo">
              <span>T</span>
              TASTE <em>&</em> SPICE
            </div>
            <p>Authentic food. Unforgettable moments.</p>
          </div>

          <div className="footer-links">
            <button onClick={() => scrollTo("menu")}>Menu</button>
            <button onClick={() => scrollTo("about")}>Our Story</button>
            <button onClick={() => scrollTo("gallery")}>Gallery</button>
            <button onClick={() => scrollTo("contact")}>Contact</button>
          </div>

          <div className="socials">
            <button aria-label="Instagram">
              <span className="instagram-text">IG</span>          
            </button>
            <button aria-label="Phone">
              <Phone size={19} />
            </button>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Taste & Spice. All rights reserved.</span>
          <span>Crafted with care.</span>
        </div>
      </footer>
    </div>
  );
}

export default App;