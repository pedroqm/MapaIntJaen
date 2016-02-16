
$(function(){
    var aux=1;
  
    var nombre="prueba";
    
   
$(".mapcontainer").mapael({
        map: {
            name: "jaen1",
            defaultArea: {
                attrsHover: {
                    fill: "#8ea22d",
                    stroke: "#5d5d5d",
                        "stroke-width": 1,
                        "stroke-linejoin": "round"
                }
            }
        },
        legend: {
            plot: {
                cssClass: 'myLegend',
                labelAttrs: {
                    fill: "#4a4a4a"
                },
                titleAttrs: {
                    fill: "#4a4a4a"
                },
                marginBottom: 20,
                marginLeft: 30,
                hideElemsOnClick: {
                    opacity: 0
                },
                title: "Filtro por tipo de recursos",
                slices: [{
                    
                    size: 6,
                    type: "circle",
                    min: 20000,
                    max: 100000,
                    attrs: {
                        fill: "#fffd72"
                    },
                    label: "Centros de emprendimiento"
                }, {
                    size: 10,
                    type: "circle",
                    min: 100000,
                    max: 200000,
                    attrs: {
                        fill: "#ffbd54"
                    },
                    label: "Parques tecnológicos"
                }, {
                    size: 20,
                    type: "circle",
                    min: 200000,
                    attrs: {
                        fill: "#ff5454"
                    },
                    label: "Otros recursos"
                }, {
                        type : "image",
				    url: "http://www.vincentbroute.fr/mapael/marker.png",
				    width: 12,
				    height: 40,
                    max: 20000,
                    attrs : {
                        opacity : 1,
                        fill: "#89ff72"
                    },
                    attrsHover: {
                        transform : "s1.5"
                    },
                    label: "Poligonos industriales"
                }]
            }
        },
   

             /* for ($i=0; max){
            
                $value = array[$i][nombre];
                $latitude = array[$i][latitude];
                longitude = array[$i][longitude];
                $href = array[$i][id];
                
                "$value":{
                    value: "$value";
                    ...
                    ....
                    href: "muestra-recurso.php&id=".$href*/
            
      // for(var i=1; i<=3; i++)
        plots:{
       
       
           "uno": {
                value: "120001",
                latitude: 421.12,
                longitude: 75.06,
                href: "#",
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Puerta de segura </span><br />"+nombre+""
                }
            },
            
           
            "jaen": {
                value: "2268265",
                latitude: 169.16,
                longitude: 253.87,
                href: "#",
                tooltip: {
                    content: "<span style=\"font-weight:bold;\">Jaen </span><br />Poblacion : 2268265"
                }
            }       
        },
        
      areas: {

    "villarodrigo": {
                    tooltip: {content : "<span style=\"font-weight:bold;\">Villarodrigo</span>"}
                },
    "siles": {
                    tooltip: {content : "<span style=\"font-weight:bold;\">Siles</span>"}
                },
    "genave": {
                    tooltip: {content : "<span style=\"font-weight:bold;\">Génave</span>"}
                },
    "santistebanDelPuerto": {
                    tooltip: {content : "<span style=\"font-weight:bold;\">Santisteban Del Puerto</span>"}
                },
    "aldeaquemada": {
                    tooltip: {content : "<span style=\"font-weight:bold;\">Aldeaquemada</span>"}
                },
    "santaElena": {
                    tooltip: {content : "<span style=\"font-weight:bold;\">Santa Elena</span>"}
                },
    "castellar": {
                    tooltip: {content : "<span style=\"font-weight:bold;\">Castellar</span>"}
                },
    "banosDeLaEncina": {
                    tooltip: {content : "<span style=\"font-weight:bold;\">Baños De La Encina</span>"}
                },
    "andujar": {
                    tooltip: {content : "<span style=\"font-weight:bold;\">Andújar</span>"}
                },
    "laCarolina": {
                    tooltip: {content : "<span style=\"font-weight:bold;\">La Carolina</span>"}
                },
    "villanuevaDeLaReina": {
                    tooltip: {content : "<span style=\"font-weight:bold;\">Villanueva De La Reina</span>"}
                },
    "vilches": {
                    tooltip: {content : "<span style=\"font-weight:bold;\">Vilches</span>"}
                },
    "navasDeSanJuan": {
                    tooltip: {content : "<span style=\"font-weight:bold;\">Navas De San Juan</span>"}
                },
    "benatae": {
                    tooltip: {content : "<span style=\"font-weight:bold;\">Benatae</span>"}
                },
    "arquillos": {
                    tooltip: {content : "<span style=\"font-weight:bold;\">Arquillos</span>"}
                },
    "carboneros": {
                    tooltip: {content : "<span style=\"font-weight:bold;\">Carboneros</span>"}
                },
    "marmolejo": {
                    tooltip: {content : "<span style=\"font-weight:bold;\">Marmolejo</span>"}
                },
    "linares": {
                    tooltip: {content : "<span style=\"font-weight:bold;\">Linares</span>"}
                },
    "villacarrillo": {
                    tooltip: {content : "<span style=\"font-weight:bold;\">Villacarrillo</span>"}
                },
    "bailen": {
                    tooltip: {content : "<span style=\"font-weight:bold;\">Bailén</span>"}
                },
    "guarroman": {
                    tooltip: {content : "<span style=\"font-weight:bold;\">Guarroman</span>"}
                },
    "iznatoraf": {
                    tooltip: {content : "<span style=\"font-weight:bold;\">Iznatoraf</span>"}
                },
    "hornos": {
                    tooltip: {content : "<span style=\"font-weight:bold;\">Hornos</span>"}
                },
    "sabiote": {
                    tooltip: {content : "<span style=\"font-weight:bold;\">Sabiote</span>"}
                },
    "rus": {
                    tooltip: {content : "<span style=\"font-weight:bold;\">Rus</span>"}
                },
    "ibros": {
                    tooltip: {content : "<span style=\"font-weight:bold;\">Ibros</span>"}
                },
    "ubeda": {
                    tooltip: {content : "<span style=\"font-weight:bold;\">Ubeda</span>"}
                },
    "canena": {
                    tooltip: {content : "<span style=\"font-weight:bold;\">Canena</span>"}
                },
    "torreperogil": {
                    tooltip: {content : "<span style=\"font-weight:bold;\">Torreperogil</span>"}
                },
    "jabalquinto": {
                    tooltip: {content : "<span style=\"font-weight:bold;\">Jabalquinto</span>"}
                },
    "baeza": {
                    tooltip: {content : "<span style=\"font-weight:bold;\">Baeza</span>"}
                },
    "espeluy": {
                    tooltip: {content : "<span style=\"font-weight:bold;\">Espeluy</span>"}
                },
    "santoTome": {
                    tooltip: {content : "<span style=\"font-weight:bold;\">Santo Tomé</span>"}
                },
    "lupion": {
                    tooltip: {content : "<span style=\"font-weight:bold;\">Lupión</span>"}
                },
    "lopera": {
                    tooltip: {content : "<span style=\"font-weight:bold;\">Lopera</span>"}
                },
    "arjonilla": {
                    tooltip: {content : "<span style=\"font-weight:bold;\">Arjonilla</span>"}
                },
    "torreblascopedro": {
                    tooltip: {content : "<span style=\"font-weight:bold;\">Torreblascopedro</span>"}
                },
    "chilluevar": {
                    tooltip: {content : "<span style=\"font-weight:bold;\">Chilluevar</span>"}
                },
    "cazailla": {
                    tooltip: {content : "<span style=\"font-weight:bold;\">Cazailla</span>"}
                },
    "mengibar": {
                    tooltip: {content : "<span style=\"font-weight:bold;\">Mengíbar</span>"}
                },
    "laIruela": {
                    tooltip: {content : "<span style=\"font-weight:bold;\">La Iruela</span>"}
                },
    "cazorla": {
                    tooltip: {content : "<span style=\"font-weight:bold;\">Cazorla</span>"}
                },
    "lahiguera": {
                    tooltip: {content : "<span style=\"font-weight:bold;\">Lahiguera</span>"}
                },
    "arjona": {
                    tooltip: {content : "<span style=\"font-weight:bold;\">Arjona</span>"}
                },
    "begijar": {
                    tooltip: {content : "<span style=\"font-weight:bold;\">Begíjar</span>"}
                },
    "villatorres": {
                    tooltip: {content : "<span style=\"font-weight:bold;\">Villatorres</span>"}
                },
    "manchaReal": {
                    tooltip: {content : "<span style=\"font-weight:bold;\">Mancha Real</span>"}
                },
    "fuerteDelRey": {
                    tooltip: {content : "<span style=\"font-weight:bold;\">Fuerte Del Rey</span>"}
                },
    "torredelcampo": {
                    tooltip: {content : "<span style=\"font-weight:bold;\">Torredelcampo</span>"}
                },
    "jaen": {
                    href: "http://www.google.com",
                    tooltip: {content : "<span style=\"font-weight:bold;\">Jaén</span>"}
                },
    "bedmarYGarciez": {
                    tooltip: {content : "<span style=\"font-weight:bold;\">Bedmar Y Garcíez</span>"}
                },
    "porcuna": {
                    tooltip: {content : "<span style=\"font-weight:bold;\">Porcuna</span>"}
                },
    "jodar": {
                    tooltip: {content : "<span style=\"font-weight:bold;\">Jódar</span>"}
                },
    "escanuela": {
                    tooltip: {content : "<span style=\"font-weight:bold;\">Escanuela</span>"}
                },
    "quesada": {
                    tooltip: {content : "<span style=\"font-weight:bold;\">Quesada</span>"}
                },
    "pealDeBecerro": {
                    tooltip: {content : "<span style=\"font-weight:bold;\">Peal De Becerro</span>"}
                },
    "villardompardo": {
                    tooltip: {content : "<span style=\"font-weight:bold;\">Villardompardo</span>"}
                },
    "jimena": {
                    tooltip: {content : "<span style=\"font-weight:bold;\">Jimena</span>"}
                },
    "torredonjimeno": {
                    tooltip: {content : "<span style=\"font-weight:bold;\">Torredonjimeno</span>"}
                },
    "torres": {
                    tooltip: {content : "<span style=\"font-weight:bold;\">Torres</span>"}
                },
    "higueraDeCalatrava": {
                    tooltip: {content : "<span style=\"font-weight:bold;\">Higuera De Calatrava</span>"}
                },
    "cabraDeSantoCristo": {
                    tooltip: {content : "<span style=\"font-weight:bold;\">Cabra De Santo Cristo</span>"}
                },
    "pozoAlcon": {
                    tooltip: {content : "<span style=\"font-weight:bold;\">Pozo Alcón</span>"}
                },
    "albanchezDeMagina": {
                    tooltip: {content : "<span style=\"font-weight:bold;\">Albanchez De Mágina</span>"}
                },
    "larva": {
                    tooltip: {content : "<span style=\"font-weight:bold;\">Larva</span>"}
                },
    "huesa": {
                    tooltip: {content : "<span style=\"font-weight:bold;\">Huesa</span>"}
                },
    "laGuardiaDeJaen": {
                    tooltip: {content : "<span style=\"font-weight:bold;\">La Guardia De Jaén</span>"}
                },
    "santiagoDeCalatraba": {
                    tooltip: {content : "<span style=\"font-weight:bold;\">Santiago De Calatraba</span>"}
                },
    "hinojares": {
                    tooltip: {content : "<span style=\"font-weight:bold;\">Hinojares</span>"}
                },
    "belmezDeLaMoraleda": {
                    tooltip: {content : "<span style=\"font-weight:bold;\">Belmez De La Moraleda</span>"}
                },
    "martos": {
                    tooltip: {content : "<span style=\"font-weight:bold;\">Mártos</span>"}
                },
    "pegalajar": {
                    tooltip: {content : "<span style=\"font-weight:bold;\">Pegalajar</span>"}
                },
    "jamilena": {
                    tooltip: {content : "<span style=\"font-weight:bold;\">Jamilena</span>"}
                },
    "huelma": {
                    tooltip: {content : "<span style=\"font-weight:bold;\">Huelma</span>"}
                },
    "cambil": {
                    tooltip: {content : "<span style=\"font-weight:bold;\">Cambil</span>"}
                },
    "losVillares": {
                    tooltip: {content : "<span style=\"font-weight:bold;\">Los Villares</span>"}
                },
    "alcaudete": {
                    tooltip: {content : "<span style=\"font-weight:bold;\">Alcaudete</span>"}
                },
    "carcheles": {
                    tooltip: {content : "<span style=\"font-weight:bold;\">Carcheles</span>"}
                },
    "fuensantaDeMartos": {
                    tooltip: {content : "<span style=\"font-weight:bold;\">Fuensanta De Martos</span>"}
                },
    "campilloDeArenas": {
                    tooltip: {content : "<span style=\"font-weight:bold;\">Campillo De Arenas</span>"}
                },

    "valdepenasDeJaen": {
                    tooltip: {content : "<span style=\"font-weight:bold;\">Valdepeñas De Jaen</span>"}
                },
    "noalejo": {
                    tooltip: {content : "<span style=\"font-weight:bold;\">Noalejo</span>"}
                },
    "castilloDeLocubin": {
                    tooltip: {content : "<span style=\"font-weight:bold;\">Castillo De Locubin</span>"}
                },
    "alcalaLaReal": {
                    tooltip: {content : "<span style=\"font-weight:bold;\">Alcalá La Real</span>"}
                },
    "frailes": {
                    tooltip: {content : "<span style=\"font-weight:bold;\">Fráiles</span>"}
                },
    "montizon": {
                    tooltip: {content : "<span style=\"font-weight:bold;\">Montizón</span>"}
                },
    "chiclanaDeSegura": {
                    tooltip: {content : "<span style=\"font-weight:bold;\">Chiclana De Segura</span>"}
                },
    "torresDeAlbanchez": {
                    tooltip: {content : "<span style=\"font-weight:bold;\">Torres De Albanchez</span>"}
                },
    "puertaDeSegura": {
                    tooltip: {content : "<span style=\"font-weight:bold;\">Puerta De Segura</span>"}
                },
    "puenteDeGenave": {
                    tooltip: {content : "<span style=\"font-weight:bold;\">Puente De Génave</span>"}
                },
    "arroyoDelOjanco": {
                    tooltip: {content : "<span style=\"font-weight:bold;\">Arroyo Del Ojanco</span>"}
                },
    "orcera": {
                    tooltip: {content : "<span style=\"font-weight:bold;\">Orcera</span>"}
                },
    "SeguraDeLaSierra": {
                    tooltip: {content : "<span style=\"font-weight:bold;\">Segura De La Sierra</span>"}
                },
    "beasDeSegura": {
                    tooltip: {content : "<span style=\"font-weight:bold;\">Beas De Segura</span>"}
                },
    "santiagoDePotones": {
                    tooltip: {content : "<span style=\"font-weight:bold;\">Santiago De Potones</span>"}
                },
    "villanuevaDelArzobispo": {
                    tooltip: {content : "<span style=\"font-weight:bold;\">Villanueva Del Arzobispo</span>"}
                },
    "sorihuelaDelGuadalimar": {
                    tooltip: {content : "<span style=\"font-weight:bold;\">Sorihuela Del Guadalimar</span>"}
                }



    },
     
    });
    
});

