import { useNavigate } from 'react-router-dom';
import { CryptoState } from "../CryptoContext";

export const Header = () => {
   const { currency, setCurrency } = CryptoState();

   const navigate = useNavigate();
   const handleClick = () => {
     navigate('/');
   };
    
  return (
    <div className='flex p-2'>
        <div className='text-yellow-400 text-4xl font-medium cursor-pointer px-4' onClick={handleClick}>Coin Quest</div>
        <div className='absolute sm:right-24 right-6' >
            <select value={currency} onChange={(e) => setCurrency(e.target.value)} className='w-18 h-8 mt-2 px-1.5 rounded-md bg-slate-700 text-yellow-300'>
                <option value="INR">INR</option>
                <option value="USD">USD</option>
            </select>
        </div>
    </div>
  )
}
