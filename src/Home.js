import { useNavigate } from 'react-router-dom';
const Home = () => {
    let navigate = useNavigate();

    const create_bid= ()=>{
        navigate('placebid');
    }
    return ( <div className='midCont'>
        <button onClick={create_bid}>Create Bid</button>
    </div> );
}
 
export default Home;