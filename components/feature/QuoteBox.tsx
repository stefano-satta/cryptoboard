import Image from 'next/image'
import { FC } from 'react';


const QuoteBox: FC = () => {
    return (<>
        <div className="w-100 mt-2 mb-5">
            <div className="d-flex justify-content-between w-100 bg-white position-relative rounded py-5 ps-5" style={{height: '220px'}}>
                <div className="pb-3 d-flex align-items-center justify-content-center h-100">
                    <figure className="text-start">
                        <blockquote className="blockquote">
                            <q className="fst-italic" style={{letterSpacing: '1px'}}>When prosperity comes, do not use all of it</q>
                        </blockquote>
                        <figcaption className="blockquote-footer text-end mt-2">
                            Confucius
                        </figcaption>
                    </figure>
                </div>
                <div className="position-absolute" style={{top: '-60px', right: '0', zIndex: 1000}}>
                    <Image src="/cryptofolio.png" alt="crypto image" width="300" height="300"/>
                </div>
            </div>
        </div>
    </>)
}

export default QuoteBox;