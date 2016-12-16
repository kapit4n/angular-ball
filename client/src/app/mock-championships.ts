import { Championship } from './championship';
export const CHAMPIONSHIPS: Championship[] = [
  {
   id:1,
   name:'UEFA Champions League',
   src:'http://www.footballbootsdb.com/logos/leagues/2.png',
   teams:[
      {
         id:1,
         name:'FC Barcelona',
         src:'http://cdn.bleacherreport.net/images/team_logos/64x64/fc_barcelona.png',
         points:30
      },
      {
         id:2,
         name:'Real Madrid C.F.',
         src:'https://d1si3tbndbzwz9.cloudfront.net/soccer/team/44/small_logo.png',
         points:29
      },
      {
         id:2,
         name:'FC Bayern Munich',
         src:'http://cdn.bleacherreport.net/images/team_logos/64x64/fc_bayern_munich.png',
         points:20
      },
      {
         id:2,
         name:'Manchester City F.C.',
         src:'http://soccersurgery.net/wp-content/uploads/2016/06/manchester-city-new-hd-logo1-128x128.jpg',
         points:18
      }
   ]
},
{
   id:2,
   name:'UEFA Euro 2016',
   src:'http://www.aeropuertoinfo.com/wp-content/uploads/Logo-de-la-Eurocopa-2016.png',
   teams:[
      {
         id:1,
         name:'Portugal Portugal',
         src:'http://futhead.cursecdn.com/static/img/16/nations_large/38.png',
         points:30
      },
      {
         id:2,
         name:'Suecia',
         src:'http://mobilityweek.eu/fileadmin/repository/flags/128/Sweden.png',
         points:29
      },
      {
         id:2,
         name:'Alemania',
         src:'http://www.gifde.com/gif/otros/banderas-idiomas/aleman/bandera-alemania-046.png',
         points:20
      },
      {
         id:2,
         name:'Países Bajos',
         src:'http://www.fancyicons.com/free-icons/103/flags/png/256/netherlands_flag_256.png',
         points:18
      }
   ]
},
{
   id:3,
   name:'Copa Libertadores',
   src:'https://www.vflnet.com/infos/conmebol/competitions/copa_libertadores/copa_toyota_libertadores.png',
   teams:[
      {
         id:1,
         name:'Atlético Nacional',
         src:'http://cdn.sofifa.org/17/teams/101100.png',
         points:30
      },
      {
         id:2,
         name:'Independiente del Valle',
         src:'http://www.futbolecuador.com/imagenes/teams/shield-big/independiente-del-valle.png',
         points:29
      },
      {
         id:2,
         name:'São Paulo',
         src:'http://www.futbol24.com/upload/team/Brazil/Sao-Paulo-SP.png',
         points:20
      },
      {
         id:2,
         name:'Boca Juniors',
         src:'http://www.futbol24.com/upload/team/Argentina/Boca-Juniors.png',
         points:18
      }
   ]
}
];
