import React from "react";
import {IceCreamList, IceCreamListItem} from "../components/IceCreamList";
class Card extends Component{
 render() {
 return (
     <div>
       <Card>
         <CardBlock>
           <CardTitle>
             <IceCreamList>
                   {this.state.iceCreams.map(iceCream => {
                     return (
                       <IceCreamListItem
                         key={iceCream.product}
                         product={iceCream.product}>
                         </IceCreamListItem>
                          )}
                   )}
               </IceCreamList>
             </CardTitle>
         </CardBlock>
       </Card>
       </div>
 )
                     }
                    }
export default Card;