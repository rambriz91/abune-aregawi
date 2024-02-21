export default function Home() {
  return (
    <div id='home-div' className='flex'>
      <div
        id='left-div'
        className='flex flex-col justify-center items-center w-1/2 my-10'
      >
        <h2>Aba Woldehawariat Assefa</h2>
      <h2>Azmara Hailu, Vice President</h2>
        <img
          className='w-3/4 rounded'
          src='/images/Abune-Aregawi-12-1200x802.jpg'
          alt='Temple of Abune Aregawi'
        />
        <img
          className='w-3/4 mt-5 rounded'
          src='/images/aregawi-mural.jpg'
          alt='Mural of Abune Aregawi'
        />
      </div>
      <div id='right-div' className='w-1/2 my-10'>
        <h2 className='text-center georgia'>እምነታችን / Our Faith</h2>
        <h3 className='georgia'>መዝሙራት/Psalms 112:</h3>
        <ul className='text-xl p-5 m-5 georgia '>
          <li>6 ለዘላለም አይናወጥም፤ የጻድቅ መታሰቢያ ለዘላለም ይኖራል።</li>
          <li>
            It will not be shaken forever. The memory of the righteous lives
            forever.
          </li>
          <li>7 ከክፉ ነገር አይፈራም፤ በእግዚአብሔር ለመታመን ልቡ የጸና ነው።</li>
          <li>
            He is not afraid of evil. His heart is steadfast in trusting God.
          </li>
          <li>8 በጠላቶቹ ላይ እስኪያይ ድረስ ልቡ ጽኑ ነው፥ አይፈራም።</li>
          <li>
            His heart is steadfast until he looks upon his enemies, and he is
            not afraid.
          </li>
          <li>9 በተነ ለችግረኞችም ሰጠ፤ ጽድቁ ለዘላለም ዓለም ይኖራል፤ ቀንዱ በክብር ከፍ ከፍ ይላል።</li>
          <li>
            He scattered and gave to the needy. His righteousness endures
            forever. His horn is lifted up in glory.
          </li>
        </ul>
        <h3>የማቴዎስ ወንጌል / Mathew 10:</h3>
        <ul className='text-xl p-5 m-5 georgia'>
          <li>40 እናንተን የሚቀበል እኔን ይቀበላል፥ እኔንም የሚቀበል የላከኝን ይቀበላል።</li>
          <li>
            Anyone who welcomes you welcomes me, and anyone who welcomes me
            welcomes the one who sent me.
          </li>
          <li>
            41 ነቢይን በነቢይ ስም የሚቀበል የነቢይን ዋጋ ይወስዳል፥ ጻድቅንም በጻድቅ ስም የሚቀበል የጻድቁን ዋጋ
            ይወስዳል።
          </li>
          <li>
            {' '}
            Whoever welcomes a prophet as a prophet will receive a prophet’s
            reward, and whoever welcomes a righteous person as a righteous
            person will receive a righteous person’s reward.
          </li>
          <li>
            42 ማንም ከእነዚህ ከታናናሾቹ ለአንዱ ቀዝቃዛ ጽዋ ውኃ ብቻ በደቀ መዝሙር ስም የሚያጠጣ፥ እውነት
            እላችኋለሁ፥ ዋጋው አይጠፋበትም።
          </li>
          <li>
            And if anyone gives even a cup of cold water to one of these little
            ones who is my disciple, truly I tell you, that person will
            certainly not lose their reward.
          </li>
        </ul>
        <a className='text-indigo-800 underline font-bold text-xl p-5 m-5 georgia' href="https://en.wikipedia.org/wiki/Ethiopian_Orthodox_Tewahedo_Church">ስለ እምነታችን የበለጠ ተማር / Learn more about our faith</a>
      </div>
    </div>
  );
}
