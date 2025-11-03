import React, { Suspense} from 'react';
import Categories from '../Categories';

const Upper = () => {

   
  return (
        <div>
           
          
            <Suspense fallback={<span className="loading loading-dots loading-lg"></span>
            }>
                <Categories></Categories>
            </Suspense>

        </div>
    );
};

export default Upper;