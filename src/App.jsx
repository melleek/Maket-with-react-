import './App.css'

function App() {
  
  return (
    <div>

      {/* navbar */}
      <nav className='flex justify-between lg:px-[120px] lg:py-[35px] items-center sm:px-[24px] sm:py-[16px]'>
        <h1 className='lg:text-[32px] lg:font-[600] sm:text-[36px] sm:font-[800]'>Cootels</h1>
        <div className='lg:flex lg:items-center lg:gap-[32px] lg:text-[16px] lg:font-[500] sm:hidden'>
          <p>Rooms</p>
          <p>Reservation</p>
          <p>Contacs</p>
        </div>
        <button className='rounded-[4px] bg-[#0E1734] flex justify-center items-center lg:px-[16px] lg:py-[14px] text-[white] font-[500] sm:px-[10px] sm:py-[12px]'>Get Started</button>
      </nav>

      {/* section1 */}
      <section className='lg:flex lg:py-[80px] lg:justify-center lg:items-center sm:py-[16px] sm:px-[24px]'>

        {/* left */}
        <aside>
          <h1 className='lg:text-[48px] text-[#192252] font-[600] leading-[150%] tracking-[-0.48px] lg:w-[587px] pb-[21px] sm:text-[32px] sm:w-[340px]'>Nature, Warmth, and Beauty in One Space</h1>
          <p className='lg:w-[485px] lg:text-[18px] font-[400] leading-[150%] text-[#848FAC] pb-[31px] sm:w-[290px]'>One place to release all the stress, bring back happines, and get back to nature. We provide the best room and nature for you. Come visit us anytime you want.</p>
          <button className='px-[32px] lg:py-[16px] bg-[#0E1734] text-[white] text-center rounded-[4px] sm:py-[12px]'>Reservation</button>
        </aside>

        {/* right */}
        <aside className='sm:pt-[20px]'>
          <img src="src/assets/media/img/main/s/house.jpg" alt="house" />
        </aside>
      </section>

       {/* section2 */}
      <section className='lg:flex lg:py-[80px] lg:justify-center lg:items-center lg:gap-[170px] sm:py-[16px] sm:px-[24px]'>

        {/* left */}
        <aside className='lg:block sm:hidden'>
          <img src="src/assets/media/img/main/s/hom.jpg" alt="house" />
        </aside>

        {/* right */}
        <aside>
          <h1 className='lg:text-[36px] text-[#192252] font-[600] leading-[150%] tracking-[-0.48px] lg:w-[600px] pb-[21px] sm:text-[28px] sm:w-[340px]'>Cozy and Down to Earth Cootage Hotel in Norway.</h1>
          <p className='lg:w-[584px] lg:text-[18px] font-[400] leading-[150%] text-[#848FAC] pb-[31px] sm:w-[350px]'>Our Cootage Hotel is an intimate hideway concieved for dicerning travelers. It faces directly the unique and spectacular panorama of the Hallerbos Jungle.</p>
          <p className='lg:block lg:w-[584px] lg:text-[18px] font-[400] leading-[150%] text-[#848FAC] pb-[31px] sm:hidden'>Cootels extends along a private, quiet, and beautiful nature. Stay away from crowd and enjoy the cozy and beauty with us.</p>
          <button className='px-[32px] lg:py-[16px] bg-[#0E1734] text-[white] text-center rounded-[4px] sm:py-[12px]'>Learn More</button>
        </aside>

        <aside className='sm:block sm:pt-[40px] lg:hidden'>
          <img src="src/assets/media/img/main/s/hom.jpg" alt="house" />
        </aside>
      </section>

       {/* section 3*/}
       <section className='lg:flex lg:flex-col lg:gap-[32px]'>
         <section className='lg:flex lg:py-[80px] lg:justify-center lg:items-center lg:gap-[170px] sm:py-[16px] sm:px-[24px]'>

        {/* left */}
        <aside>
          <h1 className='lg:text-[36px] text-[#192252] font-[600] leading-[150%] tracking-[-0.48px] lg:w-[302px] pb-[21px] sm:text-[28px] sm:w-[302 px]'>Cabin Activities</h1>
          <p className='lg:w-[584px] lg:text-[18px] font-[400] leading-[150%] text-[#848FAC] pb-[31px] sm:w-[350px]'>Don’t worry to get bored easily in our cabin. We have so many cabin activities for you to do it alone or with group. Maybe this is the best chance for you to make new friends or even a lover.</p>
        </aside>

        {/* right */}
        <aside className=''>
          <img src="src/assets/media/img/main/s/mar.jpg" alt="house" />
        </aside>
        
      </section>

      {/* section 4 */}
       <section className='lg:flex lg:justify-center lg:items-center lg:gap-[170px] sm:py-[16px] sm:px-[24px]'>

        {/* left */}
        <aside className='sm:hidden lg:block'>
          <img src="src/assets/media/img/main/s/food.jpg" alt="house" />
        </aside>

        {/* right */}
        <aside>
          <h1 className='lg:text-[36px] text-[#192252] font-[600] leading-[150%] tracking-[-0.48px] lg:w-[384px] pb-[21px] sm:text-[28px] sm:w-[302 px]'>100% Organic Food</h1>
          <p className='lg:w-[584px] lg:text-[18px] font-[400] leading-[150%] text-[#848FAC] pb-[31px] sm:w-[350px]'>We served 100% organic, low process and delicious food. We allow our guest to have breakfast or dinner request.What ever made your taste buds happy.</p>
        </aside>
      </section>
       </section>


       {/* section 5*/}
       <section className='sm:hidden lg:block'>
        <h1 className='lg:text-[38px] text-[#192252] font-[800] tracking-[-0.48px] lg:text-center lg:pt-[120px]'>Many Rooms to Choose</h1>
        <p className='text-[18px] font-[400] leading-[150%] text-[#848FAC] pt-[21px] text-center'>There is a room for every needs. We have room for individuals until <br></br>family size, we also have a cabin for more private experience</p>
        <div className='flex justify-center pt-[21px]'>
          <button className='px-[40px] lg:py-[12px] bg-[#0E1734] text-[white] text-center rounded-[4px] '>Explore more</button>
        </div>
       </section>

       {/* section 6 */}
       <section className='lg:flex flex-wrap justify-center items-center gap-[40px] lg:px-[120px] lg:py-[90px] sm:py-[16px] sm:px-[24px]'>
        
        {/* 1as */}
        <aside className='lg:pb-[0] sm:pb-[40px]'>
          <img src="src/assets/media/img/main/s/p3.jpg" alt="" />
          <h3 className='text-[24px] pt-[22px] pb-[16px] font-[600]'>Single Room</h3>
          <p className='lg:w-[384px] text-[#848FAC] lg:text-[18px] pb-[16px]'>Best for a brave lone wolf who need comfort and quiet quality time, but you still have a chance to meet others.</p>
          <h4 className='flex text-[#424F7B]'>Learn more<img src="src/assets/media/img/main/s/st.jpg" alt="" /></h4>
        </aside>

        {/* 2as */}
        <aside className='lg:pb-[0] sm:pb-[40px]'>
          <img src="src/assets/media/img/main/s/p2.jpg" alt="" />
          <h3 className='text-[24px] pt-[22px] pb-[16px] font-[600]'>Double Room</h3>
          <p className='lg:w-[384px] text-[#848FAC] lg:text-[18px] pb-[16px]'>Best for couple, seek happiness in intimacy without worry of being disturbed. Feel the whole world just for you two</p>
          <h4 className='flex text-[#424F7B]'>Learn more<img src="src/assets/media/img/main/s/st.jpg" alt="" /></h4>
        </aside>

        {/* 3as */}
         <aside className='lg:pb-[0] sm:pb-[40px]'>
          <img src="src/assets/media/img/main/s/p1jpg.jpg" alt="" />
          <h3 className='text-[24px] pt-[22px] pb-[16px] font-[600]'>Cootage</h3>
          <p className='lg:w-[384px] text-[#848FAC] lg:text-[18px] pb-[16px]'>Best for family or group. One cootage can fit up to 5 people. Made stronger bond with your family or friends</p>
          <h4 className='flex text-[#424F7B]'>Learn more<img src="src/assets/media/img/main/s/st.jpg" alt="" /></h4>
        </aside>
       </section>


       {/* section6 */}
       <section className='lg:px-[118px] lg:py-[80px]  sm:px-[24px] sm:py-[12px] lg:flex  lg:justify-between lg:items-center'>
       
       <aside className='lg:hidden sm:block sm:pb-[22px]'>
          <img src="src/assets/media/img/main/s/food.jpg" alt="house" />
        </aside>

        {/* right */}
        <aside>
           <span className='text-[#424F7B]'>Start your journey!</span>
           <h1 className='text-[#192252] text-[36px] font-[600] pt-[16px]'>How to Get My Room?</h1>
           <p className='lg:w-[350px] text-[#848FAC] text-[18px] pt-[24px]'>You can contact us by phone or email us. Easily tap the contact button below and it will take you to our contact point</p>
           <div className='pt-[40px] flex items-center gap-[24px]'>
           <button className='px-[40px] py-[12px] bg-[#0E1734] text-[white] text-center rounded-[4px] '> Contact us</button>
            <p>Explore more room</p>
           </div>
        </aside>

        {/* left */}
        <aside className='flex flex-col gap-[24px]'>
          <div className='bg-[#FFF] rounded-[4px] shadow-lg shadow-slate-300/50 lg:w-[588px] lg:h-[80px] sm:h-[50px] sm:pt-[50px] flex items-center justify-between p-[36px]'>
            <p className='text-[#424F7B] lg:text-[24px] font-[600]'>1. Choose a room and date</p>
            <img src="src/assets/media/img/main/s/dg.jpg" alt="" />
          </div>

           <div className='bg-[#FFF] rounded-[4px] shadow-lg shadow-slate-300/50 lg:w-[588px]  lg:h-[188px] p-[36px]'>
           <div className=' flex items-center justify-between'>
            <p className='text-[#424F7B] lg:text-[24px] font-[600]'>2. Check for room availability</p>
            <img src="src/assets/media/img/main/s/dg1.jpg" alt="" />
            </div>
              <p className='text-[#848FAC] lg:w-[516px] pt-[15px]'> Contact us via phone or email, ask for availability of you choice of room. We might offer you something exciting.</p>
          </div>
            <div className='bg-[#FFF] rounded-[4px] shadow-lg shadow-slate-300/50 sm:h-[50px] sm:pt-[50px] lg:w-[588px] lg:h-[80px] flex items-center justify-between p-[36px]'>
            <p className='text-[#424F7B] lg:text-[24px] font-[600]'>3. Enjoy your room</p>
            <img src="src/assets/media/img/main/s/dg.jpg" alt="" />
          </div>
        </aside>
       </section>

       {/* section7 */}
       <section className='lg:px-[324px] lg:py-[80px] sm:px-[24px] sm:py-[40px]'>
           <h1 className='text-center font-[600] lg:text-[36px] sm:text-[34px]'>Hear From Our Happy Customers</h1>
           <img src="src/assets/media/img/main/s/Ellipse 1.png" className='m-[auto] lg:pt-[62px] sm:pt-[40px]'/>
           <p className='text-center pt-[44px] text-[#848FAC]'>“Great service, great food, great people. The scenery is also beautiful, you can do so much activity even with your famility. Worth every penny! you should come and see for your self.  5 out of 5! the waffle is great!”</p>
           <h4 className='font-[600] text-[20px] text-center pt-[40px]'>Kirana Dunham</h4>
           <img src="src/assets/media/img/main/s/Group 8.png"className='m-[auto] pt-[24px]' />
       </section>


       {/* footer */}

       <footer className='bg-[#0B265A] lg:h-[444px] text-[#D9DBDE] flex sm:p-[32px] items-start justify-between  lg:p-[120px] lg:pr-[180px] '>

        {/* left */}
        <aside>
          <h2 className='text-white text-[32px] pb-[13px]'>Cootels</h2>
          <p>Your Best Private</p>
          <p>Hideway From Crowd.</p>
          <p>Back to Nature.</p>
          <div className='flex gap-[10px] pt-[36px]'>
            <img src="src/assets/media/img/footer/twitter.png" alt="" />
            <img src="src/assets/media/img/footer/instagram-logo.png" alt="" />
            <img src="src/assets/media/img/footer/facebook.png" alt="" />
          </div>
        </aside>

        {/* right */}
        <aside className='flex gap-[150px]'>
          <div className='flex flex-col gap-[20px]'>
            <h4 className='text-[white]'>Rooms</h4>
            <p>Single Room</p>
            <p>Double Room</p>
            <p>Cabin</p>
            <p>Custom Room</p>
          </div>

          {/* d2 */}
          <div className='lg:flex flex-col gap-[20px]  sm:hidden'>
            <h4 className='text-[white]'>Reservation</h4>
            <p>See the Steps</p>
            <p>Best Time</p>
          </div>

          {/* d3 */}
          <div className='lg:flex flex-col gap-[20px]  sm:hidden'>
            <h4 className='text-[white]'>Contact</h4>
            <p>Our Number</p>
            <p>Our Email</p>
            <p>Our Location</p>
          </div>

        </aside>
       </footer>

    </div>
  )
}

export default App
