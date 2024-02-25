import Supporter from '../components/SupporterDiv';
import data from '../assets/data/supporter-data';
import bizData from '../assets/data/biz-data';
import Business from '../components/BusinessSup';

export default function Supporters() {
  return (
    <div className='flex flex-col items-center text-2xl georgia'>
      <h2 className='text-center m-5'>
        ድንቅ ደጋፊዎቻችን / Our Wonderful Supporters
      </h2>
      <Supporter data ={data} />
      <h2 className='m-5'>Business Sponsors</h2>
      <Business bizData ={bizData} />
    </div>
  );
}
