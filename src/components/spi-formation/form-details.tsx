import { Component, Prop, State } from '@stencil/core';
import { MatchResults } from '@stencil/router';
import { Formation } from '../../global/Formation';


@Component({
    tag: 'form-details',
    
})
export class FormDetails {
   
        @Prop() match: MatchResults;
        @State() formation: Formation;
    
        componentWillLoad() {
            let id = this.match.params.id;
    
            console.log(this.match.params);
            return fetch(
                "https://dosispi.cleverapps.io/formations/" + id
            )
                .then(response => response.json())
                .then(data => {
                    this.formation = data;
                    console.log(id);
                });
        }
    
    
    
        render() {
            return (
                <div >
    
                    <div >
                        <h1>{this.formation.nomFormation} {" "}{this.formation.n0Annee}</h1>
                    </div>
                    <div>
                        Date accreditation: {this.formation.debutAccreditation}{" - "} {this.formation.finAccreditation}
                    </div>
    
                    <div >
                        diplome : {this.formation.diplome}
                       
                    </div>
                   
    
                    <form>
                    </form>
                </div>
    
            );
        }
    }