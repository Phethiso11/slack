import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <nav className="navbar">
          <h1 className="logo">Agrivista Farms</h1>
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About Us</a>
            <a href="#pages">Pages</a>
          </div>
          <div className="auth-buttons">
            <button className="btn">Login</button>
            <button className="btn signup">Sign Up</button>
          </div>
        </nav>
      </header>

      <section className="hero-section">
        <div className="hero-content">
          <h2>The Role of Technology in Revolutionizing Agriculture</h2>
          <p>Learn how we are transforming the way we approach agriculture.</p>
          <div className="hero-buttons">
            <button className="btn">Get Started</button>
            <button className="btn learn-more">Learn More</button>
          </div>
        </div>
      </section>



      <section className="passion-section">
        <h2>Our Passion for Agriculture</h2>
        <p>Nurturing Growth and Sustaining the Future</p>
        <div className="passion-content hero-buttons">
          <img src="https://s3-alpha-sig.figma.com/img/e762/1efc/add90d96b68fd53a1a45e58910474cf5?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e897ZF7ppZpCW~FpTy1ga3dLMydKgFHK1DPpmtHJmhv50fvPcKqmMXdXD8gEI67STxDi9q9MtUWYVZSHKBviajEkdJ7RbLcirhhLISzc5mSXE3oANANWtuoBuf0RhFtOlXgrDWs3nbQub5cgS1R2feuLItB-OtC2WHhqb4ilRY-GtqbIdV-ROcsHfjPnzcjtUR~1J8SOyoTzI71gi1M2oK3VVMuFHmqjAyihtKxSyo5q261ZTrH0IUVY6cdUuq9GL-HtlJNBZD~BWYqSC-HS691QUWwwCiIAw1uWuAL98qqXMZpWtvICTVmJnPFuqEDiboeb1BCTvC-XtGIw9XIKuA__" alt="Agriculture" className="passion-image" />
          <p>Since 1976</p>
          <button className="btn">Get Started</button>
        </div>
      </section>

      <section className="services-section">
        <h2>Our Service</h2>
        <div className="services">
          <div className="service">
            <i className="service-icon">📝</i>
            <p>Blog and Article Writing</p>
          </div>
          <div className="service">
            <i className="service-icon">🌐</i>
            <p>Website Content</p>
          </div>
          <div className="service">
            <i className="service-icon">📊</i>
            <p>Content Strategy and Consulting</p>
          </div>
          <div className="service">
            <i className="service-icon">📱</i>
            <p>Social Media Management</p>
          </div>
        </div>
      </section>

      <section className="products-section">
        <h2>Our Featured Product</h2>
        <div className="products">
          <div className="product">
            <img src="https://s3-alpha-sig.figma.com/img/9fdb/c069/0f7319cf18358681e6be1f2da72c5e9f?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DtGj9JAp7d9Z0xDTFyP3BTK0nGpe2PloxdLzuWX4I9UDZmVirip7r9~cUTl80VQdS2X614grFyVaV6HHAywkJmPlt8lisoayTAVOJWSQgaYfFAFkIMTCkPQbHy6NFSVR2YMOIn3VqefnrKeMf7vCiI-4hk5ldNHhpdp01P9HD4u-kOXlnRu-e66SzrlzlWwKqBDSPk0TA1PnCaeh8LWdjwZYJ~wb2KK95gR6nqhA8i1rtDvf9OmHWCBMJZEhsEBWu2BvjSM7qxVFxVblnDlemfUxIA80mBKINd-c4zvnV4TDba4Ik9CTAhShd3uTgk562H11qeSGdfFhh7Rc5-1b1g__" alt="Rice" />
            <p>Rice</p>
          </div>
          <div className="product">
            <img src="https://s3-alpha-sig.figma.com/img/efb4/c917/311ba558964e2e9cf719292c492eec3b?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=evvnvPBoIzheFqlTdML3GELXGMl7CJC4pMVjoEY8KBZFkrRmX9wY~wn-qYkrdJIG24N1TDpyxCvH75FveJxmpQgZsMVwTTGgSjYfJSi7HmwAKHpcmCUi29kTHQiSrDreOTpITJQyHRhEmyXmU9ZYtQ~qAFTjTEbtcdXCtdfnDCyXXgRB6XRwjmMEAJMAV1MvR09XXHrCof2odskoLMoijwZ32l6wWgRpZV8-2V4KHDtRz7KVmYpXGoX59t~~2TncC0Oha0MmK9qD8yWuHSHBrF3eaCtKGZC4BYhKbNQFhgU10~D2ei8mqKDjyfRpuTOOBK83kvyMd1dbzhSw6WmANA__" alt="Wheat" />
            <p>Wheat</p>
          </div>
          <div className="product">
            <img src="https://s3-alpha-sig.figma.com/img/c1e1/55f5/c90de42ffd322663bfbfdf9b98a982f3?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Qq71TcmK6WEBYnvo46QVU6cCK-aLx3VuRHbJWTF76-qsCxa-eekvRpBPcNckd9nG6pKtYrW-hgP7F4SvfTR6Lfxenj~oNUb6hdwZdQDvINFmB1uSWa2ZsnRcF7JtQrhlTNLK2~t2iTt2B-UmJrPBE3cqTCKYKFcXaRAOvwqGoa7J~JvEK44E8tquIE5zTorRDCS9o9HYUe3F8FGYuFtGviC225-qZcQke-QaewmmljmmOpyBhr2jTffCZRflje0dRzu9Wv8R1WsT54x0IJJoZAGTu-jPWp7-1xtZyb7k8N-T1l-04svovuirvIGPWMVmoeAflfsJT4Pg-NTRhznk2w__" alt="Pumpkin" />
            <p>Pumpkin</p>
          </div>
          <div className="product">
            <img src="https://s3-alpha-sig.figma.com/img/343d/35e3/947e9dd5df0fb4dadcc85f423a556b19?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HmMz8ryCamdMNWrvsHc7L2-Mox1~IAVjR8fBS6TQtWcFVOa5YYc8wMQ6qzh3DI2PeaFhh3FpkugKFQSlDkWCzPNzrL3E8cEPlm3-5sI9X18tXw4LsAWRL9wMgr~3tG7ICZeWTGf1n8RROyvomZ4juyNqRGsFXAxtIXehnv-GXiKFyOBQZu28pdjRObTNaMG6WBvnrYvdiMr4bPJVeNPo4GeKC5Ou4x8kZw27EyY8Zu2F8ppoXcfP0SFzagncO72afelssTTMnPZ8hyENNdfggOugB1BkE2t-Yn~f855vJyz-Sy71Fn64ec8gLSVPMWjbK7k5JVN1G04n0ou957ydng__" alt="Cabbage" />
            <p>Cabbage</p>
          </div>
        </div>
      </section>

      <section className="sustainability-section">
        <h2>Sustainable Farming Meets Technology: Building a Greener Future</h2>
        <div className="sustainability-content hero-buttons">
          <button className="btn learn-more">Learn More</button>
          <button className="btn">Contact Us</button>
        </div>
      </section>

      <section className="benefits-section">
        <h2>The Benefits of Choosing Our Expertise</h2>
        <div className="benefits">
          <div className="benefit">
            <i className="benefit-icon">⭐</i>
            <p>15+ Years of Experience</p>
          </div>
          <div className="benefit">
            <i className="benefit-icon">📦</i>
            <p>40+ Products</p>
          </div>
          <div className="benefit">
            <i className="benefit-icon">✅</i>
            <p>2,458+ Satisfied Clients</p>
          </div>
          <div className="benefit">
            <i className="benefit-icon">👥</i>
            <p>20 Local Team Members</p>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <h2>Testimonials</h2>
        <div className="testimonial">
          <img
            src="https://s3-alpha-sig.figma.com/img/eab9/67e2/46f834691e4bd80ec39ddeb67ea21df4?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mCSoECn5OXjRAqZcpHRMaTK7PqHttcq81bBxQwX6yqzQRqHo4BtMtFP-riRmUfSHpe5-Mc9bpr6GwgM79V6YSPnwk9kEKF7v-M6xDzO8vnlDXKKJ-YIhdORq7eCj0hWMXcp4lTPHnGi2Z~vys9eDQi18csvOUOvHlQkvRu7~Wp16KUgzdftQ~UOtOwCnvL~637yEQ2MJ0VK8BBoUQtd1vZN8mTZa2vrAr2I66QNpzlr2~FuU~e53qO66kwBBWpTKCju2OCQhmpdM0zDK68QNYbgzJUfM0ZhmhgL~vB-KJky4BfMAOeZ~HmPXFZFU8H-0krYd22QtcnEnCvFl4JiQ0w__" // Adjust the path based on where you store the image
            alt="Madeline Williamson"
            className="testimonial-image"
          />
          <div className="testimonial-content">
            <h3>Madeline Williamson</h3>
            <p>
              "I am thrilled with the services and products offered by AgriVista Farms. Their
              dedication to sustainable farming and innovation is truly commendable."
            </p>
          </div>
        </div>
      </section>
      <section className="blog-section">
        <h2>Our Blog</h2>
        <div className="blogs">
          <div className="blog">
            <img src="https://s3-alpha-sig.figma.com/img/51e9/6456/382df2a4d4c1215dde86c1d074cf8306?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J1GEnCll0CeUg1yTKq5GnVHpfih0yRfoQPO3xLXPGDtCcy3eoZ15wIh3ZDLsHoJTgWkZDBVqQbCa7PJsX-HcwONcxppkPrEnjIfFZB4VUPr2K4Nis-p5M47UY-l5jlTBTj70wZVzEJhkeg8sZFZKc5rQ6lEbGBwKkD6-4x1ZQ-QQTVu7uvCSo~~iQHoTSWOyjs2uNKYtEEXDgC39QBRbZHU8rLYfxvLdd6DH2MPNXmZ8Eu1ciZfbku5O3Usme-KEmqIHLymhWdeADaRZTWplO9YxMABQFB8aQKaABcgSfY~oET8uRp5OOauRT3Kyvlg9uOiHzNldMgEhjRcrmwViGg__" alt="Blog 1" />
            <p>Innovations for a Greener Future</p>
          </div>
          <div className="blog">
            <img src="https://s3-alpha-sig.figma.com/img/2b4f/a100/8da35b5d8c4c53c319d1708152609689?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TELvBOFMG66IIcT1ZrivRHeEG40SMwoXY68b2lOymdOW6kJnP5GIFVIsffFCZZznximjHOfpH1TCq1BcclOveYhems29~5e8J3iKcMs-UpeVHiGQWZMdR5kHVbq4NFs~E9hYoao-V8X9Sl1HvYQTee9plRn-4FiQF20Rovu08fvtzDJ33Bya8Ah~~GcBuhgvZyo~j-oTX7YYVfDOyJA1HM9C0WHTVkaqKYEnf4gBT6hbwRIPyqBcRK9XEDwgOB1ma1ANmeVrUnWvUK0yBUinWmnWh2xF6lHnnzYDktMz609GoPRhd2k56Tgc2xCTDKlCwz852W4Ms8ewHmoJU36uEg__" alt="Blog 2" />
            <p>The Power of Agricultural Analytics</p>
          </div>
          <div className="blog">
            <img src="https://s3-alpha-sig.figma.com/img/c5bd/40ec/9cd491fd274939036f7cc0be57052e28?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JLlAFUFbKEeMa7H8wenj4ZuSpxV6xZ9MpXMBEkznc0EsO6DjJ6c~VO-joo86XQX-EAuOe2-sXbPWgvRUHBZ9LE11oUAjmo53yOzDaEkb1XcTJ96y5RYZ9pjFcBYCzJacxBZPkbSKvUv9slTTb9AwAPKV8YZDT8jdFJAlK6mywbnYMJYGuP3W~5cAXn6D6KpHQsfKk3qB0hwyQBmKcknDRms-r~uennVLhPhV64Z7x~15rjT~aB36-GRPcyrd9bm4nLZL1capW81DZNt4rqFtsM5jjebJVbgkjQ-SwCM0x7zrrjbE2giSmWr-Jg4cxmbyko8ORXTf~ATA2e4S8hWW4g__" alt="Blog 3" />
            <p>Cultivating Sustainable and Resilient Farms</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h2>AgriVista Farms</h2>
            <p>Li Europan lingues es membres del sam familie. Lor separate existentie.</p>
            <div className="footer-icons">
              <a href="#i"><i className="icon-instagram"></i></a>
              <a href="#i"><i className="icon-dribbble"></i></a>
              <a href="#i"><i className="icon-facebook"></i></a>
              <a href="#i"><i className="icon-behance"></i></a>
            </div>
          </div>
          <div className="footer-section">
            <h3>Pages</h3>
            <ul>
              <li><a href="#i">Home</a></li>
              <li><a href="#i">About</a></li>
              <li><a href="#i">Product</a></li>
              <li><a href="#i">Blog</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>About</h3>
            <ul>
              <li><a href="#t">Testimonials</a></li>
              <li><a href="#o">Our Service</a></li>
              <li><a href="#c">Contact Us</a></li>
              <li><a href="#b">Benefit</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;