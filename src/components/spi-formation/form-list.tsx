import { Component, State } from '@stencil/core';
import { Formation } from '../../global/Formation';


@Component({
    tag: 'form-list',
  
})
export class FormList {
   
    @State() formations: Formation[];
    
    componentWillLoad() {
        return fetch("https://dosispi.cleverapps.io/formations")
            .then(response => response.json())
            .then(AllEns => {
                this.formations = AllEns;
                console.log(this.formations);
            });
    }
    render() {

        if (this.formations && this.formations.length > 0) {

            return (

                <div >
                    {
                        this.formations.map((item) =>
                            <div>
                                <h3>Nom de la formation : {item.nomFormation}</h3>

                                <p>Annee de la formation : {item.n0Annee}</p>
                                <stencil-route-link url={'/formDetails/'+item.codeFormation}>
                                <a>Plus de details sur la formation</a>
                                </stencil-route-link>
           
                                <hr />
                            </div>)
                    }

                </div>
            )

        }
        else {

            return (" couldn't render the data ");

        }

    }
}