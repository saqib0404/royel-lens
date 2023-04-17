import React from 'react';
import img1 from '../../../assets/frames/P-29.jpg';
import img2 from '../../../assets/frames/P-31.jpg';
import img3 from '../../../assets/frames/P-32.jpg';
import img4 from '../../../assets/frames/P-33.jpg';
import img5 from '../../../assets/frames/P-34.jpg';
import img6 from '../../../assets/frames/P-35.jpg';
import img7 from '../../../assets/frames/S-200.jpg';
import img8 from '../../../assets/frames/P-37.jpg';
import img9 from '../../../assets/frames/P-38.jpg';
import img10 from '../../../assets/frames/P-39.jpg';
import img11 from '../../../assets/frames/P-40.jpg';
import img12 from '../../../assets/frames/P-41.jpg';
import img13 from '../../../assets/frames/P-42.jpg';
import img14 from '../../../assets/frames/P-43.jpg';
import img15 from '../../../assets/frames/P-44.jpg';
import img16 from '../../../assets/frames/S-175.jpg';
import img17 from '../../../assets/frames/S-176.jpg';
import img18 from '../../../assets/frames/S-177.jpg';
import img19 from '../../../assets/frames/S-178.jpg';
import img20 from '../../../assets/frames/S-180.jpg';
import img21 from '../../../assets/frames/S-181.jpg';
import img22 from '../../../assets/frames/S-182.jpg';
import img23 from '../../../assets/frames/S-183.jpg';
import img24 from '../../../assets/frames/S-184.jpg';
import img25 from '../../../assets/frames/S-185.jpg';

const glasses = [
    { img: img1, name: "", price: "" },
    { img: img2, name: "", price: "" },
    { img: img3, name: "", price: "" },
    { img: img4, name: "", price: "" },
    { img: img5, name: "", price: "" },
    { img: img6, name: "", price: "" },
    { img: img7, name: "", price: "" },
    { img: img8, name: "", price: "" },
    { img: img9, name: "", price: "" },
    { img: img10, name: "", price: "" },
    { img: img11, name: "", price: "" },
    { img: img12, name: "", price: "" },
    { img: img13, name: "", price: "" },
    { img: img14, name: "", price: "" },
    { img: img15, name: "", price: "" },
    { img: img16, name: "", price: "" },
    { img: img17, name: "", price: "" },
    { img: img18, name: "", price: "" },
    { img: img19, name: "", price: "" },
    { img: img20, name: "", price: "" },
    { img: img21, name: "", price: "" },
    { img: img22, name: "", price: "" },
    { img: img23, name: "", price: "" },
    { img: img24, name: "", price: "" },
    { img: img25, name: "", price: "" },
]

const Glassess = () => {
    return (
        <div className='mt-5 mb-12'>
            <div className='my-10 flex flex-row items-center mx-5 md:mx-10'>
                <hr className='border-black border w-full' />
                <h2 className='text-4xl font-semibold italic text-center px-4 md:px-8'>Glasses</h2>
                <hr className='border-black border w-full' />
            </div>

            <div className='mx-6 md:mx-11 grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
                {
                    glasses.map(glass => <div className="card card-compact bg-base-100 shadow-xl">
                        <figure><img src={glass.img} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{glass.name}</h2>
                            <p>{glass.price}</p>
                            <div className="card-actions justify-end">
                                <button className=" btn-sm btn btn-accent"> <a href="https://www.facebook.com/messages/t/105394095633208" target='_blank' rel="noreferrer" >Buy now </a></button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Glassess;