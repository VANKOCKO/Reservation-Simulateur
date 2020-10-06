jQuery(document).ready(function($){

      // Declaration des variables
      var table = $("#tableau");
      var trTbl= []
      var inputNombre = "<input  class='form-control'/>"; 
      var td ="<td>";      
      var grilleTarif = 
           [
                                { 
                                      intitule: "Vetements", 
                                      prix : 12 
                                }, 
                                {   
                                      intitule : "Chaussures", 
                                      prix : 12 
                                }, 
                                {
                                      intitule:"SacsEtAccessoires", 
                                      prix: 12
                                 },
                                {
                                      intitule: "jeuxVideo", 
                                      prix: 13
                                },
                                {
                                      intitule: "Maquillage", 
                                      prix: 12
                                }, 
                                {
                                      intitule: "LaitCorporelSavon",
                                      prix: 12 
                                },
                                {
                                      intitule: "Parfum", 
                                      prix: 15
                                },
                                {
                                      intitule:"ProduitsNonPerissables",
                                      prix : 15
                                },
                                {
                                      intitule: "PetitElectromenager",
                                      prix: 13 
                                },
                                {
                                      intitule: "ArticlesDecoratifs", 
                                      prix: 12
                                },
                                {
                                      intitule: "Luminaire", 
                                      prix: 13
                                 },
                                {
                                      intitule:"Ameublement", 
                                      prix: 12
                                },
                                {
                                      intitule:"FournituresDeBureau", 
                                      prix:12
                                 },
                                {
                                      intitule:"Medicaments", 
                                      prix:10
                                }         
            ]
      var inputNatureColis ="<td>"+
                                   "<select class='form-control'>" +
                                                "<optgroup label='ARTICLES DE MODE'>"
                                                      +"<option value='Vetements'>Vetements</option>"+ 
                                                      "<option value='Chaussures'>Chaussures</option>"+ 
                                                      "<option value='SacsEtAccessoires'>Sacs & Accessoires</option>"+
                                                "</optgroup>"
                                                +"<optgroup label='HIGT-TECH'>"+
                                                      "<option value='jeuxVideo'>Jeux videos</option>"+
                                                "</optgroup>"
                                                +"<optgroup label='HYGIÈNE & BEAUTÉ'>"+
                                                      "<option value='Maquillage'>Maquillage</option>"+
                                                      "<option value='LaitCorporelSavon'>Lait Corporel/Savon</option>"+
                                                      "<option value='Parfum'>parfum</option>"+
                                                "</optgroup>"+
                                                "<optgroup label='ALIMENTATION'>"+
                                                      "<option value='ProduitsNonPerissables'>Produits non périssables</option>"+
                                                      "<option value='VinsEtchampagnes'>Vins & champagnes</option>"+
                                                      "<option value='Parfum'>parfum</option>"+
                                                "</optgroup>"
                                                +"<optgroup label='MAISON/BUREAU'>"+
                                                      "<option value='PetitElectromenager'>Petit électroménager</option>"+
                                                      "<option value='ArticlesDecoratifs'>Articles décoratifs</option>"+
                                                      "<option value='Luminaire'>Luminaire</option>"+
                                                      "<option value='Ameublement'>Ameublement</option>"+
                                                      "<option value='FournituresDeBureau'>Fournitures de bureau</option>"+
                                                "</optgroup>"
                                                +"<optgroup label='SANTÉ/BIEN-ETRE'>"+
                                                      "<option value='Medicaments'>Médicaments</option>"+
                                                      "<option value='ComplAlimentaires'>Compl. alimentaires</option>"+
                                          "</optgroup>"+
                                   "</select>"+
                             "</td>"
      var totalAffichage = "<td><p></p></td>"
      var btnSupprimer = "<td><button class='btn btn-danger'>-</button></td>"
      for(var i=0; i<=3; i++){
            trTbl.push("<td>" + inputNombre + "</td>");
      }
      var tr = "<tr>" + inputNatureColis + trTbl  + totalAffichage + btnSupprimer + "</tr>";
       
      /**
      *   creation de variables de recuperation dynamique des donnees
      */
      var longueur
      var largeur 
      var hauteur
      var poids 
      var descriptionProduit
      var prixTarif
      var totalSousTotal
      var volume = 0
      var poidsVolumetrique = 0
      var valeurMaximalePoidEtPoidVolumique = 0
      var totalLigne = 0
      var tableauSousTotal = []
      var totalSousTotal = 0
      var diminuerSousTotal = 0
      var somme = 0 
      var affichageTotalLigne
      var totalLigneSuivante = 0
      /**
       *   setter et getter  des variables 
       * */ 
      function setDescriptionProduit(valeur) {
            descriptionProduit = valeur
      }
      function getdescriptionProduit() {
            return descriptionProduit
      }
      function setLongueur(valeur){
            longueur = valeur;  
      }
      function getLongueur() {
            return longueur;
      }
      function setLargeur(valeur) {
            largeur = valeur;
      }
      function getLargeur() {
            return largeur;
      }
      function setHauteur(valeur) {
            hauteur = valeur;
      }
      function getHauteur() {
            return hauteur;
      }
      function setPoids(valeur) {
            poids = valeur
      }
      function getPoids() {
             return poids;
      }
      function setPrixTarif(valeur) {
              prixTarif = valeur;
      }
      function getPrixTarif() {
              return prixTarif;
      }
      function setSousTotal(val){
                totalSousTotal = val
      }
      function getSousTotal(){
               return totalSousTotal
      }
      function setDiminuerSousTotal(val) {
            diminuerSousTotal = val
      }
      function getDiminuerSousTotal() {
              return diminuerSousTotal;
      }
      function setAffichageTotaligne(valeur) {
              affichageTotalLigne = valeur
      }
      function getAffichageTotaligne() {
            return affichageTotalLigne
      }

      /**
       *         C.R.U.D  
       */

      /**
       *  Creer une ligne
       */

      var lignes =
               { 
                      NumLigne: 0,
                      NomProduit: "",
                      prixDuProduit : "",
                      longueur : 0,
                      largeur : 0 ,
                      hauteur : 0,
                      poids : 0,
                      totaligne : 0
                }

            
       var tableauLigne = []     
      /**
       * 
       *  Description : 
       *     Cette fonction permet creer des lignes puis enregistrer dans un tableau
       * @param { Integer } NumeroLigne 
       * @param { String } NomDuProduit 
       * @param { Double } prixDuProduit 
       * @param { Double } longueur 
       * @param { Double }  largeur 
       * @param { Double } hauteur 
       * @param { Double } poids 
       * @param { Double } totaligne 
       */
      function creerLigne(NumeroLigne, NomDuProduit,prixDuProduit,longueur,largeur,hauteur,poids,totaligne) {
              var nouvelleLigne = new lignes(NumeroLigne, NomDuProduit, prixDuProduit,longueur,largeur,hauteur,poids,totaligne)
              tableauLigne.push(nouvelleLigne)     
              return tableauLigne 
      }

      /**
       * 
       *  Lire une ligne
       */
      function lireLigne() {
            console.log(tableauLigne)
            /**
                  console.log("Je me trouve dans la ligne ", NumeroLigne , "Je vais recuperer des donnees") 
                  console.log(" Nom du produit est : ", NomDuProduit)
                  console.log("Prix du produit est de : ", prixDuProduit)
                  console.log("Longeur colis: ", longueur)
                  console.log("Largeur colis : ", largeur)
                  console.log("Hauteur colis : ", hauteur)
                  console.log("Poids colis : ", poids)
                  console.log("Total de ligne :  ", totaligne)

             */

}

      /**
       *  Modifier une ligne 
       */
      
      function modifierLigne() {
               
            
      }

      /**
       *  Supprimer une ligne
       */
      function supprimerLigne(params) {
            
      }

      /**
       *    fonction sousTotal : modifiable quelque soit le parametre touche 
       */
      var stockageInfo = []
      var sousTotal = 0

      
      
      $("#btnAjouterLigne").on('click',function () {
            /**
            *  Ajout de la ligne dans le tableau 
            */
            $("#tableauContenu").append(tr);
            /**
            *    Remplir le tableau info dans le cas ou aucune entreees n'est utilisee  
            */
           
            if(getSousTotal() == 0){
                 tableauSousTotal.push(getSousTotal())
            }
            if(getSousTotal()!= "undefined" && typeof(getSousTotal())!="undefined" && getSousTotal() != ""){

                  tableauSousTotal.push(getSousTotal())
                  somme = tableauSousTotal.reduce(function (accumulateur,valeurCourante) {
                         return accumulateur + valeurCourante
                  })
                  
                  for(var i = 0; i<=tableauSousTotal.length; i++){
                        if(typeof(tableauSousTotal[i]) == "undefined"){
                              tableauSousTotal.splice(i,1)
                        }
                        else 
                        {
                              //somme = tableauSousTotal[i];
                        }
                  } 
            }
            if(somme != 0)
            { 
                  $("#total").html(somme); 
            }
            $("#tableauContenu > tr").each(function (index) {
                  /**
                   *   Recuperation du prix selon la nature du produit selectionne par l'utilisateur
                   */
                  $(this).find("td:eq(0)").find("select").on('change',function (e) {  
                              var nodeElement = $(this);
                              var element = $(this).val()   
                              grilleTarif.forEach(function (val) {
                                    if(val.intitule == element ){
                                          setDescriptionProduit(val.intitule)
                                          setPrixTarif(val.prix)
                                          //lireLigne(nodeElement.parent().parent().index(),val.intitule,val.prix,getLongueur(),getLargeur(),getHauteur(),getPoids(),totalLigne)  
                                          /**
                                           *   Affiche le prix unitaire a condition que les autres entrees ne sont utilisees 
                                           */
                                          if(typeof getLongueur() == "undefined" && typeof  getLargeur() == "undefined" && typeof  getHauteur() == "undefined" ){
                                                  nodeElement.parent().parent().find("td:eq(5)").html(val.prix) 
                                          }
                                          else 
                                          {
                                                volume =  getLongueur() * getLargeur() * getHauteur();
                                                poidsVolumetrique = volume / 6000 ;
                                                valeurMaximalePoidEtPoidVolumique = Math.max(getPoids(),poidsVolumetrique)
                                                totalLigne = valeurMaximalePoidEtPoidVolumique * getPrixTarif();
                                                nodeElement.parent().parent().find("td:eq(5)").html(totalLigne)
                                                creerLigne(nodeElement.parent().parent().index(), val.intitule,val.prix,getLongueur(),getLargueur(),getHauteur(),getPoids(),totaligne)

                                          }
                                    }
                              })  
                  })
                  $(this).find("td:eq(1)").find("input").on('keyup',function (e) {
                              var nodeElement = $(this);
                              setLongueur($(this).val())
                             // FonctionsousTotal(getPrixTarif(),$(this).val(),getLargeur(),getHauteur(),getPoids(),e,nodeElement); 
                  })
                  $(this).find("td:eq(2)").find("input").on('keyup',function (e) {
                              var nodeElement = $(this);
                              setLargeur($(this).val())
                            //  FonctionsousTotal(getPrixTarif(),getLongueur(),$(this).val(),getHauteur(),getPoids(),e,nodeElement); 
                  })
                  $(this).find("td:eq(3)").find("input").on('keyup',function (e) {
                              var nodeElement = $(this);
                              setHauteur($(this).val())
                              //FonctionsousTotal(getPrixTarif(),getLongueur(),getLargeur(),$(this).val(),getPoids(),e,nodeElement); 
                  })
                  $(this).find("td:eq(4)").find("input").on('keyup',function (e) {

                              var nodeElement = $(this);
                              var eventClavier = e.which
                              setPoids($(this).val())
                              //setAffichageTotaligne($(this).parent().next().children())
                              if( (typeof(getLongueur()) != "undefined" && getLongueur() != "") && (typeof(getLargeur()) != "undefined" && getLargeur() != "") && (typeof(getHauteur()) != "undefined" && getHauteur() != "") && (typeof(getPoids()) != "undefined" && getPoids() != ""))
                              {
                                    volume =  getLongueur() * getLargeur()* getHauteur();
                                    poidsVolumetrique = volume / 6000 ;
                                    valeurMaximalePoidEtPoidVolumique = Math.max(getPoids(),poidsVolumetrique)
                                    totalLigne = valeurMaximalePoidEtPoidVolumique * getPrixTarif();
                                    /**
                                     *   gestions des evenement entree sur poids   
                                     */
                                    if(eventClavier == 8 || eventClavier == 46)
                                    {                
                                                /**
                                                Supprimer element du tableau
                                                */
                                                stockageInfo.pop();
                                                /**
                                                 *    
                                                 */
                                                totalLigne = stockageInfo[stockageInfo.length - 1];
                                                /**
                                                 *    Vider le tableau apres le dernier element supprimer   
                                                 */
                                                if(stockageInfo.length == 1){
                                                   stockageInfo = []  
                                                   nodeElement.parent().parent().find("td:eq(5)").html("")

                                                
                                                }
                                                if(totalLigne == ""){
                                                      nodeElement.parent().parent().find("td:eq(5)").html("")
                                                }
                                                else      
                                                { 
                                                      nodeElement.parent().parent().find("td:eq(5)").html(totalLigne)
                                                      setSousTotal(totalLigne);
                                                }                     
                                    }
                                    else 
                                    {
                                                if(totalLigne == ""){
                                                      nodeElement.parent().parent().find("td:eq(5)").html("")
                                                }
                                                else      
                                                {     
                                                      stockageInfo.push(totalLigne)
            
                                                      nodeElement.parent().parent().find("td:eq(5)").html(totalLigne)
                                                      //console.log()
                                                      console.log(nodeElement.parent().parent().find("td:eq(5)").text())
                                                      //if(){
                                                      // console.log(nodeEl.parent().parent().find("td:eq(5)").html(totalLigne))
                                                      //}
                                                      console.log(nodeElement.parent().parent().find("td:eq(5)").html())
                                                      setSousTotal(totalLigne);
                                                      creerLigne(nodeElement.parent().parent().index(), getdescriptionProduit(),getPrixTarif(),getLongueur(),getLargueur(),getHauteur(),getPoids(),totaligne)
                                                }  
                                    }  
                              }
                              else 
                              {
                                          stockageInfo.push(0)
                                          valeurMaximalePoidEtPoidVolumique = 0
                                          totalLigne = valeurMaximalePoidEtPoidVolumique * getPrixTarif();
                                          totalLigne = 0
                              }
                                               // FonctionsousTotal(getPrixTarif(),getLongueur(),$(this).val(),getHauteur(),$(this).val(),e,nodeElement);             
                  })

            });
            /**
            *     supprimer la ligne
           */
            $("#tableauContenu > tr").find("td:eq(6)").children().on("click", function (event, index) {
                              if($(this).parent().parent().find("td:eq(5)").html() == "<p></p>"){
                                    $(this).parent().parent().remove();
                                    tableauSousTotal.splice($(this).parent().parent().index(),1)
                              }
                              else{
                                    if(tableauSousTotal.length == 0){
                                          $(this).parent().parent().remove();
                                          somme = 0
                                    }else{
                                          for(var j=0; j<tableauSousTotal.length; j++){
                                                if(j == $(this).parent().parent().index()){
                                                      tableauSousTotal.splice(j,1)
                                                      $(this).parent().parent().remove();
                                                }
                                          }
                                          somme = tableauSousTotal.reduce(function (accumulateur,valeurCourante) {
                                                return accumulateur + valeurCourante
                                          })
                                          $("#total").html(somme)
                                    }     
                              }                                                  
            })
      })
})
