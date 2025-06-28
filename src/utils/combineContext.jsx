export default function combineContext(...providers){   // rest operators
    /**
     *  This combines multiple contextProviders together
     * and returns a single contextProvider
     * 
     * expected output is single contextProvider
     * single contextProvider is a function that returns an object
     * 
     */

    return ({children})=>{
        return providers.reduceRight((accumulator, CurrentProvider)=>{
            return <CurrentProvider>{accumulator}</CurrentProvider>;
        }, children);
    };
}



// reduce function works from left to right
/***
 *  <A>
 *      <B>
 *          <C>
 *              {children}
 *          </C>
 *      </B>
 *  </A>
 * 
 */

// so we use reduceRight to reverse the order