import img from './images/1.webp'
import coldBrew from './images/coldbrew.jpg'
import refresher from './images/refresher.jpg'
import cakePop from './images/cakepop.jpg'
const Hero = () => {
  return (
    <>
    {/* HERO 1 */}
    <div className="Hero w-full mx-auto mt-6 max-w-[1440px]">
      {/* FLEX CONTAINER */}
      <div className="flex flex-col bg-darkGreen sm:flex-row sm:items-center">
        {/* FLEX ITEM 1 (IMG) */}
        <div className="flex-1">
          <img src={img} alt="Drink" className=""/>
        </div>
       {/* FLEX ITEM 2 (CONTENT) */}
        <div className="flex-1 text-white">
          <div className='Content flex flex-col items-center justify-center text-center px-6 py-10'>
            <h1 className='mt-2 max-w-[70%] text-3xl sm:text-4xl'>Sign Up For Starbucks Rewards</h1>
            <p className='my-6 max-w-[100%] text-lg sm:text-md sm:max-w-[100%] leading-relaxed'>Starting 4/22, get 25 Stars when you bring your clean, reusable
              cup into the cafe. Stars can quickly add up to Rewards.*
            </p>
            <button className='btn rounded-full px-4 py-1 border-2 border-starGreen cursor-pointer hover:bg-black hover:text-starGreen'>Join Now</button>
          </div>
        </div>
      </div>
    </div>
    {/* END HERO 1*/}

    {/* HERO 2*/}
    <div className="Hero w-full mx-auto mt-6 max-w-[1440px]">
      {/* FLEX CONTAINER */}
      <div className="flex flex-col bg-redOrange sm:items-center sm:flex-row-reverse">
        {/* FLEX ITEM 1 (IMG) */}
        <div className="flex-1">
          <img src={coldBrew} alt="Drink" className=""/>
        </div>
       {/* FLEX ITEM 2 (CONTENT) */}
        <div className="flex-1 text-white">
          <div className='Content flex flex-col items-center justify-center text-center px-6 py-10'>
            <h1 className='mt-2 max-w-[70%] text-3xl sm:text-4xl'>Cold brew for two</h1>
            <p className='my-6 max-w-[100%] text-lg sm:text-md sm:max-w-[100%] leading-relaxed'>
              Try the new Chocolate Cream Cold Brew with
              silky, chocolaty cold foam. Or go for a Vanilla Sweet Cream Cold Brew with house-made vanilla-flavored sweet cream.
            </p>
            <button className='btn rounded-full px-4 py-1 border-2 border-starGreen cursor-pointer hover:bg-gray-400'>Learn More</button>
          </div>
        </div>
      </div>
    </div>
    {/* END HERO 2*/}

     {/* HERO 3 */}
     <div className="Hero w-full mx-auto mt-6 max-w-[1440px]">
      {/* FLEX CONTAINER */}
      <div className="flex flex-col bg-salmonPink sm:items-center sm:flex-row-reverse">
        {/* FLEX ITEM 1 (IMG) */}
        <div className="flex-1">
          <img src={refresher} alt="Drink" className=""/>
        </div>
       {/* FLEX ITEM 2 (CONTENT) */}
        <div className="flex-1 text-black">
          <div className='Content flex flex-col items-center justify-center text-center px-6 py-10'>
            <h1 className='mt-2 max-w-[70%] text-3xl sm:text-4xl '>Refresh on repeat</h1>
            <p className='my-6 max-w-[100%] text-lg sm:text-md sm:max-w-[100%] leading-relaxed'>
              Our vibrant Strawberry Açaí Lemonade and Mango Dragonfruit Lemonade Starbucks Refreshers® beverages
              are oh so chill.
            </p>
            <button className='btn rounded-full px-4 py-1 border-2 border-black cursor-pointer hover:bg-gray-200'>Learn More</button>
          </div>
        </div>
      </div>
    </div>
    {/* END HERO 3*/}

    {/* HERO 4 */}
    <div className="Hero w-full mx-auto mt-6 max-w-[1440px]">
      {/* FLEX CONTAINER */}
      <div className="flex flex-col bg-christmasGreen sm:items-center sm:flex-row-reverse">
        {/* FLEX ITEM 1 (IMG) */}
        <div className="flex-1">
          <img src={cakePop} alt="Drink" className=""/>
        </div>
       {/* FLEX ITEM 2 (CONTENT) */}
        <div className="flex-1 text-white">
          <div className='Content flex flex-col items-center justify-center text-center px-6 py-10'>
            <h1 className='mt-2 max-w-[100%] text-3xl sm:text-4xl '>Hooray for cookies and cake</h1>
            <p className='my-6 max-w-[100%] text-lg sm:text-md sm:max-w-[100%] leading-relaxed'>
              The new Cookies & Cream Cake Pop is a happy mix of chocolate cake,
              crumbled cookies and white chocolaty icing.
            </p>
            <button className='btn rounded-full px-4 py-1 border-2 cursor-pointer hover:bg-gray-200 hover:text-black'>Order Now</button>
          </div>
        </div>
      </div>
    </div>
    {/* END HERO 4 */}

  </>
  )
}

export default Hero