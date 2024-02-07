export default function Services() {
  return (
    <div className='flex flex-col text-2xl georgia items-center'>
      <h1 className='text-center m-5'>አገልግሎቶች / Services</h1>
      <p className='w-10/12 m-5'>
        የአምልኮ አገልግሎቶች ዘወትር ቅዳሜ ጥዋት ከጠዋቱ 5፡30 እስከ ጥዋት ይካሄዳሉ ቀትር. ከአምልኮ
        በኋላ፣በማህበረሰብ ሰዓታችን እናዝናለን። እዚህ, እንሰበስባለን እንግዶቻችንን፣ ጓደኞቻችንን እና ቤተሰቦቻችንን
        በባህላዊ ኢትዮዽያዊነት ይገናኙ በቤተሰቦቻችን የሚመጡ የምግብ ምግቦች. የተለመዱ በዓላትን እናከብራለን በባህላዊ
        አቆጣጠር፣ ገናን፣ መልካም አርብ፣ ፋሲካን፣ ጨምሮ የቅዱስ አቡነ ልደታ በዓል፣ የቅዱስ አቡነ ምሥረታ በዓል
        ቤተመቅደስ ወዘተ.
      </p>
      <p className=' w-10/12 m-5'>
        Worship Services are held every Saturday Morning from 5:30 AM until
        Noon. After Worship, we enjoy our Community Hour. Here, we gather to
        connect with our guests, friends and families over traditional Ethiopian
        food dishes brought by our families. We celebrate the customary holidays
        on our traditional calendar, including Christmas, Good Friday, Easter,
        St Abune's birthday, the anniversary of St. Abunes establishment of the
        temple, etc.
      </p>
      <div className='flex justify-evenly'>
        <img
          className='w-1/3 m-2'
          src='/images/congregation 1.jpg'
          alt='Congregation'
        />
        <img
          className='w-1/3 m-2'
          src='/images/congregation 2.jpg'
          alt='More Congregation'
        />
      </div>
    </div>
  );
}
