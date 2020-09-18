jQuery(document).ready(function($){


      // Declaration des variables
      var table = $("#tableau");
      var trTbl= []
      var inputNombre = "<input  class='form-control'/>"; 
      var td ="<td>";      
      var grilleTarif = [
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
      var prixTarif
      var totalSousTotal
      var volume = 0
      var poidsVolumetrique = 0
      var valeurMaximalePoidEtPoidVolumique = 0
      var totalLigne = 0
      var tableauSousTotal = []
      var totalSousTotal
      var diminuerSousTotal = 0
      var somme = 0 
      var nbClick = 0 
      var stockageActionInputTaille = []
      /**
       *   setter et getter  des variables 
       * */ 
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
      /**
       *    fonction sousTotal : modifiable quelque soit le parametre touche 
       */
       function FonctionsousTotal(prixColis,longueur,largeur,hauteur,poids,event) {
                 volume =  longueur * largeur* hauteur;
                 poidsVolumetrique = volume / 6000 ;
                 var eventClavier = event.which
                 if(longueur != "" && largeur != "" && hauteur != "" && poids != ""){
                     valeurMaximalePoidEtPoidVolumique = Math.max($(this).val(),poidsVolumetrique)
                     totalLigne = valeurMaximalePoidEtPoidVolumique * prixColis;

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
                        if(stockageActionInputTaille.length == 1){
                              stockageActionInputTaille = []
                              stockageInfo = []                                                                                        
                        }
                        if(totalLigne == ""){
                              $(this).parent().next().children().html("")
                        }
                        else      
                        { 
                              $(this).parent().next().html(totalLigne);
                              $(this).parent().next().children().html(totalLigne)
                              setSousTotal(totalLigne);
                        } 
                                                
                        }
                        else {
                                    stockageInfo.push(totalLigne);
                                    stockageActionInputTaille.push($(this).val())
                              if(totalLigne == ""){
                                    $(this).parent().next().children().html("")
                              }
                              else      
                              { 
                                    $(this).parent().next().html(totalLigne);
                                    setSousTotal(totalLigne);
                              }  
                        } 

                           
                 }
                 else {
                     valeurMaximalePoidEtPoidVolumique = 0
                     totalLigne = valeurMaximalePoidEtPoidVolumique * getPrixTarif();
                     totalLigne = 0
                 }

       }
      $("#btnAjouterLigne").on('click',function () {
            /**
            *  Ajout de la ligne dans le tableau 
            */
            $("#tableauContenu").append(tr);
            if((typeof(getSousTotal()) != "undefined" && getSousTotal() != "")){
                  tableauSousTotal.push(getSousTotal());  
                  for(var i = 0; i<=tableauSousTotal.length; i++){
                        if(typeof(tableauSousTotal[i]) != "undefined"){
                                somme = somme + tableauSousTotal[i];
                        }
                  }   
                  console.log(somme)                     
            }
            if(somme != 0){
                  $("#total").html(somme);
                  if(getDiminuerSousTotal() == 0 ){
                        $("#total").html(somme);
                  }else {
                          
                         somme = somme - getDiminuerSousTotal();     
                  }
            }
            $("#tableauContenu > tr").each(function (index) {
                  /**
                   *   Recuperation du prix selon la nature du produit selectionne par l'utilisateur
                   */
                  $(this).find("td:eq(0)").find("select").on('change',function (e) { 
                              var element = $(this).val()     
                              grilleTarif.forEach(function (val) {
                                    if(val.intitule == element ){
                                          setPrixTarif(val.prix)
                                          FonctionsousTotal(val.prix,getLongueur(),getLargeur(),getHauteur(),getPoids(),e); 
                                    }
                              })  
                  })
                  $(this).find("td:eq(1)").find("input").on('keyup',function (e) {
                              setLongueur($(this).val());
                              FonctionsousTotal(getPrixTarif(),$(this).val(),getLargeur(),getHauteur(),getPoids(),e); 

                              /**
                              $(this).parent().next().next().children().html($(this).val())
                              var totalLigne = $(this).val();
                              if(totalLigne == ""){
                                    $(this).parent().next().children().html("")
                              }
                              else      
                              { 
                                  totalSousTotal = totalSousTotal + totalLigne;
                                  $(this).parent().next().children().html(totalLigne); 
                                  $(this).parent().parent().next().find("td:eq(3)").children().html(totalSousTotal);
                              }
                               */
                  })

                  $(this).find("td:eq(2)").find("input").on('keyup',function (e) {
                              FonctionsousTotal(getPrixTarif(),getLongueur(),$(this).val(),getHauteur(),getPoids(),e); 
                              /** 
                              var totalLigne = $(this).val();
                              if(totalLigne == ""){
                                    $(this).parent().next().children().html("")
                              }
                              else      
                              { 
                                  totalSousTotal = totalSousTotal + totalLigne;
                                  $(this).parent().next().children().html(totalLigne); 
                                  $(this).parent().parent().next().find("td:eq(3)").children().html(totalSousTotal);
                              }
                              */
                  })

                  $(this).find("td:eq(3)").find("input").on('keyup',function (e) {

                              FonctionsousTotal(getPrixTarif(),getLongueur(),getLargeur(),$(this).val(),getPoids(),e); 
                              /**
                              var totalLigne = $(this).val();
                              volume = $(this).val() * getLongueur() * getLargeur(); 
                              if(totalLigne == ""){
                                    $(this).parent().next().children().html("")
                              }
                              else      
                              { 
                              totalSousTotal = totalSousTotal + totalLigne;
                              $(this).parent().next().children().html(totalLigne); 
                              
                              $(this).parent().parent().next().find("td:eq(3)").children().html(totalSousTotal);
                              }
                              */
                  })
                  var stockageInfo = []
                  var sousTotal = 0 
                  $(this).find("td:eq(4)").find("input").on('keyup',function (e) {
                        
                              var eventClavier = e.which
                              setPoids($(this).val());
                              volume =  getLongueur() * getLargeur() * getHauteur();
                              poidsVolumetrique = volume / 6000      
                              /**
                               *  Verification du maximum entre le poid et le poid volumique  
                               */
                              /**
                               *     Exception sur evenemet zero 
                               */
                              if($(this).val() == ""){
                                   valeurMaximalePoidEtPoidVolumique = 0
                                   totalLigne = valeurMaximalePoidEtPoidVolumique * getPrixTarif();
                                   totalLigne = 0
                              }
                              else 
                                          {
                                                valeurMaximalePoidEtPoidVolumique = Math.max($(this).val(),poidsVolumetrique)
                                                totalLigne = valeurMaximalePoidEtPoidVolumique * getPrixTarif();
                                                /**
                                                 *   gestions des evenement entree sur poids   
                                                 */
                                                if(eventClavier == 8 || eventClavier == 46)
                                                {                 /**
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
                                                                  if(stockageActionInputTaille.length == 1){
                                                                        stockageActionInputTaille = []
                                                                        stockageInfo = []                                                                                        
                                                                  }
                                                                  if(totalLigne == ""){
                                                                        $(this).parent().next().children().html("")
                                                                  }
                                                                  else      
                                                                  { 
                                                                        $(this).parent().next().html(totalLigne);
                                                                        $(this).parent().next().children().html(totalLigne)
                                                                        setSousTotal(totalLigne);
                                                                  } 
                                                                    
                                                }
                                                else {
                                                       stockageInfo.push(totalLigne);
                                                       stockageActionInputTaille.push($(this).val())
                                                      if(totalLigne == ""){
                                                            $(this).parent().next().children().html("")
                                                      }
                                                      else      
                                                      { 
                                                            $(this).parent().next().html(totalLigne);
                                                            setSousTotal(totalLigne);
                                                      }  
                                                }                          
                        }
                                   
                  })
                 
            });

            /**
            *     supprimer la ligne
            */
            $("#tableauContenu > tr").find("td:eq(6)").children().on("click", function () {
                        if(typeof(tableauSousTotal[i]) != "undefined" && $(this).parent().prev().html() != "<p></p>" ){
                              somme = somme - $(this).parent().prev().html();
                        }
                        $(this).parent().parent().remove();
            })       
      })
})
