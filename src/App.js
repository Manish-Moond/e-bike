import searchImage from './assets/images/Vector.svg'
import logo from './assets/images/logo.svg'
import scooter from './assets/images/scooter.svg'
import leftArrow from './assets/images/left arrow.svg'
import rightArrow from './assets/images/right arrow.svg'
import plus from './assets/images/plus.svg'
import './App.css';


function App() {
  return (
    <div className='h-screen  bg-gradient-to-r from-[#EBF3F5] to-[#C5E2F0] '>

      <div className="absolute right-[-25rem] top-[-30rem] w-[70rem] h-[70rem] bg-gradient-to-b from-[#D8E6EF] to-[#B4D8E4] rounded-full"></div>

      <section>
        <div className="absolute right-0 top-0 h-1/2 w-20 bg-gradient-to-b from-[#9AE0D3] to-[#35A7A0] z-20">
          <img className="relative top-10 left-1/3 w-6 h-6" src={searchImage} alt='' />
          <p className='relative tracking-[.8em] text-sm font-semibold top-20 left-8 text-white' style={{ writingMode: 'vertical-rl' }}>THE CONCEPT</p>
        </div>
        <div className="absolute right-0 top-1/2 h-1/2 w-20 bg-gradient-to-b from-[#89C8DD] to-[#73ADC1] z-20">
          <p className='relative tracking-[.8em] text-sm font-semibold top-20 left-8 text-white' style={{ writingMode: 'vertical-rl' }}>ELECTRIC - B</p>
        </div>
      </section>

      <section>
        <div className='absolute left-12 top-8'>
          <img className='w-12 h-12' src={logo} alt='' />
        </div>
        <div className="absolute left-1/4 top-10 flex justify-center font-Inter">
          <p className='mr-24 mt-1'>Home</p>
          <p className='mr-24 mt-1'>Products</p>
          <p className='mr-24 mt-1'>Gallery</p>
          <p className='mr-24 mt-1'>Contacts</p>
          <button className=' py-1 px-6 rounded-md border-2 font-semibold text-sm bg-[#86C5DA] border-[#66B2CA] text-white'>Login</button>
        </div>
      </section>


      <section>
        <div className='absolute top-1/3 left-36'>
          <p className='tracking-[.65rem] ml-2 text-lg font-medium'>LET'S RIDE THE</p>
          <p className='font-bold text-7xl'>FUTURE</p>
          <div className='text-[#42454A] mt-8'>
            <p>Environment friendly</p>
            <p>Let's save for the future generation</p>
          </div>
          <button className='mt-8  py-2 px-6 rounded-md text-sm font-semibold border-2 bg-[#6EDACB] border-[#66B2CA] text-white'>PRE-ORDER</button>
        </div>
        <div className='absolute top-56 right-56 '>
          <p className='transform scale-y-150  font-Inter z-10 text-8xl text-white -tracking-[10]'>EV-B</p>
        </div>
        <div className='absolute top-28 right-0'>
          <img className='w-3/4 h-3/4 z-30' src={scooter} alt=''></img>
        </div>
        <div className='glass px-4 flex justify-between items-center absolute opacity-80 rounded-lg bottom-20 right-64 w-72 h-16 bg-[#c7f0ff]'>
          <div>
            <p className=' text-sm font-bold'>50 km/hr</p>
            <p className='text-xs'>speed</p>
          </div>
          <div>
            <p className='text-sm font-bold'>80km</p>
            <p className='text-xs'>battery range</p>
          </div>
          <div>
            <p className='text-sm font-bold'>3.5hr</p>
            <p className='text-xs'>charging time</p>
          </div>
        </div>
      </section>

      <section className=''>
        <div className='absolute flex bottom-10 left-10'>
          <img className='w-6 h-6' src={leftArrow} alt='' />
          <p>Prev</p>
        </div>

        <div className='absolute left-0 right-0 m-auto flex bottom-10 w-20 space-x-2'>
          <div className='w-2 h-2 rounded-full bg-[#ACCCDA]'></div>
          <div className='w-2 h-2 rounded-full bg-[#ACCCDA]'></div>
          <div className='w-2 h-2 rounded-full bg-[#ACCCDA]'></div>
          <div className='w-2 h-2 rounded-full bg-[#ACCCDA]'></div>
        </div>

        <div className='absolute flex bottom-10 right-36'>
          <p>Next</p>
          <img className='w-6 h-6' src={rightArrow} alt='' />
        </div>
        <div className='absolute flex bottom-7 right-12 z-50'>
          <div className='flex justify-center  items-center w-12 h-12 rounded-full bg-[#6DC7BD]'>
            <img className='w-6 h-6' src={plus} alt='' />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;