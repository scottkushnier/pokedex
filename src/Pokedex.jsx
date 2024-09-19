
import Pokecard from './Pokecard.jsx';



// const Pokedex = (props) => {
//     const tds = props.pokes.map((p, i) => (<>
//                                           <td>
//                                           <Pokecard name={p.name} 
//                                                      id={p.id} 
//                                                      type={p.type} 
//                                                      exp={p.base_experience} />
//                                           </td>
//                                           </>))
//     // console.log(tds);
//     return (
//     <table>
//       <tbody>
//         <tr>
//           {tds}
//         </tr>
//       </tbody>
//     </table>
//     );
// }

const Pokedex = (props) => {
    const tds = props.pokes.map((p, i) => 
                                          <Pokecard name={p.name} 
                                                     id={p.id} 
                                                     type={p.type} 
                                                     key={p.id}
                                                     exp={p.base_experience} />)
                                          
                            
    // console.log(tds);
    return (<div style={{ display: 'grid', gap: '10px', gridTemplateColumns: '130px 130px 130px 130px 130px ' }}>
               {tds}
            </div>
    );
}


export default Pokedex


// , 