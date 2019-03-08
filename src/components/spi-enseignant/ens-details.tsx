import { Component, Prop, State } from '@stencil/core';
import { MatchResults } from '@stencil/router';
import { Enseignant } from '../../global/Enseignant';




@Component({
    tag: 'ens-details',
    styleUrl: 'ens-details.scss'
})
export class EnsDetails {
    @Prop() match: MatchResults;
    @State() enseignant: Enseignant;

    componentWillLoad() {
        let id = this.match.params.id;

        console.log(this.match.params);
        return fetch(
            "https://api-dosispi.cleverapps.io/enseignants/" + id
        )
            .then(response => response.json())
            .then(data => {
                this.enseignant = data;
                console.log(id);
            });
    }


    deleteEns(EnsObj) {
        return fetch('https://api-dosispi.cleverapps.io/enseignants', {
            method: 'delete',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(EnsObj),
        }).then(() => { alert("L'enseignant a été supprimé!"); location.href = '/ensList'; }
        ).catch((error) => {
            alert("Impossible de supprimer l'enseignant!");
            console.error(error);
        });
    }

    handleClick = (ev: Event) => {
        ev.preventDefault();
        this.deleteEns( this.enseignant);
    }

    render() {
        return (
            <div>

                <div class="card column is-half is-offset-one-quarter is-shady ">
                    <div class="hero is-primary">
                    <header class="card-header ">
                  
                        <p class="card-header-title has-text-white-bis ">
                            
                            {this.enseignant.nom} {" "}{this.enseignant.prenom}
                           
                        </p>
                  
                    </header>
                    </div>
                    <div class="card-content">
                        <div class="content is-size-5">
                            <span class="has-text-primary">   
                            <i class="fas fa-mobile-alt"></i>
                            </span>{" "}
                            {this.enseignant.mobile} 
                            <br></br>
                            <span class="has-text-primary">
                            <i class="fas fa-phone-square"></i>
                            </span>{" "}
                            {this.enseignant.telephone}
                            <br></br>
                            <span class="has-text-primary">
                                <i class="fas fa-at"></i>
                            </span>{" "}
                            {this.enseignant.emailPerso} 
                            <br></br>
                            <span class="has-text-primary">
                                <i class="fas fa-at"></i>
                            </span>{" "}
                            {this.enseignant.emailUbo}
                            <br></br>


                            <span class="has-text-primary">
                                <i class="fas fa-map-marked-alt"></i>
                            </span>{" "}
                            {this.enseignant.adresse} {" "}{this.enseignant.codePostal} {" "}{this.enseignant.ville}{" "}{this.enseignant.pays}

                            <br></br>
                        </div>
                    </div>
                    <footer class="card-footer">

                        <span class="card-footer-item"> 
                        <a class="button is-danger is-outlined "  onClick={(ev: UIEvent) => this.handleClick(ev)}>
                        <span> Delete</span>
                        <span class="icon is-small">
                        <i class="fas fa-times"/>
                        </span>
                        </a>   
                        </span>
                        


                    </footer>
                </div>

            </div>

        );
    }
}