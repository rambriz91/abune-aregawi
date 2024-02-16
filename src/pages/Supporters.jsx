import Supporter from '../components/SupporterDiv';
import data from '../assets/data/supporter-data';

export default function Supporters() {
  return (
    <div className='flex flex-col max-h-full items-center text-2xl georgia'>
      <h2 className='text-center m-5'>
        ድንቅ ደጋፊዎቻችን / Our Wonderful Supporters
      </h2>
      <Supporter data ={data} />
    </div>
  );
}
