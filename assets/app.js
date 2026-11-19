// accent/diacritic-insensitive search key: "Málaga" -> "malaga", "Chaniá" -> "chania"
const deaccent=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'')
  .replace(/ø/g,'o').replace(/Ø/g,'O').replace(/ł/g,'l').replace(/Ł/g,'L')
  .replace(/đ/g,'d').replace(/Đ/g,'D').replace(/ß/g,'ss').replace(/æ/g,'ae').replace(/œ/g,'oe').toLowerCase();
CITY_DB.forEach(c=>{c._n=deaccent(c.n);});
const COUNTRY_CATS = {"overall":{"best":[{"n":"Bahamas","m":8.98,"f":100},{"n":"Togo","m":8.94,"f":99},{"n":"Cuba","m":8.9,"f":98},{"n":"Jamaica","m":8.76,"f":95},{"n":"France","m":8.72,"f":94},{"n":"Ghana","m":8.56,"f":91},{"n":"Benin","m":8.43,"f":88},{"n":"Burkina Faso","m":8.42,"f":88},{"n":"Algeria","m":8.27,"f":84},{"n":"Luxembourg","m":8.24,"f":84},{"n":"United Kingdom","m":8.19,"f":83},{"n":"Costa Rica","m":8.09,"f":80}],"worst":[{"n":"Timor-Leste","m":4.46,"f":0},{"n":"Suriname","m":4.62,"f":3},{"n":"Kenya","m":4.85,"f":9},{"n":"Eritrea","m":4.87,"f":9},{"n":"Uganda","m":5.14,"f":15},{"n":"Egypt","m":5.18,"f":16},{"n":"Tanzania","m":5.2,"f":16},{"n":"Ethiopia","m":5.27,"f":18},{"n":"Paraguay","m":5.35,"f":20},{"n":"Ukraine","m":5.41,"f":21},{"n":"Mozambique","m":5.43,"f":21},{"n":"eSwatini","m":5.43,"f":21}]},"career":{"best":[{"n":"Togo","m":3.15,"f":100},{"n":"Ghana","m":3,"f":94},{"n":"Benin","m":2.92,"f":91},{"n":"Burkina Faso","m":2.92,"f":91},{"n":"France","m":2.87,"f":89},{"n":"United Kingdom","m":2.87,"f":89},{"n":"Spain","m":2.78,"f":85},{"n":"Cambodia","m":2.77,"f":84},{"n":"Mali","m":2.75,"f":84},{"n":"Laos","m":2.73,"f":83},{"n":"Vietnam","m":2.71,"f":82},{"n":"Algeria","m":2.69,"f":81}],"worst":[{"n":"Cyprus","m":0.7,"f":0},{"n":"Israel","m":0.8,"f":4},{"n":"Palestine","m":0.82,"f":5},{"n":"N. Cyprus","m":0.85,"f":6},{"n":"eSwatini","m":0.91,"f":9},{"n":"Uganda","m":0.94,"f":10},{"n":"Malawi","m":0.95,"f":10},{"n":"Eritrea","m":0.96,"f":11},{"n":"Jordan","m":0.97,"f":11},{"n":"Tanzania","m":1.04,"f":14},{"n":"Lebanon","m":1.04,"f":14},{"n":"Burundi","m":1.05,"f":14}]},"friendship_family":{"best":[{"n":"Jamaica","m":2.82,"f":100},{"n":"Bahamas","m":2.58,"f":85},{"n":"Haiti","m":2.52,"f":81},{"n":"Cuba","m":2.5,"f":80},{"n":"Fiji","m":2.48,"f":78},{"n":"Qatar","m":2.46,"f":77},{"n":"Kuwait","m":2.4,"f":73},{"n":"Greece","m":2.38,"f":72},{"n":"Ecuador","m":2.37,"f":71},{"n":"Azerbaijan","m":2.35,"f":70},{"n":"Peru","m":2.34,"f":69},{"n":"Macedonia","m":2.33,"f":69}],"worst":[{"n":"Cyprus","m":1.27,"f":0},{"n":"Israel","m":1.29,"f":1},{"n":"Palestine","m":1.29,"f":1},{"n":"N. Cyprus","m":1.33,"f":4},{"n":"eSwatini","m":1.36,"f":6},{"n":"Lebanon","m":1.37,"f":6},{"n":"Jordan","m":1.37,"f":6},{"n":"Eritrea","m":1.37,"f":6},{"n":"Syria","m":1.41,"f":9},{"n":"Turkey","m":1.47,"f":13},{"n":"Kenya","m":1.48,"f":14},{"n":"Brazil","m":1.5,"f":15}]},"love_romance":{"best":[{"n":"Sri Lanka","m":2.72,"f":100},{"n":"India","m":2.59,"f":94},{"n":"Finland","m":2.59,"f":94},{"n":"Tajikistan","m":2.48,"f":89},{"n":"Estonia","m":2.48,"f":89},{"n":"Falkland Is.","m":2.47,"f":88},{"n":"Nepal","m":2.46,"f":87},{"n":"Moldova","m":2.43,"f":86},{"n":"Uzbekistan","m":2.37,"f":83},{"n":"Pakistan","m":2.33,"f":81},{"n":"Turkmenistan","m":2.31,"f":80},{"n":"Romania","m":2.29,"f":79}],"worst":[{"n":"Timor-Leste","m":0.7,"f":0},{"n":"Philippines","m":0.89,"f":10},{"n":"Suriname","m":1.02,"f":16},{"n":"Taiwan","m":1.05,"f":17},{"n":"Mongolia","m":1.1,"f":20},{"n":"Argentina","m":1.23,"f":27},{"n":"Chile","m":1.24,"f":27},{"n":"Bolivia","m":1.32,"f":31},{"n":"Kuwait","m":1.37,"f":33},{"n":"Paraguay","m":1.37,"f":33},{"n":"Armenia","m":1.4,"f":35},{"n":"Georgia","m":1.4,"f":35}]},"optimism_opportunity":{"best":[{"n":"Bahamas","m":3.13,"f":100},{"n":"Cuba","m":3.04,"f":94},{"n":"France","m":2.8,"f":79},{"n":"Jamaica","m":2.78,"f":79},{"n":"Costa Rica","m":2.63,"f":69},{"n":"United Kingdom","m":2.63,"f":69},{"n":"Namibia","m":2.6,"f":67},{"n":"Nicaragua","m":2.58,"f":66},{"n":"Cameroon","m":2.58,"f":66},{"n":"Eq. Guinea","m":2.58,"f":67},{"n":"Gabon","m":2.55,"f":64},{"n":"Algeria","m":2.53,"f":63}],"worst":[{"n":"Kenya","m":1.5,"f":0},{"n":"Timor-Leste","m":1.5,"f":0},{"n":"Israel","m":1.5,"f":0},{"n":"Lebanon","m":1.5,"f":0},{"n":"Palestine","m":1.5,"f":0},{"n":"Jordan","m":1.5,"f":0},{"n":"Syria","m":1.5,"f":0},{"n":"Belarus","m":1.5,"f":0},{"n":"Moldova","m":1.5,"f":0},{"n":"Eritrea","m":1.5,"f":0},{"n":"N. Cyprus","m":1.5,"f":0},{"n":"Cyprus","m":1.5,"f":0}]},"communication_language":{"best":[{"n":"Guatemala","m":1.89,"f":100},{"n":"Botswana","m":1.85,"f":92},{"n":"Papua New Guinea","m":1.84,"f":89},{"n":"Lesotho","m":1.84,"f":88},{"n":"Belize","m":1.84,"f":88},{"n":"Luxembourg","m":1.84,"f":88},{"n":"Belgium","m":1.84,"f":88},{"n":"Tunisia","m":1.82,"f":85},{"n":"Turkmenistan","m":1.82,"f":85},{"n":"Switzerland","m":1.8,"f":79},{"n":"Ireland","m":1.8,"f":79},{"n":"South Africa","m":1.79,"f":78}],"worst":[{"n":"Nepal","m":1.46,"f":0},{"n":"Kyrgyzstan","m":1.49,"f":7},{"n":"Tanzania","m":1.5,"f":10},{"n":"Kenya","m":1.5,"f":10},{"n":"Sudan","m":1.5,"f":10},{"n":"Timor-Leste","m":1.5,"f":10},{"n":"Uruguay","m":1.5,"f":10},{"n":"Panama","m":1.5,"f":10},{"n":"Guyana","m":1.5,"f":10},{"n":"Suriname","m":1.5,"f":10},{"n":"Eq. Guinea","m":1.5,"f":10},{"n":"Malawi","m":1.5,"f":10}]},"education":{"best":[{"n":"Cambodia","m":2.25,"f":100},{"n":"Congo","m":2.23,"f":98},{"n":"Laos","m":2.22,"f":96},{"n":"Namibia","m":2.21,"f":95},{"n":"Cameroon","m":2.21,"f":95},{"n":"Angola","m":2.19,"f":93},{"n":"Tunisia","m":2.17,"f":89},{"n":"Thailand","m":2.16,"f":88},{"n":"Vietnam","m":2.16,"f":89},{"n":"Gabon","m":2.12,"f":83},{"n":"South Korea","m":2.1,"f":80},{"n":"Peru","m":2.09,"f":78}],"worst":[{"n":"Tanzania","m":1.5,"f":0},{"n":"Kenya","m":1.5,"f":0},{"n":"Sudan","m":1.5,"f":0},{"n":"Timor-Leste","m":1.5,"f":0},{"n":"Guyana","m":1.5,"f":0},{"n":"Suriname","m":1.5,"f":0},{"n":"Malawi","m":1.5,"f":0},{"n":"Mozambique","m":1.5,"f":1},{"n":"Burundi","m":1.5,"f":0},{"n":"Israel","m":1.5,"f":0},{"n":"Lebanon","m":1.5,"f":0},{"n":"Palestine","m":1.5,"f":0}]},"culture_creativity":{"best":[{"n":"Romania","m":2.62,"f":100},{"n":"Israel","m":2.5,"f":90},{"n":"Jordan","m":2.5,"f":90},{"n":"N. Cyprus","m":2.49,"f":89},{"n":"Cyprus","m":2.49,"f":89},{"n":"Palestine","m":2.48,"f":88},{"n":"Poland","m":2.46,"f":86},{"n":"Moldova","m":2.46,"f":86},{"n":"Japan","m":2.45,"f":86},{"n":"Lebanon","m":2.4,"f":82},{"n":"Bulgaria","m":2.4,"f":81},{"n":"Somaliland","m":2.37,"f":79}],"worst":[{"n":"Timor-Leste","m":1.44,"f":0},{"n":"Czechia","m":1.44,"f":0},{"n":"Guinea-Bissau","m":1.5,"f":5},{"n":"Gambia","m":1.5,"f":5},{"n":"Austria","m":1.51,"f":6},{"n":"Cameroon","m":1.53,"f":8},{"n":"Bhutan","m":1.53,"f":8},{"n":"Congo","m":1.54,"f":8},{"n":"Ecuador","m":1.55,"f":9},{"n":"Solomon Is.","m":1.55,"f":9},{"n":"Gabon","m":1.56,"f":10},{"n":"Kenya","m":1.57,"f":11}]},"inspiration":{"best":[{"n":"Nepal","m":1.94,"f":100},{"n":"Taiwan","m":1.88,"f":88},{"n":"Netherlands","m":1.83,"f":79},{"n":"Philippines","m":1.83,"f":78},{"n":"Benin","m":1.8,"f":72},{"n":"Togo","m":1.8,"f":72},{"n":"Norway","m":1.79,"f":70},{"n":"Romania","m":1.79,"f":70},{"n":"Germany","m":1.79,"f":71},{"n":"Moldova","m":1.78,"f":70},{"n":"Luxembourg","m":1.78,"f":69},{"n":"Belgium","m":1.78,"f":69}],"worst":[{"n":"Vietnam","m":1.42,"f":0},{"n":"Cambodia","m":1.45,"f":5},{"n":"Mongolia","m":1.45,"f":5},{"n":"Laos","m":1.46,"f":8},{"n":"Chile","m":1.47,"f":9},{"n":"Thailand","m":1.48,"f":11},{"n":"Congo","m":1.49,"f":14},{"n":"Myanmar","m":1.49,"f":14},{"n":"W. Sahara","m":1.5,"f":15},{"n":"Colombia","m":1.5,"f":15},{"n":"El Salvador","m":1.5,"f":15},{"n":"Belize","m":1.5,"f":15}]},"resources_stability":{"best":[{"n":"Togo","m":1.82,"f":100},{"n":"Benin","m":1.77,"f":90},{"n":"Ghana","m":1.77,"f":89},{"n":"France","m":1.76,"f":87},{"n":"Burkina Faso","m":1.74,"f":84},{"n":"Algeria","m":1.72,"f":79},{"n":"United Kingdom","m":1.72,"f":80},{"n":"Luxembourg","m":1.7,"f":76},{"n":"Belgium","m":1.7,"f":76},{"n":"Netherlands","m":1.7,"f":76},{"n":"Spain","m":1.69,"f":74},{"n":"Mali","m":1.68,"f":70}],"worst":[{"n":"Trinidad and Tobago","m":1.35,"f":0},{"n":"Bolivia","m":1.37,"f":4},{"n":"Guyana","m":1.37,"f":5},{"n":"Argentina","m":1.39,"f":8},{"n":"Falkland Is.","m":1.39,"f":8},{"n":"Venezuela","m":1.39,"f":8},{"n":"Puerto Rico","m":1.39,"f":8},{"n":"Paraguay","m":1.39,"f":8},{"n":"Uruguay","m":1.43,"f":18},{"n":"Suriname","m":1.43,"f":18},{"n":"Brazil","m":1.46,"f":22},{"n":"Dominican Rep.","m":1.47,"f":25}]},"responsibility_focus":{"best":[{"n":"Malawi","m":3.55,"f":100},{"n":"Burundi","m":3.2,"f":90},{"n":"Rwanda","m":3.2,"f":90},{"n":"eSwatini","m":3.15,"f":89},{"n":"Timor-Leste","m":3,"f":85},{"n":"Zimbabwe","m":2.96,"f":83},{"n":"Uganda","m":2.9,"f":82},{"n":"Mozambique","m":2.8,"f":79},{"n":"Suriname","m":2.69,"f":76},{"n":"Tanzania","m":2.63,"f":74},{"n":"S. Sudan","m":2.59,"f":73},{"n":"Bolivia","m":2.55,"f":72}],"worst":[{"n":"W. Sahara","m":0,"f":0},{"n":"Haiti","m":0,"f":0},{"n":"Ecuador","m":0,"f":0},{"n":"Namibia","m":0,"f":0},{"n":"Senegal","m":0,"f":0},{"n":"Cameroon","m":0,"f":0},{"n":"Guinea","m":0,"f":0},{"n":"Guinea-Bissau","m":0,"f":0},{"n":"Liberia","m":0,"f":0},{"n":"Sierra Leone","m":0,"f":0},{"n":"Gabon","m":0,"f":0},{"n":"Eq. Guinea","m":0,"f":0}]},"excitement_instability":{"best":[{"n":"Qatar","m":4.38,"f":100},{"n":"Kuwait","m":4.08,"f":93},{"n":"Ukraine","m":3.77,"f":86},{"n":"Philippines","m":3.7,"f":85},{"n":"Jordan","m":3.69,"f":84},{"n":"United Arab Emirates","m":3.67,"f":84},{"n":"Iraq","m":3.6,"f":82},{"n":"Israel","m":3.57,"f":82},{"n":"Timor-Leste","m":3.56,"f":81},{"n":"Malawi","m":3.5,"f":80},{"n":"Cyprus","m":3.5,"f":80},{"n":"Tanzania","m":3.49,"f":80}],"worst":[{"n":"Puerto Rico","m":0,"f":0},{"n":"Tajikistan","m":0,"f":0},{"n":"Kyrgyzstan","m":0,"f":0},{"n":"Netherlands","m":0,"f":0},{"n":"Nepal","m":0.11,"f":3},{"n":"Switzerland","m":0.28,"f":6},{"n":"Venezuela","m":0.34,"f":8},{"n":"India","m":0.43,"f":10},{"n":"Italy","m":0.48,"f":11},{"n":"Chad","m":0.5,"f":11},{"n":"Central African Rep.","m":0.53,"f":12},{"n":"Panama","m":0.56,"f":13}]}};

// Top Ten for the sample chart, generated by computeTopTen() (the same routine used for any birth data).
const CITIES = [
  {"id":"g0","rank":1,"name":"Ipswich","cc":"GB","a":"England","lat":52.06,"lng":1.16,"generated":true,"place":"United Kingdom · England","head":"Sun conjunct MC","chips":["Sun MC · 23 km","Jupiter AC · 73 km","Mercury MC · 653 km"],"best":"Sun conjunct MC · Jupiter conjunct ASC · Saturn trine MC","text":"Ranked No. 1 of the 2,500 largest cities in the database by its corpus v1.2 score. The loudest contact is Sun conjunct MC (0.3°, dominant). The nearest line is your Sun MC at 23 km. A neutral line, more texture than blessing or burden."},
  {"id":"g1","rank":2,"name":"Montpellier","cc":"FR","a":"","lat":43.61,"lng":3.88,"generated":true,"place":"France","head":"Jupiter conjunct ASC","chips":["Jupiter AC · 101 km","Sun MC · 247 km","Saturn AC · 977 km"],"best":"Jupiter conjunct ASC · Sun conjunct MC · Moon trine IC","text":"Ranked No. 2 of the 2,500 largest cities in the database by its corpus v1.2 score. The loudest contact is Jupiter conjunct ASC (0.6°, dominant). The nearest line is your Jupiter AC at 101 km. A benefic line, and a genuine plus for living here."},
  {"id":"g2","rank":3,"name":"Kingston upon Hull","cc":"GB","a":"England","lat":53.74,"lng":-0.34,"generated":true,"place":"United Kingdom · England","head":"Jupiter conjunct ASC","chips":["Sun MC · 76 km","Jupiter AC · 122 km","Mercury MC · 530 km"],"best":"Jupiter conjunct ASC · Sun conjunct MC · Saturn trine MC","text":"Ranked No. 3 of the 2,500 largest cities in the database by its corpus v1.2 score. The loudest contact is Jupiter conjunct ASC (0.7°, dominant). The nearest line is your Sun MC at 76 km. A neutral line, more texture than blessing or burden."},
  {"id":"g3","rank":4,"name":"Nassau","cc":"BS","a":"","lat":25.06,"lng":-77.34,"generated":true,"place":"Bahamas","head":"Jupiter conjunct IC","chips":["Sun AC · 38 km","Jupiter IC · 76 km","Mercury AC · 886 km"],"best":"Jupiter conjunct IC · Sun conjunct ASC · Saturn trine ASC","text":"Ranked No. 4 of the 2,500 largest cities in the database by its corpus v1.2 score. The loudest contact is Jupiter conjunct IC (0.3°, dominant). The nearest line is your Sun AC at 38 km. A neutral line, more texture than blessing or burden."},
  {"id":"g4","rank":5,"name":"Paris","cc":"FR","a":"","lat":48.85,"lng":2.35,"generated":true,"place":"France","head":"Sun conjunct MC","chips":["Jupiter AC · 81 km","Sun MC · 112 km","Mercury MC · 786 km"],"best":"Sun conjunct MC · Jupiter conjunct ASC · Mars trine DSC","text":"Ranked No. 5 of the 2,500 largest cities in the database by its corpus v1.2 score. The loudest contact is Sun conjunct MC (1.4°, very strong). The nearest line is your Jupiter AC at 81 km. A benefic line, and a genuine plus for living here."},
  {"id":"g5","rank":6,"name":"Lille","cc":"FR","a":"","lat":50.63,"lng":3.06,"generated":true,"place":"France","head":"Sun conjunct MC","chips":["Jupiter AC · 19 km","Sun MC · 158 km","Saturn AC · 665 km"],"best":"Sun conjunct MC · Jupiter conjunct ASC · Moon trine IC","text":"Ranked No. 6 of the 2,500 largest cities in the database by its corpus v1.2 score. The loudest contact is Sun conjunct MC (2.1°, very strong). The nearest line is your Jupiter AC at 19 km. A benefic line, and a genuine plus for living here."},
  {"id":"g6","rank":7,"name":"Le Havre","cc":"FR","a":"","lat":49.49,"lng":0.11,"generated":true,"place":"France","head":"Sun conjunct MC","chips":["Sun MC · 51 km","Jupiter AC · 225 km","Mercury MC · 614 km"],"best":"Sun conjunct MC · Jupiter conjunct ASC · Saturn trine MC","text":"Ranked No. 7 of the 2,500 largest cities in the database by its corpus v1.2 score. The loudest contact is Sun conjunct MC (0.7°, dominant). The nearest line is your Sun MC at 51 km. A neutral line, more texture than blessing or burden."},
  {"id":"g7","rank":8,"name":"Las Tunas","cc":"CU","a":"","lat":20.96,"lng":-76.95,"generated":true,"place":"Cuba","head":"Jupiter conjunct IC","chips":["Jupiter IC · 38 km","Sun AC · 297 km","Mercury AC · 1,187 km"],"best":"Jupiter conjunct IC · Sun conjunct ASC · Moon trine DSC","text":"Ranked No. 8 of the 2,500 largest cities in the database by its corpus v1.2 score. The loudest contact is Jupiter conjunct IC (0.1°, dominant). The nearest line is your Jupiter IC at 38 km. A benefic line, and a genuine plus for living here."},
  {"id":"g8","rank":9,"name":"Aberdeen","cc":"GB","a":"Scotland","lat":57.14,"lng":-2.1,"generated":true,"place":"United Kingdom · Scotland","head":"Jupiter conjunct ASC","chips":["Jupiter AC · 119 km","Sun MC · 176 km","Mercury MC · 379 km"],"best":"Jupiter conjunct ASC · Sun conjunct MC · Mars trine DSC","text":"Ranked No. 9 of the 2,500 largest cities in the database by its corpus v1.2 score. The loudest contact is Jupiter conjunct ASC (1.2°, very strong). The nearest line is your Jupiter AC at 119 km. A benefic line, and a genuine plus for living here."},
  {"id":"g9","rank":10,"name":"Newcastle upon Tyne","cc":"GB","a":"England","lat":54.97,"lng":-1.61,"generated":true,"place":"United Kingdom · England","head":"Jupiter conjunct ASC","chips":["Sun MC · 155 km","Jupiter AC · 164 km","Mercury MC · 433 km"],"best":"Jupiter conjunct ASC · Sun conjunct MC · Saturn trine MC","text":"Ranked No. 10 of the 2,500 largest cities in the database by its corpus v1.2 score. The loudest contact is Jupiter conjunct ASC (0.9°, dominant). The nearest line is your Sun MC at 155 km. A neutral line, more texture than blessing or burden."}
];

// Full astrocartography engine: every planet's MC / IC / AC / DC line.
const EPH = {"gast": 280.45704, "planets": {"Sun": [281.27821, -23.03267], "Moon": [222.45232, -10.90064], "Mercury": [272.07425, -24.41915], "Venus": [239.89212, -18.44916], "Mars": [330.51749, -13.18256], "Jupiter": [23.86827, 8.59629], "Saturn": [38.76585, 12.61495], "Uranus": [317.47216, -17.0225], "Neptune": [305.43482, -19.21058], "Pluto": [251.41913, -11.39431]}, "obliquity": 23.43768, "ecl": {"Sun": [280.36874, 1.01943], "Moon": [223.32389, 12.02396], "Mercury": [271.88891, 1.55629], "Venus": [241.56523, 1.20904], "Mars": [327.9639, 0.77568], "Jupiter": [25.2542, 0.04075], "Saturn": [40.39612, -0.01994], "Uranus": [314.8061, 0.05035], "Neptune": [303.19544, 0.03557], "Pluto": [251.45474, 0.03515]}, "natal": {"asc": 24.01218, "mc": 279.49117, "houses": {"Sun": 10, "Moon": 7, "Mercury": 9, "Venus": 8, "Mars": 12, "Jupiter": 1, "Saturn": 1, "Uranus": 11, "Neptune": 11, "Pluto": 8}}};                 // { gast:deg, planets:{ Name:[ra,dec], ... } }
// Ecliptica planet colours (board 11): line = the planet's base step on the dark map, tag = 900 fill + 300 text.
const PMETA = {
  Sun:    {glyph:'☉', color:'#FCA608', tag:['#3F2001','#FFC67D'], cls:'light'},
  Moon:   {glyph:'☽', color:'#EEF1F4', tag:['#293137','#EEF1F4'], cls:'light'},
  Mercury:{glyph:'☿', color:'#B7C874', tag:['#262D00','#CEDC9C'], cls:'neutral'},
  Venus:  {glyph:'♀︎', color:'#F2A3C1', tag:['#431828','#FEBFD6'], cls:'benefic'},
  Mars:   {glyph:'♂︎', color:'#D4654E', tag:['#4D1100','#F5AD9D'], cls:'malefic'},
  Jupiter:{glyph:'♃', color:'#B2BFF0', tag:['#1C2256','#B2BFF0'], cls:'benefic'},
  Saturn: {glyph:'♄', color:'#93999E', tag:['#293137','#CFD3D6'], cls:'malefic'},
  Uranus: {glyph:'♅', color:'#80C8EE', tag:['#012D40','#A6DCF9'], cls:'malefic'},
  Neptune:{glyph:'♆', color:'#66D2CE', tag:['#00302F','#96E4E0'], cls:'malefic'},
  Pluto:  {glyph:'♇', color:'#C8A5F0', tag:['#321D47','#E4CEFE'], cls:'malefic'},
};

const ANGLES=['MC','IC','AC','DC'];

/* ---------- relocation chart engine ----------
   Planets keep their zodiacal positions; only the angles and house cusps
   move. Verified against pyswisseph to 0.0002 deg across a 12-city battery. */
const SIGNS=['Aries','Taurus','Gemini','Cancer','Leo','Virgo','Libra','Scorpio','Sagittarius','Capricorn','Aquarius','Pisces'];
const SIGN_GLYPH=['\u2648\ufe0e','\u2649\ufe0e','\u264a\ufe0e','\u264b\ufe0e','\u264c\ufe0e','\u264d\ufe0e','\u264e\ufe0e','\u264f\ufe0e','\u2650\ufe0e','\u2651\ufe0e','\u2652\ufe0e','\u2653\ufe0e'];
const ANGLE_KEYS=['ASC','MC','DC','IC'];
const RAD=Math.PI/180, DEG=180/Math.PI;
const norm360=x=>((x%360)+360)%360;
const wrap180=x=>{const v=norm360(x);return v>180?v-360:v;};
function signOf(l){return SIGNS[Math.floor(norm360(l)/30)];}
function degInSign(l){return norm360(l)%30;}
function fmtLon(l){const d=degInSign(l),deg=Math.floor(d),m=Math.round((d-deg)*60);return `${deg}\u00b0${String(m).padStart(2,'0')}\u2032 ${signOf(l)}`;}
function ramcAt(lng){return norm360(EPH.gast+lng);}
function eclFromRA(ra){const e=EPH.obliquity*RAD;return norm360(Math.atan2(Math.sin(ra*RAD)/Math.cos(e),Math.cos(ra*RAD))*DEG);}
function decFromEcl(lon){return Math.asin(Math.sin(lon*RAD)*Math.sin(EPH.obliquity*RAD))*DEG;}
function mcLonAt(lng){const H=ramcAt(lng)*RAD,e=EPH.obliquity*RAD;
  return norm360(Math.atan2(Math.sin(H),Math.cos(H)*Math.cos(e))*DEG);}
function ascLonAt(lat,lng){const H=ramcAt(lng)*RAD,e=EPH.obliquity*RAD,p=lat*RAD;
  return norm360(Math.atan2(Math.cos(H),-(Math.sin(H)*Math.cos(e)+Math.tan(p)*Math.sin(e)))*DEG);}
function semiArc(lon,lat){const c=-Math.tan(lat*RAD)*Math.tan(decFromEcl(lon)*RAD);
  if(c<-1||c>1)return null;return Math.acos(c)*DEG;}
// Each intermediate cusp sits where its hour angle is a fixed fraction of its
// own semi-arc — ra appears on both sides, so solve by fixed-point iteration.
function placidusCusp(house,ramc,lat){
  const P={11:[0,1/3],12:[0,2/3],2:[60,2/3],3:[120,1/3]}[house];
  const seed={11:30,12:60,2:120,3:150}[house];
  let ra=norm360(ramc+seed);
  for(let i=0;i<100;i++){
    const sa=semiArc(eclFromRA(ra),lat);
    if(sa===null)return null;
    const next=norm360(ramc+P[0]+P[1]*sa);
    if(Math.abs(wrap180(next-ra))<1e-10)return eclFromRA(next);
    ra=next;
  }
  return null;
}
function placidusCusps(lat,lng){
  const ramc=ramcAt(lng),asc=ascLonAt(lat,lng),mc=mcLonAt(lng);
  const c11=placidusCusp(11,ramc,lat),c12=placidusCusp(12,ramc,lat),
        c2=placidusCusp(2,ramc,lat),c3=placidusCusp(3,ramc,lat);
  if(c11===null||c12===null||c2===null||c3===null)return null;   // undefined at this latitude
  const c=new Array(12);
  c[0]=asc;c[1]=c2;c[2]=c3;c[3]=norm360(mc+180);
  c[4]=norm360(c11+180);c[5]=norm360(c12+180);
  c[6]=norm360(asc+180);c[7]=norm360(c2+180);c[8]=norm360(c3+180);
  c[9]=mc;c[10]=c11;c[11]=c12;
  return c;
}
function houseOfLon(lon,cusps){
  for(let i=0;i<12;i++){const a=cusps[i],b=cusps[(i+1)%12];
    if(a<b){if(lon>=a&&lon<b)return i+1;}else{if(lon>=a||lon<b)return i+1;}}
  return null;
}
// Sirius "Medieval Major" — Lilly's moieties. Pair orb = mean of the two.
const CHART_ORB={Sun:15,Moon:12,Mercury:7,Venus:7,Mars:8,Jupiter:9,Saturn:9,Uranus:5,Neptune:5,Pluto:5,ANGLE:5};
function allowedOrb(a,b){return (CHART_ORB[a]+CHART_ORB[b])/2;}
const CHART_ASPECTS=[{name:'Conjunct',angle:0},{name:'Sextile',angle:60},{name:'Square',angle:90},
                     {name:'Trine',angle:120},{name:'Opposite',angle:180}];
function separation(a,b){const d=Math.abs(norm360(a)-norm360(b))%360;return d>180?360-d:d;}
function relocatedChart(lat,lng){
  const cusps=placidusCusps(lat,lng);
  const asc=ascLonAt(lat,lng),mc=mcLonAt(lng);
  const angles={ASC:asc,MC:mc,DC:norm360(asc+180),IC:norm360(mc+180)};
  const planets=Object.keys(EPH.ecl).map(n=>({
    name:n,lon:EPH.ecl[n][0],rx:EPH.ecl[n][1]<0,
    house:cusps?houseOfLon(EPH.ecl[n][0],cusps):null,
    natalHouse:EPH.natal.houses[n]
  }));
  // A planet close to a cusp is read differently by different astrologers — flag it
  // rather than pretend the strict boundary settles the matter.
  if(cusps)planets.forEach(p=>{
    const h=p.house,next=(h%12)+1;
    const toNext=norm360(cusps[next-1]-p.lon), fromOwn=norm360(p.lon-cusps[h-1]);
    p.onCusp = toNext<=CUSP_ORB ? {d:toNext,dir:'short of',cusp:next}
             : fromOwn<=CUSP_ORB ? {d:fromOwn,dir:'past',cusp:h}
             : null;
  });
  // angular: conjunct any angle within the derived orb
  const angular=[];
  planets.forEach(p=>{
    ANGLE_KEYS.forEach(k=>{
      const s=separation(p.lon,angles[k]),allow=allowedOrb(p.name,'ANGLE');
      if(s<=allow)angular.push({planet:p.name,angle:k,orb:s,allow,frac:s/allow});
    });
  });
  angular.sort((a,b)=>a.frac-b.frac);
  // aspects to the angles: ASC and MC only (DC/IC would duplicate every hit).
  // Conjunctions AND oppositions are excluded — an opposition to the MC is a
  // conjunction to the IC, which `angular` already reports under its own name.
  const angleAspects=[];
  planets.forEach(p=>{
    ['ASC','MC'].forEach(k=>{
      const s=separation(p.lon,angles[k]),allow=allowedOrb(p.name,'ANGLE');
      CHART_ASPECTS.forEach(a=>{
        if(a.angle===0||a.angle===180)return;
        const o=Math.abs(s-a.angle);
        if(o<=allow)angleAspects.push({planet:p.name,aspect:a.name,angle:k,orb:o,allow});
      });
    });
  });
  angleAspects.sort((a,b)=>a.orb-b.orb);
  // natal planet-to-planet: location-invariant
  const natal=[];
  for(let i=0;i<planets.length;i++)for(let j=i+1;j<planets.length;j++){
    const A=planets[i],B=planets[j],s=separation(A.lon,B.lon),allow=allowedOrb(A.name,B.name);
    CHART_ASPECTS.forEach(a=>{
      const o=Math.abs(s-a.angle);
      if(o<=allow)natal.push({a:A.name,aspect:a.name,b:B.name,orb:o,allow});
    });
  }
  natal.sort((a,b)=>a.orb-b.orb);
  const shifts=cusps?planets.filter(p=>p.house!==p.natalHouse):[];
  // three or more planets in one house is a stellium — the loudest thing a
  // relocation can do to a house, and worth naming rather than leaving implied.
  const byH={};
  if(cusps)planets.forEach(p=>{(byH[p.house]=byH[p.house]||[]).push(p.name);});
  const stelliums=Object.keys(byH).filter(h=>byH[h].length>=3)
    .map(h=>({house:+h,planets:byH[h]})).sort((a,b)=>b.planets.length-a.planets.length);
  return {cusps,angles,planets,angular,angleAspects,natal,shifts,stelliums,undefinedHouses:!cusps};
}
/* ---------- Relocation Astrology Interpretation Corpus v1.2 ----------
   Scoring engine, encoded from claude/Relocation_Astrology_Interpretation_Corpus_v1.2.md.
   Every place is scored from its relocated chart: each planet is matched to exactly one
   Angle Aspects record per axis (conjunct ASC/DSC/MC/IC, square either axis, or a trine
   position — a sextile counts as a trine to the opposite angle), weighted by orb band. */
const CORPUS_VERSION='1.2';
const C_PLANETS=['Sun','Moon','Mercury','Venus','Mars','Jupiter','Saturn','Uranus','Neptune','Pluto'];
const FIELD_KEY={'Career':'career','Friendship & Family':'friendship_family','Love & Romance':'love_romance',
  'Optimism & Opportunity':'optimism_opportunity','Communication & Language':'communication_language',
  'Education':'education','Culture & Creativity':'culture_creativity','Inspiration':'inspiration',
  'Resources & Stability':'resources_stability','Responsibility & Focus':'responsibility_focus',
  'Excitement & Instability':'excitement_instability'};
const FIT_KEYS=['career','friendship_family','love_romance','optimism_opportunity','communication_language',
  'education','culture_creativity','inspiration','resources_stability'];
const ACT_KEYS=['responsibility_focus','excitement_instability'];
// Score Model sheet:  base  ASC   DSC   MC    IC    square  trine/sextile base
const SCORE_MODEL={
  Sun:    [1.6, 0.4, 0.0, 0.6,-0.2, 0.8,2.2], Moon:   [0.6, 0.2, 0.2, 0.0, 0.6,-0.2,1.2],
  Mercury:[0.6, 0.2, 0.2, 0.4, 0.0,-0.2,1.2], Venus:  [1.6, 0.4, 0.6, 0.2, 0.4, 0.8,2.2],
  Mars:   [0.1, 0.4,-0.6, 0.4,-0.4,-1.2,1.2], Jupiter:[1.6, 0.4, 0.2, 0.6, 0.2, 0.8,2.2],
  Saturn: [0.1,-0.4,-0.4, 0.4,-0.6,-1.2,1.2], Uranus: [0.3, 0.0,-0.6, 0.0,-0.6,-0.5,0.9],
  Neptune:[0.6,-0.4,-0.8,-0.2,-0.2,-0.2,1.2], Pluto:  [0.1,-0.2,-0.6, 0.2,-0.4,-1.2,1.2]};
const C_TRINE_WEIGHT=0.55, C_TRINE_MOD_SHARE=0.5, C_ANGLE_IDX={ASC:1,DSC:2,MC:3,IC:4};
// Scoring Guidance sheet
const C_ORB_BANDS=[[0,1,1.0,'dominant'],[1,3,0.85,'very strong'],[3,5,0.65,'strong'],[5,7,0.4,'moderate'],[7,10,0.2,'background']];
const C_MAX_ORB={Conjunction:10,Square:7,Trine:7};
const C_BASELINE=1.5, C_SCALE=0.5, C_LO=-2, C_HI=5;
const C_FIELD_SHARE=[1.0,0.7,0.5];        // v1.2 item 23
const C_ACT_PER_CONTACT=2.0;              // v1.2 item 24
const C_BEST_THRESHOLD=0.25, C_BEST_MAX=4, C_BEST_MIN=2;   // v1.2 item 25
const C_RANK={Conjunction:1.0,Square:0.75,Trine:0.5};     // synthesis rule 2: conjunctions, then squares, then trines; adjusted by orb
function cRound1(x){const s=x<0?-1:1;return s*Math.round(Math.abs(x)*10+1e-9)/10;}   // half away from zero, as the workbook rounds
function cOrbWeight(orb,aspect){if(orb>=C_MAX_ORB[aspect])return 0;for(const b of C_ORB_BANDS)if(orb>=b[0]&&orb<b[1])return b[2];return 0;}
function cBand(orb){for(const b of C_ORB_BANDS)if(orb>=b[0]&&orb<b[1])return b[3];return 'background';}
// field rule (item 8): angle field(s) first, then the planet's two core fields, capped at three
const C_CORE_FIELDS={Sun:['Optimism & Opportunity','Culture & Creativity'],Moon:['Friendship & Family','Inspiration'],
  Mercury:['Communication & Language','Education'],Venus:['Love & Romance','Culture & Creativity'],
  Mars:['Excitement & Instability','Career'],Jupiter:['Optimism & Opportunity','Education'],
  Saturn:['Responsibility & Focus','Career'],Uranus:['Excitement & Instability','Culture & Creativity'],
  Neptune:['Inspiration','Culture & Creativity'],Pluto:['Excitement & Instability','Responsibility & Focus']};
const C_ANGLE_FIELDS={ASC:[],DSC:['Love & Romance'],MC:['Career'],IC:['Friendship & Family'],
  'ASC/DSC':['Love & Romance'],'MC/IC':['Career','Friendship & Family']};
function cFieldsFor(p,angle,aspect){
  const out=[];
  const af=C_ANGLE_FIELDS[angle];
  af.forEach(f=>{if(!out.includes(f))out.push(f);});
  // v1.2 item 22: Resources & Stability on Saturn's MC/IC conjunction and trine records, after the angle field
  if(p==='Saturn'&&(angle==='MC'||angle==='IC')&&aspect!=='Square')out.push('Resources & Stability');
  C_CORE_FIELDS[p].forEach(f=>{if(!out.includes(f))out.push(f);});
  return out.slice(0,3);
}
function cImpact(p,angle,aspect){
  const m=SCORE_MODEL[p];
  if(aspect==='Square')return cRound1(m[5]);
  const mod=m[C_ANGLE_IDX[angle]];
  if(aspect==='Conjunction')return cRound1(m[0]+mod);
  return cRound1(C_TRINE_WEIGHT*m[6]+C_TRINE_MOD_SHARE*mod);
}
const C_RECORD_ORDER=[['ASC','Conjunction'],['DSC','Conjunction'],['MC','Conjunction'],['IC','Conjunction'],
  ['ASC/DSC','Square'],['MC/IC','Square'],['ASC','Trine'],['DSC','Trine'],['MC','Trine'],['IC','Trine']];
const C_AA={};
C_PLANETS.forEach(p=>C_RECORD_ORDER.forEach(([angle,aspect])=>{
  C_AA[`${p}-${angle}-${aspect}`]={planet:p,angle,aspect,impact:cImpact(p,angle,aspect),fields:cFieldsFor(p,angle,aspect)};
}));
// record texts (Angle Aspects core interpretation, built from the corpus's uniform templates)
const C_BEST={Sun:['act visibly and develop confidence','self-importance, overexposure or dependence on recognition'],
  Moon:['create familiarity, care and responsive connection','mood reactivity, dependency or difficulty separating comfort from truth'],
  Mercury:['learn, connect, negotiate and name experience clearly','distraction, nervous strain or excessive analysis'],
  Venus:['build rapport, enjoy life and cultivate beauty','avoidance, overspending or choosing agreement over honesty'],
  Mars:['initiate, defend priorities and build momentum','conflict, impatience, exhaustion or unnecessary urgency'],
  Jupiter:['expand horizons, take constructive risks and develop perspective','excess, inflated expectations or weak follow-through'],
  Saturn:['establish durable commitments and earn authority','isolation, inhibition, heaviness or living entirely through obligation'],
  Uranus:['experiment, individuate and escape stale patterns','instability, detachment or change pursued for its own sake'],
  Neptune:['create, empathize and perceive subtle dimensions of life','confusion, idealization, porous boundaries or avoidance'],
  Pluto:['confront buried material and reclaim agency','obsession, control struggles, isolation or compulsive entanglement']};
const C_ANGLE_TXT={ASC:['Ascendant','Descendant','identity, vitality, presentation and your immediate interface with the city','personally and visibly','how you enter situations and how the environment meets you'],
  DSC:['Descendant','Ascendant','partnership, clients, attraction, projection and open conflict','through other people','the kinds of people and relational dynamics you repeatedly encounter'],
  MC:['Midheaven','Imum Coeli','career, reputation, direction, authority and public contribution','publicly and professionally','what the location asks you to become known for'],
  IC:['Imum Coeli','Midheaven','home, privacy, family patterns, rootedness and inner security','privately and domestically','how settled, exposed or internally anchored you feel']};
const C_AXIS_TXT={'ASC/DSC':['Ascendant–Descendant','the balance between self-direction and partnership'],
  'MC/IC':['Midheaven–Imum Coeli','the balance between public ambition and home life']};
function cRecordText(id){
  const r=C_AA[id],p=r.planet,[best,shadow]=C_BEST[p];
  const tail=`At its best, this contact helps you to ${best}; its shadow may appear as ${shadow}.`;
  if(r.aspect==='Conjunction'){const [nm,opp,area,exp,shape]=C_ANGLE_TXT[r.angle];
    return {core:`${p} conjunct the ${nm} (equivalently, opposite the ${opp}) fuses with and dominates ${area}. Its themes are experienced ${exp}, shaping ${shape}. The effect is difficult to compartmentalize and often becomes a defining feature of the relocation. ${tail}`,
      use:`Express ${p}’s function deliberately within ${area}.`,
      caution:'Do not confuse intensity with inevitability; weigh orb, the angle involved and natal context.'};}
  if(r.aspect==='Square'){const [axis,bal]=C_AXIS_TXT[r.angle];
    return {core:`${p} square the ${axis} axis pressurizes and mobilizes ${bal}. The planet is not on an angle; it presses on the axis from the side, so its themes tend to surface as recurring friction, prompts to act or competing demands rather than as a defining identity. The location can generate achievement and movement, but usually through tension that must be managed. ${tail}`,
      use:`Give ${p}’s function a defined outlet so it supports ${bal} instead of disrupting it.`,
      caution:'Do not read friction as failure; the tension is workable, and its weight scales with orb.'};}
  const [nm,opp,area]=C_ANGLE_TXT[r.angle];
  return {core:`${p} trine the ${nm} (and sextile the ${opp}) supports and facilitates ${area}. The planet is not on an angle; it sits in a supportive position, so its themes act as a background resource you can draw on rather than something that defines how the location meets you. The capacity is readily available, though it still requires use and may otherwise remain background potential. ${tail}`,
    use:`Use it on purpose: ${p}’s support for ${area} tends to stay latent unless you draw on it.`,
    caution:'Do not promise results from ease alone; a supportive contact still has to be used.'};
}
// Ascendant / Midheaven sign modules: best expression and watch-for
const C_ASC_BW={Aries:['speed, independence and decisive engagement','impatience, abrasiveness or acting before the environment is understood'],
  Taurus:['continuity, material grounding and a sustainable pace','inertia, possessiveness or remaining comfortable after growth has stopped'],
  Gemini:['networking, adaptability and rapid learning','fragmentation, nervous overload or shallow commitments'],
  Cancer:['belonging, caretaking and the creation of a secure base','defensiveness, mood-led decisions or retreat into familiarity'],
  Leo:['creative leadership, confidence and personal authorship','pride, theatrical conflict or dependence on recognition'],
  Virgo:['craft, organization and practical discernment','perfectionism, worry or reducing life to problems that need correction'],
  Libra:['partnership, mediation and graceful participation','indecision, excessive accommodation or prioritizing appearance over substance'],
  Scorpio:['focus, resilience and transformative self-possession','suspicion, control struggles or treating every encounter as consequential'],
  Sagittarius:['mobility, candor and expansion through experience','restlessness, overpromising or overlooking necessary details'],
  Capricorn:['structure, credibility and long-term construction','rigidity, isolation or believing belonging must always be earned'],
  Aquarius:['innovation, community and freedom from inherited roles','detachment, contrarianism or difficulty tolerating ordinary dependence'],
  Pisces:['empathy, creativity and intuitive responsiveness','confusion, weak boundaries or absorbing the atmosphere without discrimination']};
const C_MC_BW={Aries:['initiating projects, competitive drive and visible leadership in new ventures','burnout, clashes with authority or abandoning projects once the start-up phase ends'],
  Taurus:['reliable delivery, tangible results and a steadily accumulated reputation','career stagnation, undervaluing your work or staying in a secure role too long'],
  Gemini:['communication, teaching, media and versatile cross-functional roles','a scattered reputation, too many parallel commitments or credentials that never consolidate'],
  Cancer:['caring, protective or community-facing roles and work that builds a secure base for others','taking criticism personally, over-identifying with an employer or mood-driven career moves'],
  Leo:['creative authorship, leadership and work that carries your name','needing applause to stay motivated, ego clashes with superiors or style over delivery'],
  Virgo:['expertise, process improvement and quietly indispensable skill','being overlooked for promotion, perfectionism that slows output or settling into a permanent support role'],
  Libra:['collaboration, client work, design sense and diplomatic leadership','deferring career decisions to others, avoiding necessary conflict or image over results'],
  Scorpio:['specialist depth, strategy, research and work behind high-stakes decisions','power struggles with authority, secrecy that limits visibility or all-or-nothing career bets'],
  Sagittarius:['international, educational, publishing or advisory roles with room to grow','overcommitting, impatience with institutional detail or chasing the next opportunity before finishing this one'],
  Capricorn:['earned authority, management, credentials and long-term institution building','workaholism, rigid ambition or measuring self-worth entirely by status'],
  Aquarius:['innovation, technology, networks and roles that change how a field works','friction with hierarchies, detachment from career politics or difficulty committing to one path'],
  Pisces:['creative, healing or mission-driven work and intuitive leadership','an unclear professional identity, being taken advantage of or drifting without a defined role']};
const C_RULER={Aries:'Mars',Taurus:'Venus',Gemini:'Mercury',Cancer:'Moon',Leo:'Sun',Virgo:'Mercury',Libra:'Venus',
  Scorpio:'Mars / Pluto',Sagittarius:'Jupiter',Capricorn:'Saturn',Aquarius:'Saturn / Uranus',Pisces:'Jupiter / Neptune'};

function corpusContacts(asc,mc){
  const res=[];
  for(const p of C_PLANETS){
    const lon=EPH.ecl[p][0];
    for(const [key,near,far,axis] of [['ASC','ASC','DSC','ASC/DSC'],['MC','MC','IC','MC/IC']]){
      const d=separation(lon,key==='ASC'?asc:mc);            // 0..180 from ASC (or MC)
      let pick=null;
      for(const [o,a,s] of [[d,near,'Conjunction'],[180-d,far,'Conjunction'],[Math.abs(d-90),axis,'Square'],
                            [Math.abs(d-120),near,'Trine'],[Math.abs(d-60),far,'Trine']]){
        if(cOrbWeight(o,s)<=0)continue;
        if(!pick||o<pick[0])pick=[o,a,s];
      }
      if(!pick)continue;
      const [o,a,s]=pick,id=`${p}-${a}-${s}`,rec=C_AA[id],w=cOrbWeight(o,s);
      res.push({id,planet:p,angle:a,aspect:s,orb:o,band:cBand(o),weight:w,impact:rec.impact,
        contrib:rec.impact*w,fields:rec.fields,rank:C_RANK[s]*w});
    }
  }
  res.sort((x,y)=>y.rank-x.rank||x.orb-y.orb);
  return res;
}
const cClamp=v=>Math.max(C_LO,Math.min(C_HI,v));
// lite=true skips the contact list (used for the 30k-pixel heatmap)
function corpusAt(lat,lng){
  const asc=ascLonAt(lat,lng),mc=mcLonAt(lng);
  const cs=corpusContacts(asc,mc);
  let total=0;const fsum={},act={};
  FIT_KEYS.forEach(k=>fsum[k]=0);ACT_KEYS.forEach(k=>act[k]=0);
  for(const c of cs){
    total+=c.contrib;
    c.fields.forEach((f,i)=>{const k=FIELD_KEY[f];
      if(k in fsum)fsum[k]+=c.contrib*C_FIELD_SHARE[i];
      else act[k]+=C_ACT_PER_CONTACT*c.weight*C_FIELD_SHARE[i];});
  }
  const overall=cClamp(C_BASELINE+C_SCALE*total);
  const fields={};
  FIT_KEYS.forEach(k=>fields[k]=cClamp(C_BASELINE+C_SCALE*fsum[k]));
  ACT_KEYS.forEach(k=>fields[k]=Math.max(0,Math.min(C_HI,act[k])));
  const best=FIT_KEYS.filter(k=>fields[k]>=C_BASELINE+C_BEST_THRESHOLD-1e-9)
    .sort((a,b)=>fields[b]-fields[a]).slice(0,C_BEST_MAX);
  return {overall,score10:(overall-C_LO)/(C_HI-C_LO)*10,raw:total,fields,best,lowConf:best.length<C_BEST_MIN,
          contacts:cs,asc,mc,ascSign:signOf(asc),mcSign:signOf(mc)};
}
// value of one view key at a point: 'overall' is the 0–10 display; fit fields −2..+5; activation 0..5
function corpusValue(r,k){return k==='overall'?r.score10:r.fields[k];}
/* ---------- corpus v1.2: reading modules ----------
   Planets in Houses (120), Ascendant / Midheaven signs (24), Configurations (10), Livability
   Fields and Synthesis Rules, built from the corpus's own uniform templates and checked row by
   row against the v1.2 text edition. */
const C_NATURE={Sun:'identity, vitality and purposeful self-expression',Moon:'emotional security, habit and belonging',
  Mercury:'thought, language, movement and exchange',Venus:'attraction, pleasure, aesthetics and social harmony',
  Mars:'drive, competition, desire and decisive action',Jupiter:'growth, confidence, meaning and opportunity',
  Saturn:'structure, duty, limits and long-term mastery',Uranus:'freedom, innovation, disruption and reinvention',
  Neptune:'imagination, spirituality, sensitivity and dissolution',Pluto:'intensity, power, exposure and deep transformation'};
const C_HOUSE={
  1:['identity, body and personal initiative','The city is likely to feel immediate and personally consequential.','you are encouraged to embody this planet rather than encounter it only through circumstances',[]],
  2:['income, possessions, values and self-worth','Daily choices increasingly revolve around what is worth sustaining.','material decisions become a direct expression of personal priorities',['Resources & Stability']],
  3:['local movement, communication, siblings and everyday learning','The immediate environment becomes busier and more mentally engaging.','short trips, conversations and practical learning carry unusual weight',['Communication & Language']],
  4:['home, family, memory and emotional foundations','Private life becomes the psychological center of the relocation.','housing and belonging deserve as much attention as public opportunity',['Friendship & Family']],
  5:['creativity, pleasure, romance and self-expression','Life asks for more play, authorship and visible personal expression.','creative risk and enjoyment become essential rather than optional',['Love & Romance','Culture & Creativity']],
  6:['work routines, health, service and skill','The placement is felt through schedules, craft and bodily maintenance.','small repeated choices determine whether the location becomes supportive',['Resources & Stability','Responsibility & Focus']],
  7:['partnerships, clients and direct encounters','Other people become the primary mirror and delivery system for this planet.','clear agreements and conscious projection are especially important',['Love & Romance']],
  8:['shared resources, intimacy, crisis and psychological depth','The city draws attention to trust, dependency and consequential exchange.','financial and emotional entanglements require transparency',['Resources & Stability']],
  9:['travel, worldview, education and meaning','The location enlarges the need to understand life within a broader frame.','study, teaching and cross-cultural experience can reorganize direction',['Education','Optimism & Opportunity']],
  10:['career, reputation, authority and public contribution','This planet becomes highly visible through vocation and social role.','private needs must be integrated with public ambition',['Career']],
  11:['friendship, networks, audiences and future plans','Community and long-range aspirations become major engines of change.','the quality of alliances matters more than the number of contacts',['Friendship & Family']],
  12:['solitude, retreat, unconscious patterns and spiritual life','Much of the placement works privately or below the surface.','rest, reflection and psychological honesty prevent unconscious enactment',['Inspiration']]};
const ORD=n=>n+(n%100>=11&&n%100<=13?'th':n%10===1?'st':n%10===2?'nd':n%10===3?'rd':'th');
function cHouseModule(p,h){
  const [area,s1,s2,hf]=C_HOUSE[h],[best,shadow]=C_BEST[p];
  const fields=[];[...hf,...C_CORE_FIELDS[p]].forEach(f=>{if(!fields.includes(f))fields.push(f);});
  return {id:`${p}-H${h}`,planet:p,house:h,area,fields:fields.slice(0,3),
    core:`${p} in the ${ORD(h)} house brings ${C_NATURE[p]} into the sphere of ${area}. ${s1} At its best, the location supports your ability to ${best}, and ${s2}. The main caution is ${shadow}.`,
    use:`Use the placement to ${best} through concrete choices involving ${area}.`,
    watch:`Monitor ${shadow}, especially where it touches ${area}.`};
}
// Angle Aspects record metadata not carried by C_AA
const C_PRIORITY={Conjunction:'very high',Square:'high',Trine:'moderate'};
const C_MODE={Conjunction:'direct and concentrated',Square:'dynamic and friction-producing',Trine:'flowing and resourceful'};
function cEquiv(r){
  if(r.aspect==='Conjunction')return 'Opposition '+C_ANGLE_TXT[r.angle][1];
  if(r.aspect==='Square'){const [a,b]=C_AXIS_TXT[r.angle][0].split('–');return `Square ${a}; Square ${b}`;}
  return 'Sextile '+C_ANGLE_TXT[r.angle][1];
}
// Ascendant / Midheaven sign modules
const C_SIGN_STYLE={Aries:'a direct, energetic and self-starting',Taurus:'a steady, sensory and self-possessed',
  Gemini:'a curious, mobile and conversational',Cancer:'a protective, receptive and emotionally attuned',
  Leo:'a warm, expressive and visibly self-directed',Virgo:'an observant, useful and improvement-oriented',
  Libra:'a socially aware, diplomatic and aesthetically responsive',Scorpio:'an intense, private and psychologically perceptive',
  Sagittarius:'an open, exploratory and future-facing',Capricorn:'a contained, strategic and responsibility-conscious',
  Aquarius:'an independent, conceptual and socially unconventional',Pisces:'a sensitive, imaginative and porous'};
function cRulers(sg){return C_RULER[sg].split(' / ');}
function cAscText(sg){
  const [best,watch]=C_ASC_BW[sg],[t,m]=cRulers(sg);
  const rul=m?`The condition and house of ${t} (traditional ruler) and ${m} (modern ruler), the relocated chart rulers, determine whether this identity feels supported or strained; weight the traditional ruler first.`
             :`The condition and house of ${t}, the relocated chart ruler, determine whether this identity feels supported or strained.`;
  return `With ${sg} rising, you tend to meet this location in ${C_SIGN_STYLE[sg]} manner. Daily life rewards ${best}. Other people may experience you as more distinctly ${sg} here, even when that is not your usual self-description. The main developmental task is to inhabit the sign consciously while avoiding ${watch}. ${rul}`;
}
function cMcText(sg){
  const [best,watch]=C_MC_BW[sg],[t,m]=cRulers(sg);
  const ev=m?`Evaluate ${t} (traditional ruler) and ${m} (modern ruler), the rulers of the Midheaven,`:`Evaluate ${t}, the ruler of the Midheaven,`;
  return `${'AEIOU'.includes(sg[0])?'An':'A'} ${sg} Midheaven frames public life through ${C_SIGN_STYLE[sg]} style. Professional progress tends to come through ${best}. This does not prescribe a single occupation; it describes the qualities for which you may become visible and the approach authority figures are likely to reward. The principal risk is ${watch}. ${ev} for the concrete setting in which this public direction develops.`;
}
// Configurations sheet: weight, daily-life interpretation, synthesis instruction, caution
const C_CONFIG={
  'T-square':{w:'High',rank:8,life:'Daily life feels mobilized around a recurring problem that cannot be solved by choosing only one side. The apex planet becomes the pressure point and primary outlet. The location can be productive and decisive, but sustained tension requires pacing and conscious integration.',synth:'Identify the apex planet, its house and the empty leg. Give the apex priority in the portrait.',caution:'Do not describe the pattern as uniformly negative or predict constant crisis.'},
  'Grand Trine':{w:'Moderate to high',rank:5,life:'The location offers an unusually coherent circuit of talent, support or self-reinforcing experience. Life may feel more natural in the houses involved, although ease can reduce urgency and conceal undeveloped capacities.',synth:'Name the element and houses; explain what flows and what would activate it.',caution:'Do not promise success without effort.'},
  'Grand Cross':{w:'Very high',rank:10,life:'Multiple life areas demand simultaneous integration. The city can feel consequential, busy and structurally demanding, while also building endurance and multidimensional competence.',synth:'Describe the modalities and four houses; locate stabilizing trines or sextiles.',caution:'Avoid fatalistic language or implying that every area is equally difficult.'},
  'Yod':{w:'High but focused',rank:6,life:'Daily life repeatedly redirects attention toward the apex planet. The pattern can feel specialized, difficult to explain and subject to adjustments that accumulate into a distinct life direction.',synth:'Prioritize the apex house and identify what the sextile planets can supply.',caution:'Avoid calling it destiny; emphasize adaptation.'},
  'Kite':{w:'High',rank:7,life:'Natural capacities receive direction and productive tension. The opposition prevents the grand trine from remaining passive and often gives the location a clearer external purpose.',synth:'Explain the grand trine first, then the opposition and focal planet.',caution:'Do not ignore conflict because the overall geometry looks supportive.'},
  'Mystic Rectangle':{w:'Moderate to high',rank:4,life:'Opposing needs can be negotiated through available skills and relationships. The city may support sophisticated compromise, provided the person does not use harmony to avoid naming the real polarity.',synth:'Name both oppositions and the supportive pathways between them.',caution:'Do not portray the resolution as automatic.'},
  'Stellium':{w:'High',rank:7,life:'A narrow band of life becomes highly concentrated. The location can accelerate mastery and identity development in that area, while leaving other needs comparatively underattended.',synth:'Prioritize the shared house, then distinguish each planet’s role.',caution:'Avoid treating all stelliums as conjunctions without checking degrees.'},
  'Angular emphasis':{w:'High to dominant',rank:9,life:'The location externalizes the chart. Events, relationships and decisions feel immediate, and the person is more visible to the environment. The specific angles show whether this concentrates in identity, partnership, career or home.',synth:'Order planets by orb, then by conjunction/opposition before square, trine and sextile.',caution:'Do not average contradictory angular planets into a vague statement.'},
  'Locomotive':{w:'Moderate',rank:3,life:'Life develops through sustained forward momentum. The leading planet describes how the person enters situations and mobilizes the rest of the chart.',synth:'Identify the leading planet: the planet at the clockwise (diurnal-motion) end of the occupied span, bordering the empty third. Interpret it with its relocated house.',caution:'Use only when the chart shape is calculated reliably.'},
  'Bowl':{w:'Moderate',rank:3,life:'The location creates concentration, self-containment and a strong sense of what is present versus missing. The rim planets describe how the person engages the unoccupied half.',synth:'Interpret the occupied hemisphere and both rim planets.',caution:'Do not infer isolation solely from the pattern.'}};
// Livability Fields sheet: what each field measures
const C_MEASURES={career:'professional direction, visibility, reputation, achievement, leadership and productive contribution',
  friendship_family:'belonging, friendship networks, chosen family, domestic support and emotional rootedness',
  love_romance:'attraction, dating, partnership, affection, pleasure and relational availability',
  optimism_opportunity:'confidence, helpful openings, mobility, growth and a sense of future possibility',
  communication_language:'conversation, writing, learning languages, networking, commerce and intellectual exchange',
  education:'formal study, teaching, mentorship, research and sustained intellectual development',
  culture_creativity:'artistic production, cultural participation, aesthetics, performance and creative community',
  inspiration:'imagination, spirituality, intuition, symbolic perception and emotional permeability',
  resources_stability:'material stability, cost-of-living fit, income, shared resources and sustainable daily routines',
  responsibility_focus:'discipline, endurance, structure, accountability and the ability to consolidate a life',
  excitement_instability:'change, novelty, disruption, urgency, experimentation and unpredictability'};
const C_FIELD_CAUTION={career:'Do not equate pressure or visibility with satisfaction.',
  friendship_family:'Separate social popularity from genuine emotional security.',
  love_romance:'Pluto or Neptune can increase magnetism without increasing stability.',
  optimism_opportunity:'Avoid treating expansion as guaranteed material success.',
  communication_language:'High activity can also produce distraction or nervous overload.',
  education:'Distinguish disciplined education from restless information gathering.',
  culture_creativity:'Inspiration should be distinguished from consistent output.',
  inspiration:'A high score can accompany weak boundaries or impractical expectations.',
  resources_stability:'A supportive placement is not a financial forecast; check actual costs, taxes and income options separately.'};
const C_ELEMENT=['Fire','Earth','Air','Water'];
const C_MODALITY=['Cardinal','Fixed','Mutable'];
// Synthesis Rules sheet, verbatim (used to brief the generated portrait)
const C_SYNTH_RULES=[[1, "Start with lived experience", "Answer what an ordinary week feels like before introducing technical chart terminology."], [2, "Prioritize angularity", "Rank conjunctions to angles first, then squares, then trine positions. Adjust for orb. Oppositions are not ranked separately: a planet opposite one angle is conjunct the opposite angle."], [3, "Merge repetition", "When multiple factors support the same theme, write one stronger claim and cite the reinforcing factors internally."], [4, "Name contradictions", "Do not flatten mixed testimony. Explain how supportive and difficult factors may operate together."], [5, "Separate ease from benefit", "Saturn can be constructive without feeling easy; Neptune can feel beautiful without improving stability."], [6, "Separate activation from fit", "Excitement & Instability measures volatility. A high value does not automatically increase livability."], [7, "Preserve natal context", "Relocation changes emphasis and angles; it does not replace natal character or promise."], [8, "Use conditional language", "Prefer may, tends to and can. Avoid guaranteed events, diagnoses or deterministic predictions. Every module describes emphasis rather than a guaranteed event; angularity, rulership and aspects determine how strongly it is lived."], [9, "Interpret house emphasis concretely", "Translate houses into routines, relationships, housing, work, money and local behavior."], [10, "Synthesize rulers", "Ascendant and Midheaven readings must include their rulers' houses, conditions and major aspects."], [11, "Avoid repetition", "The Daily Life Portrait synthesizes; detailed modules explain. Do not restate the same paragraph in multiple sections."], [12, "Close with use and caution", "End major modules with a constructive expression and a proportionate watch point."], [13, "Respect uncertainty", "Lower confidence when birth time, coordinates, house cusps, aspect orb or symbol recognition is uncertain."], [14, "Keep severity proportional", "One difficult aspect should not outweigh a broadly supportive pattern unless it is extremely tight and angular."], [15, "Treat benefics critically", "Venus and Jupiter can correspond with excess, passivity, overspending or avoidance as well as support."], [16, "Treat malefics constructively", "Mars and Saturn can build courage, discipline and achievement as well as conflict or pressure."], [17, "Handle outer planets carefully", "Uranus, Neptune and Pluto near angles can be powerful but should not be described as inevitable catastrophe."], [18, "Validate best-suited fields", "Suggest two to four positive-fit fields that clear the best-suited threshold on Scoring Guidance, include confidence, and let the app compare them with its calculated model. If fewer than two clear it, say confidence is low. Report Responsibility & Focus and Excitement & Instability as activation levels, not as best-suited fields."], [19, "Validate the overall score", "Return a suggested score and concise rationale as an internal recommendation, not an oracle."], [20, "Protect readability", "One idea per paragraph. Explain astrological terminology when it materially helps the end user."]];

const PLANET_KW={
  Sun:'vitality and recognition', Moon:'emotional belonging and home-feeling',
  Mercury:'communication, ideas and quick thinking', Venus:'love, beauty and ease',
  Mars:'drive, heat and the risk of overwork', Jupiter:'luck, growth and expansion',
  Saturn:'discipline, weight and restriction', Uranus:'disruption and restless change',
  Neptune:'dream, inspiration and a fog to watch', Pluto:'intensity, power and transformation',
};
const ANGLE_KW={MC:'in your career and public image', IC:'in home, roots and private life',
  AC:'in your identity and how you show up', DC:'in relationships and partnership'};
const ANGLE_TYPE={MC:'solid',IC:'solid',AC:'dash',DC:'dash'};

const D2R=Math.PI/180;
function norm180(x){while(x>180)x-=360;while(x<-180)x+=360;return x;}
function mcLng(ra){return norm180(ra-EPH.gast);}
function lineLngAtLat(planet,angle,lat){
  const [ra,dec]=EPH.planets[planet];
  if(angle==='MC')return mcLng(ra);
  if(angle==='IC')return norm180(mcLng(ra)+180);
  const c=-Math.tan(lat*D2R)*Math.tan(dec*D2R);
  if(c<-1||c>1)return null;                     // circumpolar: no rising/setting line here
  const H0=Math.acos(c)/D2R;
  return angle==='AC'?norm180(ra-H0-EPH.gast):norm180(ra+H0-EPH.gast);
}
function lineSegments(planet,angle){                // polyline(s) for drawing
  if(angle==='MC'||angle==='IC'){
    const lng=lineLngAtLat(planet,angle,0);const c=[];for(let la=-82;la<=82;la+=2)c.push([lng,la]);return[c];
  }
  const segs=[];let cur=[];let prev=null;
  for(let la=-84;la<=84;la+=2){
    const lng=lineLngAtLat(planet,angle,la);
    if(lng===null){if(cur.length){segs.push(cur);cur=[];}prev=null;continue;}
    if(prev!==null&&Math.abs(lng-prev)>90){if(cur.length)segs.push(cur);cur=[];}
    cur.push([lng,la]);prev=lng;
  }
  if(cur.length)segs.push(cur);return segs;
}
function nearestLines(lat,lng){
  const out=[];
  for(const planet in EPH.planets)for(const angle of ANGLES){
    const L=lineLngAtLat(planet,angle,lat);if(L===null)continue;
    const km=Math.round(Math.abs(norm180(lng-L))*111.32*Math.cos(lat*D2R));
    out.push({planet,angle,km,cls:PMETA[planet].cls,color:PMETA[planet].color,glyph:PMETA[planet].glyph,
              key:planet+'|'+angle});
  }
  out.sort((a,b)=>a.km-b.km);return out;
}
// livability fields — the corpus v1.2 taxonomy (Livability Fields sheet). Nine fit fields share the
// −2..+5 scale with a 1.50 baseline; the two activation fields run 0..5 and are never "best suited".
const CATEGORIES={
  overall:{label:'Overall livability', kind:'overall', low:'Challenging', high:'Exceptional',
    sub:'Corpus v1.2 overall score, painted across the globe (0–10)',
    desc:'At every point your chart is re-angled for that place and each planet is matched to one corpus record per axis — on an angle, squaring it, or in a trine position — weighted by how tight the orb is. Overall = 1.5 + 0.5 × the summed contributions, shown on 0–10; 5.0 means no planet contacts an angle.'},
  career:{label:'Career', kind:'fit', low:'Struggle', high:'Thriving',
    sub:'Professional direction, visibility and reputation',
    desc:'Professional direction, visibility, reputation, achievement and leadership. Raised by MC emphasis and by the Sun, Jupiter, Saturn or Mars tied constructively to the Midheaven. Pressure and visibility are not the same as satisfaction.'},
  friendship_family:{label:'Friendship & Family', kind:'fit', low:'Isolating', high:'Deeply connected',
    sub:'Belonging, chosen family and emotional rootedness',
    desc:'Belonging, friendship networks, chosen family, domestic support and rootedness. Raised by the Moon, Venus or Jupiter on the IC. Social popularity and genuine emotional security are kept apart.'},
  love_romance:{label:'Love & Romance', kind:'fit', low:'Lonely', high:'Loving',
    sub:'Attraction, partnership and relational availability',
    desc:'Attraction, dating, partnership, affection and pleasure. Raised by Venus, the Moon or Jupiter on the Descendant. Pluto or Neptune here can add magnetism without adding stability.'},
  optimism_opportunity:{label:'Optimism & Opportunity', kind:'fit', low:'Stuck', high:'Flourishing',
    sub:'Confidence, openings and a sense of future possibility',
    desc:'Confidence, helpful openings, mobility and growth. Raised by an angular Jupiter or Sun and supportive Jupiter contacts. Expansion is not a promise of material success.'},
  communication_language:{label:'Communication & Language', kind:'fit', low:'Muffled', high:'Articulate',
    sub:'Conversation, languages, networking and exchange',
    desc:'Conversation, writing, learning languages, networking and commerce. Raised by an angular Mercury. High activity can also mean distraction or nervous overload.'},
  education:{label:'Education', kind:'fit', low:'Limiting', high:'Enlightening',
    sub:'Study, teaching, mentorship and research',
    desc:'Formal study, teaching, mentorship and sustained intellectual development. Raised by Mercury, Jupiter or Saturn on the angles. The corpus notes this overlaps Communication & Language.'},
  culture_creativity:{label:'Culture & Creativity', kind:'fit', low:'Sterile', high:'Vibrant',
    sub:'Artistic production, aesthetics and creative community',
    desc:'Artistic production, cultural participation, aesthetics and creative community. Raised by Venus, the Sun, Neptune and Uranus contacts. Inspiration is not the same as consistent output.'},
  inspiration:{label:'Inspiration', kind:'fit', low:'Flat', high:'Transcendent',
    sub:'Imagination, intuition and symbolic perception',
    desc:'Imagination, spirituality, intuition and emotional permeability. Raised by Neptune and the Moon on the angles. A high score can come with weak boundaries or impractical expectations.'},
  resources_stability:{label:'Resources & Stability', kind:'fit', low:'Precarious', high:'Secure',
    sub:'Material stability and sustainable routines (new in v1.2)',
    desc:'Material stability, cost-of-living fit, income and sustainable routines. In v1.2 it scores only from Saturn on, or trine, the MC or IC — so it moves in narrow bands and sits at the 1.50 baseline elsewhere. Saturn conjunct the IC lowers it. Not a financial forecast.'},
  responsibility_focus:{label:'Responsibility & Focus', kind:'act', low:'Light load', high:'Concentrated',
    sub:'Activation level — discipline, endurance and structure (0–5)',
    desc:'An activation level, not a fit score: how much discipline, accountability and structure the place concentrates. Driven by Saturn and Pluto contacts. Every contact counts by orb weight alone, so friction and flow raise it equally — higher is not easier.'},
  excitement_instability:{label:'Excitement & Instability', kind:'act', low:'Calm & stable', high:'Electric & volatile',
    sub:'Activation level — change, novelty and disruption (0–5)',
    desc:'An activation level, not a fit score: change, novelty, urgency and unpredictability. Driven by Mars, Uranus and Pluto contacts. Higher values mean more activation and should not be read as more livable.'},
};
const CAT_ORDER=['overall',...FIT_KEYS,...ACT_KEYS];
let zonesCat='overall';
// formatted value for a view key
function fmtCat(k,v){return CATEGORIES[k].kind==='overall'?v.toFixed(1):v.toFixed(2);}
// centred bar for overall / fit fields (deviation from the 1.50 baseline, which sits mid-scale),
// left-anchored bar for activation (0..5)
function barSpec(k,r){
  const kind=CATEGORIES[k].kind;
  if(kind==='act'){const v=r.fields[k];return{v,act:true,w:Math.min(v/C_HI,1)*100,pos:true};}
  const v=kind==='overall'?r.overall:r.fields[k],d=v-C_BASELINE;
  return{v:kind==='overall'?r.score10:v,act:false,w:Math.min(Math.abs(d)/(C_HI-C_BASELINE),1)*50,pos:d>=0,d};
}
// the angle contacts driving a score, strongest first
const C_ASPECT_WORD={Conjunction:'conjunct',Square:'square',Trine:'trine'};
function contactName(c){return `${c.planet} ${C_ASPECT_WORD[c.aspect]} ${c.angle}`;}
function signed(x,d){return (x>0?'+':x<0?'−':'')+Math.abs(x).toFixed(d==null?1:d);}

/* ---------- Ecliptica presentation helpers (board 13 components) ---------- */
const htm=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const slashes=s=>String(s).replace(/\s+·\s+/g,' / ');
const fmtKm=km=>Math.round(km).toLocaleString('en-US')+' km';
const pad2=n=>String(n).padStart(2,'0');
function fmtCoord(lat,lng){return `${Math.abs(lat).toFixed(2)}° ${lat>=0?'N':'S'} / ${Math.abs(lng).toFixed(2)}° ${lng>=0?'E':'W'}`;}
// Summary-callout content rule: items separated by commas, ending with a period.
function listSentence(s){
  let t=String(s).split(/\s+·\s+/).map(x=>x.trim()).filter(Boolean).join(', ').replace(/[.\s]+$/,'');
  return t?t.charAt(0).toUpperCase()+t.slice(1)+'.':'';
}
const ICON={
  plus:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true"><path d="M12 5 V19 M5 12 H19"></path></svg>',
  sliders:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M4 7 H14 M18 7 H20 M4 17 H6 M10 17 H20"></path><circle cx="16" cy="7" r="2"></circle><circle cx="8" cy="17" r="2"></circle></svg>',
  chevR:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M9 6 L15 12 L9 18"></path></svg>',
  check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="square" aria-hidden="true"><path d="M5 12.5 L10 17.5 L19 7"></path></svg>',
  close:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M6 6 L18 18 M18 6 L6 18"></path></svg>',
  chev:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M6 9 L12 15 L18 9"></path></svg>',
  expand:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 9 V4 H9 M15 4 H20 V9 M20 15 V20 H15 M9 20 H4 V15"></path></svg>'
};
function fitColor(d){return d>=0.25?'var(--a300)':d>-0.25?'var(--s400)':'var(--e400)';}
// Score badge (design board 13, section 08): six bands, each includes its lower bound.
// The score is compared after rounding to one decimal, so the tag always agrees with the number shown.
const SCORE_CUT={exceptional:8.5,strong:7.0,mixed:5.5,quiet:4.5,challenging:3.0};
const SCORE_TAG={'Exceptional':['var(--a900)','var(--a300)'],'Strong':['var(--i900)','var(--i300)'],'Mild / mixed':['var(--c900)','var(--c300)'],
  'Quiet':['var(--s800)','var(--s200)'],'Challenging':['var(--e800)','var(--e200)'],'Friction-heavy':['var(--e900)','var(--e300)']};
function round1(s10){return Math.round(s10*10)/10;}
function fmtScore(s10){return round1(s10).toFixed(1);}
function scoreLabel(s10){
  const v=round1(s10),K=SCORE_CUT;
  const lab=v>=K.exceptional?'Exceptional':v>=K.strong?'Strong':v>=K.mixed?'Mild / mixed':v>=K.quiet?'Quiet':v>=K.challenging?'Challenging':'Friction-heavy';
  return [lab,SCORE_TAG[lab][1]];
}
// S: tag alone. M: tag + mono number (list rows). L: tag + display number / 10 (cards).
function scoreTag(s10){const [lab]=scoreLabel(s10),[bg,fg]=SCORE_TAG[lab];return `<span class="tag" style="background:${bg};color:${fg}">${lab}</span>`;}
function scoreM(s10){return `<span class="scorem">${scoreTag(s10)}<span class="n">${fmtScore(s10)}</span></span>`;}
function scoreBox(s10){return `<span class="scorebox">${scoreTag(s10)}<span class="bignum">${fmtScore(s10)}<small> / 10</small></span></span>`;}
function ptag(planet,text){const m=PMETA[planet];return `<span class="ptag" style="background:${m.tag[0]};color:${m.tag[1]}"><span class="glyph">${m.glyph}</span>${text}</span>`;}
function lineTag(nl,short){return ptag(nl.planet,short?`${nl.angle} ${fmtKm(nl.km)}`:`${nl.planet} ${nl.angle} / ${fmtKm(nl.km)}`);}
function bestList(r){return r.best.map(k=>CATEGORIES[k].label);}
function bestText(r){return r.best.length?bestList(r).join(', ')+'.':'No field clears the 1.75 threshold here.';}
function angleDisp(a){return String(a).replace('/',' / ');}
function contactLabel(c){return `${c.planet} ${C_ASPECT_WORD[c.aspect]} ${angleDisp(c.angle)}`;}
function valClass(x){return x>0.004?'vpos':x<-0.004?'vneg':'vzero';}
function contactsBlock(r,n){
  const head=`<div class="sechead"><span>Angle contacts</span><span>Orb / impact</span></div>`;
  if(!r.contacts.length)return `<div class="sec">${head}<p class="small">No planet reaches an angle record within the corpus orbs here.</p></div>`;
  return `<div class="sec">${head}<div class="contacts">`+r.contacts.slice(0,n||5).map(c=>
    `<span>${contactLabel(c)}</span><span class="o">${c.orb.toFixed(1)}°</span><span class="v ${valClass(c.contrib)}">${signed(c.contrib,2)}</span>`).join('')+`</div></div>`;
}
// one bar row: fit fields grow from the 1.50 baseline (green above, red below); activation fills 0–5 in Ion
function fieldRow(k,r){
  const C=CATEGORIES[k];
  if(C.kind==='act'){const v=r.fields[k],w=Math.min(v/C_HI,1)*100,zero=v<0.005;
    return `<span>${C.label}</span><span class="track">${zero?'':`<i style="width:${w.toFixed(1)}%;background:var(--i300)"></i>`}</span><span class="val${zero?' base':''}">${v.toFixed(2)}</span>`;}
  const v=C.kind==='overall'?r.overall:r.fields[k],d=v-C_BASELINE,w=Math.min(Math.abs(d)/(C_HI-C_BASELINE),1)*100,flat=Math.abs(d)<0.005;
  const shown=C.kind==='overall'?r.score10.toFixed(1):v.toFixed(2);
  return `<span>${C.label}</span><span class="track">${flat?'':`<i style="width:${w.toFixed(1)}%;background:${d>=0?'var(--a600)':'var(--e500)'}"></i>`}</span>`+
    `<span class="val${flat?' base':d<0?' vneg':''}">${shown}</span>`;
}
function fieldRows(keys,r){return `<div class="fields">${keys.map(k=>fieldRow(k,r)).join('')}</div>`;}
function bestCallout(r){
  return `<div class="callout"><span class="label-s ${r.best.length?'pos':''}">Best suited${r.lowConf?' / low confidence':''}</span><b>${bestText(r)}</b></div>`;
}
function fieldsBlock(r){
  return `<div class="sec"><div class="sechead"><span>Livability fields</span><span>Baseline 1.50</span></div>${fieldRows(FIT_KEYS,r)}${bestCallout(r)}</div>`+
    `<div class="sec"><div class="sechead"><span>Activation</span><span>0–5 / not a fit score</span></div>${fieldRows(ACT_KEYS,r)}</div>`;
}
function catBreakdown(lat,lng,title,R){return fieldsBlock(R||corpusAt(lat,lng));}

/* ---------- birth data → ephemeris ----------
   The sample chart keeps its stored values (precomputed with the same routine below).
   Any other birth data is cast in the browser with Astronomy Engine: apparent geocentric
   positions, true ecliptic and equator of date, GAST — the same quantities EPH holds
   (checked against the stored chart to within 0.003°). */
const BIRTH_KEY='ecliptica:birth';
const DEFAULT_BIRTH={name:'Sample chart',date:'2000-01-01',time:'12:00',unknownTime:false,
  place:{n:'London',c:'GB',a:'England',lat:51.51,lng:-0.13},tz:'Europe/London'};
const EPH0=JSON.parse(JSON.stringify(EPH));
const CITIES0=CITIES.slice();
const COUNTRY_CATS0=JSON.parse(JSON.stringify(COUNTRY_CATS));
let BIRTH=DEFAULT_BIRTH, birthIsDefault=true, countryStatsDirty=false;
const TOP_POOL=2500;
const REGION_DN=(()=>{try{return new Intl.DisplayNames(['en'],{type:'region'});}catch(e){return null;}})();
function countryName(cc){if(!cc)return '';try{return (REGION_DN&&REGION_DN.of(cc))||cc;}catch(e){return cc;}}
function distKm(a,b){const p1=a.lat*RAD,p2=b.lat*RAD,dp=p2-p1,dl=(b.lng-a.lng)*RAD;
  const h=Math.sin(dp/2)**2+Math.cos(p1)*Math.cos(p2)*Math.sin(dl/2)**2;return 12742*Math.asin(Math.min(1,Math.sqrt(h)));}
const birthTime=b=>b.unknownTime?'12:00':b.time;
function sameChart(a,b){return a.date===b.date&&birthTime(a)===birthTime(b)&&a.tz===b.tz&&
  Math.abs(a.place.lat-b.place.lat)<1e-6&&Math.abs(a.place.lng-b.place.lng)<1e-6;}
function loadBirth(){
  try{const v=JSON.parse(window.localStorage.getItem(BIRTH_KEY));
    if(v&&/^\d{4}-\d{2}-\d{2}$/.test(v.date)&&v.place&&typeof v.place.lat==='number'&&typeof v.place.lng==='number'&&v.tz)return v;}catch(e){}
  return null;
}
function saveBirth(b){try{window.localStorage.setItem(BIRTH_KEY,JSON.stringify(b));}catch(e){}}
// minutes east of UTC for an IANA zone at an instant (historical DST comes from the browser's tz database)
function tzOffsetMin(tz,ms){
  const f=new Intl.DateTimeFormat('en-US',{timeZone:tz,hourCycle:'h23',year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'});
  const p={};f.formatToParts(new Date(ms)).forEach(x=>{p[x.type]=x.value;});
  const d=new Date(0);d.setUTCFullYear(+p.year,+p.month-1,+p.day);d.setUTCHours(+p.hour%24,+p.minute,+p.second,0);
  return Math.round((d.getTime()-ms)/60000);
}
function birthUTC(b){
  const [y,m,d]=b.date.split('-').map(Number),[hh,mm]=birthTime(b).split(':').map(Number);
  const L=new Date(0);L.setUTCFullYear(y,m-1,d);L.setUTCHours(hh,mm,0,0);const local=L.getTime();
  let off=tzOffsetMin(b.tz,local),utc=local-off*60000;
  off=tzOffsetMin(b.tz,utc);utc=local-off*60000;
  return {ms:utc,off};
}
function fmtOffset(min){const a=Math.abs(min);return `UTC${min<0?'−':'+'}${Math.floor(a/60)}${a%60?':'+pad2(a%60):''}`;}
const MONTHS=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
function fmtBirthDate(iso){const [y,m,d]=iso.split('-').map(Number);return `${d} ${MONTHS[m-1]} ${y}`;}
function computeEph(b){
  const A=window.Astronomy;if(!A)throw new Error('The ephemeris library did not load, so new birth data can’t be calculated right now.');
  const t=A.MakeTime(new Date(birthUTC(b).ms));
  const rotD=A.Rotation_EQJ_EQD(t),rotE=A.Rotation_EQJ_ECT(t);
  const lonAt=(body,tt)=>A.SphereFromVector(A.RotateVector(A.Rotation_EQJ_ECT(tt),A.GeoVector(body,tt,true))).lon;
  const out={gast:norm360(A.SiderealTime(t)*15),obliquity:Math.acos(A.Rotation_EQD_ECT(t).rot[2][2])*DEG,planets:{},ecl:{},natal:{houses:{}}};
  C_PLANETS.forEach(n=>{
    const body=A.Body[n],v=A.GeoVector(body,t,true);
    const eq=A.EquatorFromVector(A.RotateVector(rotD,v));
    out.planets[n]=[norm360(eq.ra*15),eq.dec];
    const lon=norm360(A.SphereFromVector(A.RotateVector(rotE,v)).lon);
    let sp=lonAt(body,t.AddDays(0.5))-lonAt(body,t.AddDays(-0.5));if(sp>180)sp-=360;if(sp<-180)sp+=360;
    out.ecl[n]=[lon,sp];                                   // [longitude, daily motion]: negative motion = retrograde
  });
  return out;
}
function setEph(src){
  EPH.gast=src.gast;EPH.obliquity=src.obliquity;EPH.planets=src.planets;EPH.ecl=src.ecl;
  if(src.natal&&src.natal.asc!=null){EPH.natal=src.natal;return;}
  const p=BIRTH.place,cusps=placidusCusps(p.lat,p.lng);              // natal angles and houses for the birth place
  EPH.natal={asc:ascLonAt(p.lat,p.lng),mc:mcLonAt(p.lng),houses:{}};
  C_PLANETS.forEach(n=>{EPH.natal.houses[n]=cusps?houseOfLon(EPH.ecl[n][0],cusps):null;});
}
// Top Ten for any other chart: the corpus score across the largest cities, one pick per 150 km
function computeTopTen(){
  const scored=CITY_DB.slice(0,TOP_POOL).map(c=>({c,s:corpusAt(c.lat,c.lng).score10})).sort((a,b)=>b.s-a.s);
  const picked=[];
  for(const x of scored){if(picked.some(p=>distKm(p.c,x.c)<150))continue;picked.push(x);if(picked.length===10)break;}
  return picked.map((x,i)=>{
    const c=x.c,r=corpusAt(c.lat,c.lng),nl=nearestLines(c.lat,c.lng),top=r.contacts[0],n0=nl[0];
    const why=r.contacts.filter(k=>k.contrib>0).slice(0,3).map(contactLabel);
    return {id:'g'+i,rank:i+1,name:c.n,cc:c.c,a:c.a||'',lat:c.lat,lng:c.lng,generated:true,
      place:[countryName(c.c),c.a].filter(Boolean).join(' · '),
      head:top?contactName(top):'No angle contacts',
      chips:nl.slice(0,3).map(l=>`${l.planet} ${l.angle} · ${fmtKm(l.km)}`),
      best:why.length?why.join(' · '):'Quiet angles',
      text:`Ranked No. ${i+1} of the ${TOP_POOL.toLocaleString('en-US')} largest cities in the database by its corpus v${CORPUS_VERSION} score. `+
        (top?`The loudest contact is ${contactName(top)} (${top.orb.toFixed(1)}°, ${top.band}). `:'')+
        `The nearest line is your ${n0.planet} ${n0.angle} at ${fmtKm(n0.km)}. `+
        (n0.cls==='benefic'?'A benefic line, and a genuine plus for living here.':n0.cls==='malefic'?'A harder line, which brings challenge as much as opportunity.':'A neutral line, more texture than blessing or burden.')};
  });
}
// Livability Zones country lists: mean of each field over every land pixel of a country.
// The per-country means are kept so that any mix of fields can be ranked (Categories drawer).
let countryMeans=null;
function ensureCountryMeans(){
  if(countryMeans)return countryMeans;
  const cw=600,chh=Math.round(cw*H/W);
  const cv=document.createElement('canvas');cv.width=cw;cv.height=chh;
  const ctx=cv.getContext('2d',{willReadFrequently:true});ctx.setTransform(cw/W,0,0,cw/W,0,0);
  const gp=d3.geoPath(projection,ctx),feats=LAND.features;
  feats.forEach((f,i)=>{const id=i+1;ctx.fillStyle=`rgb(${(id>>8)&255},${id&255},128)`;ctx.beginPath();gp(f);ctx.fill();});
  const px=ctx.getImageData(0,0,cw,chh).data,idAt=k=>px[k*4+3]===255&&px[k*4+2]===128?((px[k*4]<<8)|px[k*4+1]):0;
  const keys=CAT_ORDER,sum=feats.map(()=>keys.map(()=>0)),cnt=feats.map(()=>0);
  const add=(fi,r)=>{keys.forEach((k,j)=>{sum[fi][j]+=corpusValue(r,k);});cnt[fi]++;};
  for(let y=0;y<chh-1;y++)for(let x=0;x<cw-1;x++){
    const k=y*cw+x,id=idAt(k);if(!id||id>feats.length||idAt(k+1)!==id||idAt(k+cw)!==id)continue;   // skip blended edge pixels
    const inv=projection.invert([(x+0.5)*W/cw,(y+0.5)*H/chh]);if(!inv)continue;
    add(id-1,corpusAt(inv[1],inv[0]));
  }
  feats.forEach((f,i)=>{if(!cnt[i]){const c=d3.geoCentroid(f);if(isFinite(c[0]))add(i,corpusAt(c[1],c[0]));}});
  const rows=feats.map((f,i)=>({n:f.properties&&f.properties.name,v:cnt[i]?sum[i].map(s=>s/cnt[i]):null}))
    .filter(x=>x.n&&x.v&&x.n!=='Antarctica'&&x.n!=='Fr. S. Antarctic Lands');
  return countryMeans={keys:keys.slice(),rows};
}
function rankCountries(rows){
  const mn=Math.min(...rows.map(x=>x.m)),mx=Math.max(...rows.map(x=>x.m)),sp=(mx-mn)||1;
  rows.forEach(x=>{x.f=Math.round((x.m-mn)/sp*100);x.m=Math.round(x.m*100)/100;});
  return {best:rows.slice().sort((a,b)=>b.m-a.m).slice(0,12),worst:rows.slice().sort((a,b)=>a.m-b.m).slice(0,12)};
}
function computeCountryStats(){
  const M=ensureCountryMeans();
  M.keys.forEach((k,j)=>{COUNTRY_CATS[k]=rankCountries(M.rows.map(x=>({n:x.n,m:x.v[j]})));});
  countryStatsDirty=false;
}
function applyBirth(b){
  const def=sameChart(b,DEFAULT_BIRTH);
  const eph=def?null:computeEph(b);                      // throws before anything changes if it can't be cast
  BIRTH=b;birthIsDefault=def;countryMeans=null;
  setEph(def?JSON.parse(JSON.stringify(EPH0)):eph);
  CITIES.splice(0,CITIES.length,...(def?CITIES0:computeTopTen()));
  if(def){Object.keys(COUNTRY_CATS0).forEach(k=>{COUNTRY_CATS[k]=JSON.parse(JSON.stringify(COUNTRY_CATS0[k]));});countryStatsDirty=false;}
  else countryStatsDirty=true;
}
/* Birth profiles (boards 20, 20a): every profile is a full birth record; the active one is BIRTH.
   Stored as {active, list}. A single saved birth record from before profiles becomes the first profile. */
const PROFILES_KEY='ecliptica:profiles';
let PROFILES=[],ACTIVE_ID=null;
const newProfileId=()=>'p'+Date.now().toString(36)+Math.random().toString(36).slice(2,6);
const validBirth=v=>!!(v&&/^\d{4}-\d{2}-\d{2}$/.test(v.date)&&v.place&&typeof v.place.lat==='number'&&typeof v.place.lng==='number'&&v.tz);
function loadProfiles(){
  try{const v=JSON.parse(window.localStorage.getItem(PROFILES_KEY));
    if(v&&Array.isArray(v.list)){const list=v.list.filter(p=>p&&p.id&&validBirth(p));
      if(list.length)return {list,active:list.some(p=>p.id===v.active)?v.active:list[0].id};}}catch(e){}
  return null;
}
function saveProfiles(){try{window.localStorage.setItem(PROFILES_KEY,JSON.stringify({active:ACTIVE_ID,list:PROFILES}));}catch(e){}}
const activeProfile=()=>PROFILES.find(p=>p.id===ACTIVE_ID);
(function restoreBirth(){
  const stored=loadProfiles();
  if(stored){PROFILES=stored.list;ACTIVE_ID=stored.active;}
  else{const p=Object.assign({id:newProfileId()},JSON.parse(JSON.stringify(loadBirth()||DEFAULT_BIRTH)));PROFILES=[p];ACTIVE_ID=p.id;saveProfiles();}
  const a=activeProfile();
  if(sameChart(a,DEFAULT_BIRTH)){BIRTH=a;return;}
  try{applyBirth(a);}catch(e){BIRTH=Object.assign({},DEFAULT_BIRTH,{name:a.name||DEFAULT_BIRTH.name});}
})();


const svg=d3.select('svg.map');
const W=1000,H=548;
const projection=d3.geoNaturalEarth1().fitExtent([[8,8],[W-8,H-8]],{type:'Sphere'});
const path=d3.geoPath(projection);
const isPhone=()=>window.matchMedia('(max-width:640px)').matches;

const defs=svg.append('defs');
const vp=svg.append('g').attr('class','vp');
vp.append('path').attr('class','sphere').attr('d',path({type:'Sphere'}));
vp.append('path').attr('class','graticule').attr('d',path(d3.geoGraticule().step([30,30])()));

const rng=(s=>()=>((s=Math.sin(s)*99999)-Math.floor(s)))(7);
const starG=vp.append('g');
for(let i=0;i<160;i++){const x=rng()*W,y=rng()*H,r=rng()*.75+.3,tw=rng()>.8;
  starG.append('circle').attr('class','star'+(tw?' tw':'')).attr('cx',x).attr('cy',y).attr('r',r).attr('opacity',(rng()*.5+.2).toFixed(2));}

vp.append('g').selectAll('path').data(LAND.features).join('path').attr('class','country').attr('d',path);

// full ACG line set — MC / IC / AC / DC for all ten planets (40 lines). Solid = MC/IC, dashed = AC/DC.
const lineG=vp.append('g');
function drawLines(){
  lineG.selectAll('*').remove();
for(const planet in EPH.planets){
  const meta=PMETA[planet];
  for(const angle of ANGLES){
    const dash=ANGLE_TYPE[angle]==='dash';
    lineSegments(planet,angle).forEach(seg=>{
      lineG.append('path').attr('class','acgline '+meta.cls)
        .attr('data-planet',planet).attr('data-angle',angle).attr('data-key',planet+'|'+angle)
        .attr('d',path({type:'LineString',coordinates:seg}))
        .style('stroke',meta.color).style('stroke-dasharray',dash?'4 4':null);
    });
  }
  const xy=projection([lineLngAtLat(planet,'MC',0),84]);
  if(xy)lineG.append('text').attr('class','aglyph').attr('data-planet',planet)
    .attr('x',xy[0]).attr('y',xy[1]+6).attr('text-anchor','middle').style('fill',meta.color).text(meta.glyph);
}
}
drawLines();

// ---- markers: top ten (Ember 300), My List (Aurora 400), selected (Corona 400) ----
const MK={top:'#F5AD9D',mine:'#69D38E',sel:'#FCA608',void:'#08090D'};
function buildMarker(g,color){
  g.append('circle').attr('class','halo').attr('r',10).attr('fill',color).attr('opacity',.22);
  g.append('circle').attr('class','ring').attr('r',10).attr('stroke',MK.sel).attr('stroke-width',1.6);
  g.append('circle').attr('class','core').attr('r',4.5).attr('fill',color).attr('stroke',MK.void).attr('stroke-width',1.2);
}
function paintMarker(g,on,color){
  g.classed('sel',on);
  g.select('.halo').attr('r',on?17:10).attr('fill',on?MK.sel:color).attr('opacity',on?.16:.22);
  g.select('.core').attr('r',on?5:4.5).attr('fill',on?MK.sel:color);
}
// ---- Top Ten Best Countries (board 14c): overall livability heatmap, the ten countries outlined,
// the selected one filled, and its strongest city dotted ----
const ISO3={"Fiji":"FJI","Tanzania":"TZA","W. Sahara":"ESH","Canada":"CAN","United States of America":"USA","Kazakhstan":"KAZ","Uzbekistan":"UZB","Papua New Guinea":"PNG","Indonesia":"IDN","Argentina":"ARG","Chile":"CHL","Dem. Rep. Congo":"COD","Somalia":"SOM","Kenya":"KEN","Sudan":"SDN","Chad":"TCD","Haiti":"HTI","Dominican Rep.":"DOM","Russia":"RUS","Bahamas":"BHS","Falkland Is.":"FLK","Norway":"NOR","Greenland":"GRL","Fr. S. Antarctic Lands":"ATF","Timor-Leste":"TLS","South Africa":"ZAF","Lesotho":"LSO","Mexico":"MEX","Uruguay":"URY","Brazil":"BRA","Bolivia":"BOL","Peru":"PER","Colombia":"COL","Panama":"PAN","Costa Rica":"CRI","Nicaragua":"NIC","Honduras":"HND","El Salvador":"SLV","Guatemala":"GTM","Belize":"BLZ","Venezuela":"VEN","Guyana":"GUY","Suriname":"SUR","France":"FRA","Ecuador":"ECU","Puerto Rico":"PRI","Jamaica":"JAM","Cuba":"CUB","Zimbabwe":"ZWE","Botswana":"BWA","Namibia":"NAM","Senegal":"SEN","Mali":"MLI","Mauritania":"MRT","Benin":"BEN","Niger":"NER","Nigeria":"NGA","Cameroon":"CMR","Togo":"TGO","Ghana":"GHA","Côte d'Ivoire":"CIV","Guinea":"GIN","Guinea-Bissau":"GNB","Liberia":"LBR","Sierra Leone":"SLE","Burkina Faso":"BFA","Central African Rep.":"CAF","Congo":"COG","Gabon":"GAB","Eq. Guinea":"GNQ","Zambia":"ZMB","Malawi":"MWI","Mozambique":"MOZ","eSwatini":"SWZ","Angola":"AGO","Burundi":"BDI","Israel":"ISR","Lebanon":"LBN","Madagascar":"MDG","Palestine":"PSE","Gambia":"GMB","Tunisia":"TUN","Algeria":"DZA","Jordan":"JOR","United Arab Emirates":"ARE","Qatar":"QAT","Kuwait":"KWT","Iraq":"IRQ","Oman":"OMN","Vanuatu":"VUT","Cambodia":"KHM","Thailand":"THA","Laos":"LAO","Myanmar":"MMR","Vietnam":"VNM","North Korea":"PRK","South Korea":"KOR","Mongolia":"MNG","India":"IND","Bangladesh":"BGD","Bhutan":"BTN","Nepal":"NPL","Pakistan":"PAK","Afghanistan":"AFG","Tajikistan":"TJK","Kyrgyzstan":"KGZ","Turkmenistan":"TKM","Iran":"IRN","Syria":"SYR","Armenia":"ARM","Sweden":"SWE","Belarus":"BLR","Ukraine":"UKR","Poland":"POL","Austria":"AUT","Hungary":"HUN","Moldova":"MDA","Romania":"ROU","Lithuania":"LTU","Latvia":"LVA","Estonia":"EST","Germany":"DEU","Bulgaria":"BGR","Greece":"GRC","Turkey":"TUR","Albania":"ALB","Croatia":"HRV","Switzerland":"CHE","Luxembourg":"LUX","Belgium":"BEL","Netherlands":"NLD","Portugal":"PRT","Spain":"ESP","Ireland":"IRL","New Caledonia":"NCL","Solomon Is.":"SLB","New Zealand":"NZL","Australia":"AUS","Sri Lanka":"LKA","China":"CHN","Taiwan":"TWN","Italy":"ITA","Denmark":"DNK","United Kingdom":"GBR","Iceland":"ISL","Azerbaijan":"AZE","Georgia":"GEO","Philippines":"PHL","Malaysia":"MYS","Brunei":"BRN","Slovenia":"SVN","Finland":"FIN","Slovakia":"SVK","Czechia":"CZE","Eritrea":"ERI","Japan":"JPN","Paraguay":"PRY","Yemen":"YEM","Saudi Arabia":"SAU","Antarctica":"ATA","N. Cyprus":"","Cyprus":"CYP","Morocco":"MAR","Egypt":"EGY","Libya":"LBY","Ethiopia":"ETH","Djibouti":"DJI","Somaliland":"","Uganda":"UGA","Rwanda":"RWA","Bosnia and Herz.":"BIH","Macedonia":"MKD","Serbia":"SRB","Montenegro":"MNE","Kosovo":"XKX","Trinidad and Tobago":"TTO","S. Sudan":"SSD"};
const ISO2={"Fiji":"FJ","Tanzania":"TZ","W. Sahara":"EH","Canada":"CA","United States of America":"US","Kazakhstan":"KZ","Uzbekistan":"UZ","Papua New Guinea":"PG","Indonesia":"ID","Argentina":"AR","Chile":"CL","Dem. Rep. Congo":"CD","Somalia":"SO","Kenya":"KE","Sudan":"SD","Chad":"TD","Haiti":"HT","Dominican Rep.":"DO","Russia":"RU","Bahamas":"BS","Falkland Is.":"FK","Norway":"NO","Greenland":"GL","Fr. S. Antarctic Lands":"TF","Timor-Leste":"TL","South Africa":"ZA","Lesotho":"LS","Mexico":"MX","Uruguay":"UY","Brazil":"BR","Bolivia":"BO","Peru":"PE","Colombia":"CO","Panama":"PA","Costa Rica":"CR","Nicaragua":"NI","Honduras":"HN","El Salvador":"SV","Guatemala":"GT","Belize":"BZ","Venezuela":"VE","Guyana":"GY","Suriname":"SR","France":"FR","Ecuador":"EC","Puerto Rico":"PR","Jamaica":"JM","Cuba":"CU","Zimbabwe":"ZW","Botswana":"BW","Namibia":"NA","Senegal":"SN","Mali":"ML","Mauritania":"MR","Benin":"BJ","Niger":"NE","Nigeria":"NG","Cameroon":"CM","Togo":"TG","Ghana":"GH","Côte d'Ivoire":"CI","Guinea":"GN","Guinea-Bissau":"GW","Liberia":"LR","Sierra Leone":"SL","Burkina Faso":"BF","Central African Rep.":"CF","Congo":"CG","Gabon":"GA","Eq. Guinea":"GQ","Zambia":"ZM","Malawi":"MW","Mozambique":"MZ","eSwatini":"SZ","Angola":"AO","Burundi":"BI","Israel":"IL","Lebanon":"LB","Madagascar":"MG","Palestine":"PS","Gambia":"GM","Tunisia":"TN","Algeria":"DZ","Jordan":"JO","United Arab Emirates":"AE","Qatar":"QA","Kuwait":"KW","Iraq":"IQ","Oman":"OM","Vanuatu":"VU","Cambodia":"KH","Thailand":"TH","Laos":"LA","Myanmar":"MM","Vietnam":"VN","North Korea":"KP","South Korea":"KR","Mongolia":"MN","India":"IN","Bangladesh":"BD","Bhutan":"BT","Nepal":"NP","Pakistan":"PK","Afghanistan":"AF","Tajikistan":"TJ","Kyrgyzstan":"KG","Turkmenistan":"TM","Iran":"IR","Syria":"SY","Armenia":"AM","Sweden":"SE","Belarus":"BY","Ukraine":"UA","Poland":"PL","Austria":"AT","Hungary":"HU","Moldova":"MD","Romania":"RO","Lithuania":"LT","Latvia":"LV","Estonia":"EE","Germany":"DE","Bulgaria":"BG","Greece":"GR","Turkey":"TR","Albania":"AL","Croatia":"HR","Switzerland":"CH","Luxembourg":"LU","Belgium":"BE","Netherlands":"NL","Portugal":"PT","Spain":"ES","Ireland":"IE","New Caledonia":"NC","Solomon Is.":"SB","New Zealand":"NZ","Australia":"AU","Sri Lanka":"LK","China":"CN","Taiwan":"TW","Italy":"IT","Denmark":"DK","United Kingdom":"GB","Iceland":"IS","Azerbaijan":"AZ","Georgia":"GE","Philippines":"PH","Malaysia":"MY","Brunei":"BN","Slovenia":"SI","Finland":"FI","Slovakia":"SK","Czechia":"CZ","Eritrea":"ER","Japan":"JP","Paraguay":"PY","Yemen":"YE","Saudi Arabia":"SA","Antarctica":"AQ","Cyprus":"CY","Morocco":"MA","Egypt":"EG","Libya":"LY","Ethiopia":"ET","Djibouti":"DJ","Uganda":"UG","Rwanda":"RW","Bosnia and Herz.":"BA","Macedonia":"MK","Serbia":"RS","Montenegro":"ME","Kosovo":"XK","Trinidad and Tobago":"TT","S. Sudan":"SS"};   // for keeping a country's cities to its own (coarse outlines can take in a neighbour's)
// map and legend from boards 14 / 14t: every planet line, a Your-top-ten marker on each country's best city,
// the city shown in the card as the Selected marker, and its three nearest lines emphasised
const featuredLayer=vp.append('g');
const markersG=featuredLayer.append('g');
const clusterG=featuredLayer.append('g').attr('aria-hidden','true');
let TT=[],ttCityIdx=0;
const ttCityCache=new Map();
// board 14c pager: a country's strongest cities on the overall score (up to seven, as on the board), at least 100 km apart
const TT_CITY_MAX=7,TT_CITY_KM=100;
function topTenCountries(){
  if(countryStatsDirty)computeCountryStats();
  return COUNTRY_CATS.overall.best.slice(0,10).map((c,i)=>({rank:i+1,n:c.n,m:c.m,iso:ISO3[c.n]||''}));
}
function ttCities(name){
  if(ttCityCache.has(name))return ttCityCache.get(name);
  const all=citiesIn(name).map((c,i)=>{const r=corpusAt(c.lat,c.lng);return {c,r,v:r.score10,i};})
    .sort((a,b)=>b.v-a.v||a.i-b.i);          // ties keep the bigger city
  const out=[];
  for(const x of all){if(out.some(o=>distKm(o.c,x.c)<TT_CITY_KM))continue;out.push(x);if(out.length===TT_CITY_MAX)break;}
  ttCityCache.set(name,out);return out;
}
function ttBest(name){return ttCities(name)[0]||null;}
function ttCurrentCity(name){const L=ttCities(name);return L[Math.min(ttCityIdx,L.length-1)]||null;}
// one Your-top-ten marker per country, on its best city; the card's city is the Selected marker
// (when paging to another city in the country, that city gets its own Selected marker)
function ttMarkers(){
  const out=[];
  TT.forEach(c=>{const B=ttBest(c.n);if(B)out.push({key:c.n,rank:c.rank,country:c.n,B});});
  const c=TT.find(x=>x.n===currentFeatured),cur=c&&ttCurrentCity(c.n);
  if(cur){
    const m=out.find(o=>o.key===c.n);
    if(m&&m.B===cur)m.sel=true;else out.push({key:c.n+'|cur',rank:c.rank,country:c.n,B:cur,sel:true});
  }
  out.forEach(o=>{o._xy=projection([o.B.c.lng,o.B.c.lat]);});
  return out;
}
function ttTip(o){
  const nl=nearestLines(o.B.c.lat,o.B.c.lng)[0];
  showTip(`${o.rank}. ${o.B.c.n}`,`${fmtScore(o.B.r.score10)} / 10${nl?` / ${nl.planet} ${nl.angle} / ${fmtKm(nl.km)}`:''}`,o.B.c.lng,o.B.c.lat);
}
function paintTopTenSel(){
  const data=ttMarkers();
  markersG.selectAll('*').remove();
  const nodes=markersG.selectAll('g.mk').data(data,d=>d.key).join('g')
    .attr('class','mk city').attr('tabindex',0).attr('role','button')
    .attr('aria-label',d=>`${d.rank}. ${d.country}: ${d.B.c.n}, ${fmtScore(d.B.r.score10)}`);
  nodes.each(function(d){const g=d3.select(this);buildMarker(g,MK.top);paintMarker(g,!!d.sel,MK.top);});
  nodes.filter(d=>d.sel).raise();
  nodes.on('mouseenter',(e,d)=>ttTip(d)).on('mouseleave',hideTip)
    .on('focus',(e,d)=>ttTip(d)).on('blur',hideTip)
    .on('click',(e,d)=>{if(!d.sel)selectFeatured(d.country,true);})
    .on('keydown',(e,d)=>{if((e.key==='Enter'||e.key===' ')&&!d.sel){e.preventDefault();selectFeatured(d.country,true);}});
  rescaleMarkers();
}
// rank labels: markers that sit on top of each other share one label ("1–5"); the selected one is labelled in Corona
function rankText(ranks){
  ranks=[...new Set(ranks)].sort((a,b)=>a-b);
  const runs=[];ranks.forEach(r=>{const l=runs[runs.length-1];if(l&&r===l[1]+1)l[1]=r;else runs.push([r,r]);});
  return runs.map(([a,b])=>a===b?`${a}`:b===a+1?`${a}, ${b}`:`${a}–${b}`).join(', ');
}
function layoutClusters(k){
  const thr=22/k,groups=[];
  markersG.selectAll('g.mk').data().slice().sort((a,b)=>a.rank-b.rank).forEach(d=>{
    const g=groups.find(g=>g.items.some(o=>Math.hypot(o._xy[0]-d._xy[0],o._xy[1]-d._xy[1])<thr));
    if(g)g.items.push(d);else groups.push({items:[d]});
  });
  const lab=groups.map(g=>{
    const xs=g.items.map(o=>o._xy[0]),ys=g.items.map(o=>o._xy[1]);
    const sel=g.items.length===1&&g.items[0].sel;
    return {x:Math.max(...xs)+(sel?0:11/k),y:(sel?Math.min(...ys)-15/k:(Math.min(...ys)+Math.max(...ys))/2+4/k),
      t:rankText(g.items.map(o=>o.rank)),sel};
  });
  clusterG.selectAll('text').data(lab).join('text').attr('class','clab')
    .attr('x',d=>d.x).attr('y',d=>d.y).attr('text-anchor',d=>d.sel?'middle':'start')
    .attr('font-size',(d=>(d.sel?13:12)/k)).attr('stroke-width',3.5/k)
    .style('fill',d=>d.sel?MK.sel:null).text(d=>d.t);
}

const customLayer=vp.append('g').style('display','none');
const compareLayer=vp.append('g').style('display','none');

// livability zones — a heatmap of the corpus score, built lazily on first view
const zonesLayer=vp.append('g').style('display','none');
let zonesReady=false, zonesHi=null;
const LANDBYNAME={}; LAND.features.forEach(f=>{if(f.properties&&f.properties.name)LANDBYNAME[f.properties.name]=f;});
let flashedName=null;
function markZoneRows(){document.querySelectorAll('.zrow').forEach(r=>r.setAttribute('aria-pressed',String(r.getAttribute('data-name')===flashedName)));}
function flashCountry(name,tone){
  renderZones();
  const f=LANDBYNAME[name]; if(!f||!zonesHi)return;
  if(flashedName===name){clearFlash();return;}
  flashedName=name;
  const color=tone==='avoid'?'#B2BFF0':'#FCA608';
  zonesHi.attr('d',path(f)).attr('stroke',color).style('fill',color).style('fill-opacity',.18).style('display',null)
    .interrupt().style('opacity',0).transition().duration(280).style('opacity',1);
  markZoneRows();
}
function clearFlash(){flashedName=null;if(zonesHi)zonesHi.style('display','none');markZoneRows();}
let zonesImg=null;
function renderZones(){
  if(zonesReady)return;zonesReady=true;
  defs.append('clipPath').attr('id','earthclip').append('path').attr('d',path({type:'Sphere'}));
  zonesImg=zonesLayer.append('image').attr('x',0).attr('y',0).attr('width',W).attr('height',H)
    .attr('preserveAspectRatio','none').attr('clip-path','url(#earthclip)');
  zonesLayer.append('g').selectAll('path').data(LAND.features).join('path')
    .attr('d',path).attr('fill','none').attr('stroke','rgba(238,241,244,.22)').attr('stroke-width',.5).attr('stroke-linejoin','round').attr('vector-effect','non-scaling-stroke');
  zonesLayer.append('path').attr('d',path({type:'Sphere'})).attr('fill','none').attr('stroke','#2D3674').attr('vector-effect','non-scaling-stroke');
  zonesHi=zonesLayer.append('path').attr('class','zhi').attr('fill','none').attr('stroke-width',2.2)
    .attr('vector-effect','non-scaling-stroke').style('display','none');
  zonesImg.on('mousemove',function(e){
    const p=d3.pointer(e,svg.node()),pv=currentT.invert(p),inv=projection.invert(pv);
    if(!inv){hideTip();return;}
    const rp=projection(inv);
    if(!rp||Math.hypot(rp[0]-pv[0],rp[1]-pv[1])>1){hideTip();return;}
    const r=corpusAt(inv[1],inv[0]),s=zoneValue(r),C=zoneInfo();
    const top=r.contacts[0];
    showTip(C.label,`${fmtZone(s)}${C.kind==='overall'||C.kind==='mix'?' / 10':C.kind==='act'?' / 5':''}${top?' / '+contactLabel(top)+' '+top.orb.toFixed(1)+'°':''}`,inv[0],inv[1]);
  }).on('mouseleave',hideTip);
  paintZones();
}
// Ecliptica heat ramp (board 17): Deep Space → Ion 900 → Ion 700 → Corona 600 → Corona 400
const ZONE_STOPS=[[0,[18,27,33]],[.35,[28,34,86]],[.62,[63,75,148]],[.82,[173,107,3]],[1,[252,166,8]]];
// heat image of any per-point value, stretched over its own min–max
function heatURL(valueOf){
  const cw=240,ch=Math.round(cw*H/W),N=cw*ch;
  const cv=document.createElement('canvas');cv.width=cw;cv.height=ch;
  const g2=cv.getContext('2d');const img=g2.createImageData(cw,ch);const dat=img.data;
  const sc=new Float32Array(N),on=new Uint8Array(N);let mn=Infinity,mx=-Infinity;
  for(let j=0;j<ch;j++)for(let i=0;i<cw;i++){
    const k=j*cw+i,sx=(i+0.5)/cw*W,sy=(j+0.5)/ch*H,inv=projection.invert([sx,sy]);
    if(!inv||!isFinite(inv[0])||!isFinite(inv[1])||inv[0]<-180||inv[0]>180||inv[1]<-90||inv[1]>90){on[k]=0;continue;}
    on[k]=1;const s=valueOf(corpusAt(inv[1],inv[0]));sc[k]=s;if(s<mn)mn=s;if(s>mx)mx=s;
  }
  const span=(mx-mn)||1;
  function col(t){t=t<0?0:t>1?1:t;let i=1;while(i<ZONE_STOPS.length-1&&t>ZONE_STOPS[i][0])i++;
    const [t0,a]=ZONE_STOPS[i-1],[t1,b]=ZONE_STOPS[i],u=(t-t0)/((t1-t0)||1);
    return[a[0]+(b[0]-a[0])*u,a[1]+(b[1]-a[1])*u,a[2]+(b[2]-a[2])*u];}
  for(let k=0;k<N;k++){const idx=k*4;if(!on[k]){dat[idx+3]=0;continue;}
    const c=col((sc[k]-mn)/span);dat[idx]=c[0]|0;dat[idx+1]=c[1]|0;dat[idx+2]=c[2]|0;dat[idx+3]=240;}
  g2.putImageData(img,0,0);return cv.toDataURL();
}
function paintZones(){
  if(!zonesImg)return;
  const url=heatURL(zoneValue);
  zonesImg.attr('href',url).attr('xlink:href',url);
}

// ---- tooltip (placed through the live screen transform, so it works with zoom and phone cropping) ----
const tip=document.getElementById('tip'),tn=tip.querySelector('.tn'),tl=tip.querySelector('.tl');
let currentT=d3.zoomIdentity;
const mapcard=document.querySelector('.mapcard');
function showTip(name,sub,lng,lat){
  const xy=projection([lng,lat]),m=vp.node().getScreenCTM();if(!xy||!m)return;
  const box=mapcard.getBoundingClientRect();
  let x=m.a*xy[0]+m.c*xy[1]+m.e-box.left,y=m.b*xy[0]+m.d*xy[1]+m.f-box.top;
  tn.textContent=name;tl.textContent=sub;
  const half=Math.min(tip.offsetWidth/2+8,box.width/2);
  x=Math.max(half,Math.min(box.width-half,x));
  tip.style.left=x+'px';tip.style.top=Math.max(y,tip.offsetHeight+16)+'px';tip.style.opacity=1;
}
function hideTip(){tip.style.opacity=0;}

// ---- pan / zoom / fullscreen ----
function rescaleMarkers(){
  const k=currentT.k;
  markersG.selectAll('g.mk').attr('transform',d=>`translate(${d._xy}) scale(${1/k})`);
  customLayer.selectAll('g.mk').attr('transform',d=>`translate(${projection([d.lng,d.lat])}) scale(${1/k})`);
  compareLayer.selectAll('g.cmpm').attr('transform',d=>`translate(${projection([d.p.lng,d.p.lat])}) scale(${1/k})`);
  zonesLayer.selectAll('g.zpin').attr('transform',d=>`translate(${projection([d.lng,d.lat])}) scale(${1/k})`);
  layoutClusters(k);
}
const zoom=d3.zoom().scaleExtent([1,8]).translateExtent([[0,0],[W,H]]).extent([[0,0],[W,H]])
  .filter(e=>{if(e.type==='wheel')return mapcard.classList.contains('expanded');return !e.button;})
  .on('zoom',e=>{currentT=e.transform;vp.attr('transform',e.transform);hideTip();rescaleMarkers();});
svg.call(zoom).on('dblclick.zoom',null);
document.getElementById('zoomInBtn').onclick=()=>svg.transition().duration(200).call(zoom.scaleBy,1.6);
document.getElementById('zoomOutBtn').onclick=()=>svg.transition().duration(200).call(zoom.scaleBy,1/1.6);
document.getElementById('resetBtn').onclick=()=>svg.transition().duration(300).call(zoom.transform,d3.zoomIdentity);
const expandBtn=document.getElementById('expandBtn');
function setExpanded(on){
  mapcard.classList.toggle('expanded',on);
  document.body.classList.toggle('mapopen',on);
  expandBtn.innerHTML=on?ICON.close:ICON.expand;
  expandBtn.setAttribute('aria-label',on?'Close full screen':'Expand map');
  syncAspect();hideTip();
}
expandBtn.onclick=()=>setExpanded(!mapcard.classList.contains('expanded'));
// phones show a cropped, full-bleed map; larger screens show the whole projection
function syncAspect(){svg.attr('preserveAspectRatio',isPhone()&&!mapcard.classList.contains('expanded')?'xMidYMid slice':'xMidYMid meet');}

// ---- storage: the host's store when present, else this browser ----
const memStore={};
const hasStore=(typeof window!=='undefined'&&window.storage&&typeof window.storage.get==='function');
async function storeGet(k){
  try{if(hasStore){const r=await window.storage.get(k,false);if(r)return r.value;}}catch(e){}
  try{const v=window.localStorage.getItem(k);if(v!=null)return v;}catch(e){}
  return memStore[k]??null;
}
async function storeSet(k,v){
  memStore[k]=v;
  try{if(hasStore)await window.storage.set(k,v,false);}catch(e){}
  try{window.localStorage.setItem(k,v);}catch(e){}
}

// ---- Top Ten Best Countries list (board 14c) ----
const list=document.getElementById('list');
let currentFeatured=null;                 // the selected country's name
function buildFeatured(){
  TT=topTenCountries();ttCityCache.clear();
  if(currentFeatured&&!TT.some(c=>c.n===currentFeatured))currentFeatured=null;
  ttCityIdx=0;
  renderTopTenList();paintTopTenSel();
  rescaleMarkers();
}
function renderTopTenList(){
  list.innerHTML='';
  TT.forEach(c=>{
    const on=c.n===currentFeatured,li=document.createElement('li');
    li.innerHTML=`<button type="button" class="rrow" data-name="${htm(c.n)}"${on?' aria-current="true" aria-controls="ttDetail"':''} aria-expanded="${on}">`+
      `<span class="rk">${pad2(c.rank)}</span><span class="nm">${htm(c.n)}${c.iso?`<span class="cc">${c.iso}</span>`:''}</span>${scoreM(c.m)}</button>`;
    li.firstChild.addEventListener('click',()=>selectFeatured(on?null:c.n,true,c.n));
    list.appendChild(li);
    if(on){const d=document.createElement('li');d.className='cdetli';d.id='ttDetail';fillTopTenDetail(d,c);list.appendChild(d);}
  });
}
const CHEV_L='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M15 6 L9 12 L15 18"></path></svg>';
const CHEV_R='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M9 6 L15 12 L9 18"></path></svg>';
function ttPagerHTML(c,L,i){
  const n=L.length,prev=L[i-1],next=L[i+1];
  return `<nav class="ttpager" aria-label="Top cities in ${htm(c.n)}">`+
    `<button type="button" class="pgarrow" data-pg="prev" aria-label="${prev?`Previous city: ${htm(prev.c.n)}`:'Previous city'}"${prev?'':' aria-disabled="true"'}>${CHEV_L}</button>`+
    `<div class="dots">${L.map((x,k)=>`<button type="button" class="dot" data-pg="${k}" aria-label="${htm(x.c.n)}, city ${k+1} of ${n}"${k===i?' aria-current="true"':''}><span></span></button>`).join('')}</div>`+
    `<button type="button" class="pgarrow" data-pg="next" aria-label="${next?`Next city: ${htm(next.c.n)}`:'Next city'}"${next?'':' aria-disabled="true"'}>${CHEV_R}</button>`+
  `</nav>`;
}
function fillTopTenDetail(li,c,focusPg){
  const L=ttCities(c.n);
  if(!L.length){li.innerHTML=`<div class="cdet"><p class="small" style="margin:0;color:var(--s300)">No city in the atlas falls inside ${htm(c.n)}. The country scores ${fmtScore(c.m)} across all of its land.</p></div>`;return;}
  const i=Math.min(ttCityIdx,L.length-1),B=L[i],n=L.length;
  const entry={n:B.c.n,c:B.c.c,a:B.c.a||'',lat:B.c.lat,lng:B.c.lng},sk=savedKey(entry);
  const lead=i===0?`Strongest spot in ${c.n}.`:`${ORD(i+1)} strongest spot in ${c.n}.`;
  li.innerHTML=`<div class="cdet">
    <div class="cardtop"><span class="eyebrow">${n>1?`City ${i+1} of ${n}`:'Best city'}</span>${scoreBox(B.r.score10)}</div>
    <div class="namegrp"><h3>${htm(B.c.n)}</h3><span class="eyebrow">${htm([countryName(B.c.c),B.c.a].filter(Boolean).join(' / '))}</span></div>
    <p class="small" style="margin:0;color:var(--s300)">${htm(lead)} The country scores ${fmtScore(c.m)} across all of its land.</p>
    <div class="cdbtns">${sk?`<button type="button" class="btn ghost" data-act="view">${ICON.check}View in My List</button>`
      :`<button type="button" class="btn pos" data-act="add">${ICON.plus}Add to My List</button>`}<button type="button" class="btn ghost" data-act="chart">Relocation chart</button></div>
    ${n>1?ttPagerHTML(c,L,i):''}
  </div>`;
  li.querySelectorAll('[data-act]').forEach(x=>x.addEventListener('click',()=>{
    const a=x.getAttribute('data-act');
    if(a==='add'){addCity(entry);fillTopTenDetail(li,c);toast('Added to My List',`${entry.n} is saved with your other places.`);
      const v=li.querySelector('[data-act="view"]');if(v)v.focus();}
    else if(a==='view'){const k=savedKey(entry);setTab('custom');if(k)selectCustom(k,true);}
    else openChart(entry);
  }));
  const go=(k,pg)=>{if(k<0||k>=n||k===i)return;ttCityIdx=k;fillTopTenDetail(li,c,pg);paintTopTenSel();if(tab==='featured'){reEmphasise();renderLegend();}};
  li.querySelectorAll('[data-pg]').forEach(x=>x.addEventListener('click',()=>{
    const pg=x.getAttribute('data-pg');
    if(pg==='prev')go(i-1,'prev');else if(pg==='next')go(i+1,'next');else go(+pg,pg);
  }));
  const nav=li.querySelector('.ttpager');
  if(nav)nav.addEventListener('keydown',e=>{
    const k={ArrowLeft:i-1,ArrowRight:i+1,Home:0,End:n-1}[e.key];
    if(k==null)return;e.preventDefault();go(Math.max(0,Math.min(n-1,k)),String(Math.max(0,Math.min(n-1,k))));
  });
  if(focusPg!=null){const f=li.querySelector(`[data-pg="${focusPg}"]`);if(f)f.focus({preventScroll:true});}
}
function selectFeatured(name,fromUser,focusName){
  const next=name&&TT.some(c=>c.n===name)?name:null;
  if(next!==currentFeatured)ttCityIdx=0;
  currentFeatured=next;
  renderTopTenList();paintTopTenSel();
  if(tab==='featured'){reEmphasise();renderLegend();}
  if(fromUser){
    const f=focusName||currentFeatured,b=f&&[...list.querySelectorAll('.rrow')].find(x=>x.getAttribute('data-name')===f);
    if(b&&focusName)b.focus({preventScroll:true});
    const d=document.getElementById('ttDetail');if(d&&isPhone())d.scrollIntoView({block:'nearest',behavior:'smooth'});
  }
}
buildFeatured();
function emphasiseKeys(keys){
  const on=keys&&keys.size>0&&linesOn;
  const planets=new Set([...(keys||[])].map(k=>k.split('|')[0]));
  d3.selectAll('.acgline').each(function(){
    const k=this.getAttribute('data-key');
    d3.select(this).classed('hot',on&&keys.has(k)).classed('dim',on&&!keys.has(k));
  });
  d3.selectAll('.aglyph').each(function(){
    const p=this.getAttribute('data-planet');
    d3.select(this).classed('hot',on&&planets.has(p)).classed('dim',on&&!planets.has(p));
  });
}
function clearEmph(){d3.selectAll('.acgline,.aglyph').classed('hot',false).classed('dim',false);}
function highlightNearest(lat,lng,n){
  const keys=new Set(nearestLines(lat,lng).slice(0,n||3).map(x=>x.key));
  emphasiseKeys(keys);
}
function savedKey(entry){const k=keyOf(entry);return CUSTOM.some(x=>keyOf(x)===k)?k:null;}
function scrollCardIntoSheet(el){if(isPhone()&&el)el.scrollIntoView({block:'start',behavior:'smooth'});}
// ---- map layers: fixed defaults (all lines, line labels on, not benefic-only); the filter chips were removed ----
const linesOn=true,glyphsOn=true,beneficOnly=false;
function updateLines(){
  lineG.selectAll('.acgline').style('display',function(){
    if(!linesOn)return'none';
    if(beneficOnly&&!this.classList.contains('benefic'))return'none';
    return null;
  });
  lineG.selectAll('.aglyph').style('display',function(){
    if(!linesOn||!glyphsOn)return'none';
    if(beneficOnly&&PMETA[this.getAttribute('data-planet')].cls!=='benefic')return'none';
    return null;
  });
  reEmphasise();updateSheetSub();
}
function reEmphasise(){if(tab==='featured'){const c=TT.find(x=>x.n===currentFeatured),B=c&&ttCurrentCity(c.n);if(B)highlightNearest(B.c.lat,B.c.lng,3);else clearEmph();}else if(tab==='custom'&&currentCustom)selectCustom(currentCustom);else if(tab==='compare')renderCompare();else clearEmph();}

// ---- legend strip under the map: changes with the view ----
const legend=document.getElementById('legend');
const swl=(color,angle)=>`<span class="swl${ANGLE_TYPE[angle]==='dash'?' dash':''}" style="background:${color};color:${color}"></span>`;
function lgLines(nls){return nls.map(nl=>`<span class="lgk">${swl(nl.color,nl.angle)}<span>${nl.planet} ${nl.angle} <span class="km">${fmtKm(nl.km)}</span></span></span>`).join('');}
const lgDot=(color,label)=>`<span class="lgk"><span class="mdot" style="background:${color};box-shadow:0 0 0 4px ${color}38"></span>${label}</span>`;
function planetKey(){
  return `<span class="label-s">Planet lines</span>`+Object.entries(PMETA).map(([n,m])=>`<span class="lgk"><span class="swl" style="background:${m.color}"></span>${n}</span>`).join('')+
    `<span class="right"><span class="lgk"><span class="swl" style="background:var(--s300)"></span>MC / IC</span><span class="lgk"><span class="swl dash" style="color:var(--s300)"></span>AC / DC</span></span>`;
}
function renderLegend(){
  let H='';
  if(tab==='featured'){
    const c=TT.find(x=>x.n===currentFeatured),B=c&&ttCurrentCity(c.n);
    H=(B?`<span class="label-s">Nearest lines</span>${lgLines(nearestLines(B.c.lat,B.c.lng).slice(0,3))}`:'')+
      `<span class="right">${lgDot(MK.top,'Your top ten')}${lgDot(MK.sel,'Selected')}</span>`;
  }else if(tab==='custom'&&currentCustom){
    const c=CUSTOM.find(x=>keyOf(x)===currentCustom);
    if(c)H=`<span class="label-s">Nearest to ${htm(c.n)}</span>${lgLines(nearestLines(c.lat,c.lng).slice(0,4))}<span class="right">${lgDot(MK.mine,'My List')}${lgDot(MK.sel,'Selected')}</span>`;
  }else if(tab==='compare'&&cmpA&&cmpB){
    H=`<span class="label-s">Nearest lines</span><span class="lgk"><span class="slot sm a">A</span></span>${lgLines(nearestLines(cmpA.lat,cmpA.lng).slice(0,2))}`+
      `<span class="lgk"><span class="slot sm b">B</span></span>${lgLines(nearestLines(cmpB.lat,cmpB.lng).slice(0,2))}`;
  }else if(tab==='zones'){
    const C=zoneInfo();
    H=`<span class="label-s">${htm(C.label)} / ${C.range}</span>`+
      `<span class="lgk" style="flex:1 1 320px"><span>${htm(C.low)}</span><span class="gradbar"></span><span>${htm(C.high)}</span></span>`;
  }
  legend.innerHTML=H||planetKey();
}

/* ---------- My List ---------- */
const STORE_KEY='astro:mylist';
let CUSTOM=[];
let currentCustom=null;
const keyOf=c=>c.n+'|'+c.c+'|'+c.lat+','+c.lng;

function proximityWord(km){return km<=250?'right on':km<=600?'near':km<=1200?'within reach of':'well away from';}
function lineName(nl){return `${nl.planet} ${nl.angle}`;}
function lineInterp(nl){return `${PLANET_KW[nl.planet]} ${ANGLE_KW[nl.angle]}`;}

const customArea=document.getElementById('customArea');
const readC=document.getElementById('readC');

function renderCustomLayer(){
  const sel=customLayer.selectAll('g.mk').data(CUSTOM,keyOf);
  sel.exit().remove();
  const g=sel.enter().append('g').attr('class','mk ccity').attr('tabindex',0).attr('role','button');
  g.each(function(){buildMarker(d3.select(this),MK.mine);d3.select(this).append('text').attr('class','mklabel').attr('x',12).attr('dy',4);});
  const merged=g.merge(sel);
  merged.attr('aria-label',d=>`${d.n}, ${d.c}`);
  merged.select('.mklabel').text(d=>d.n);
  merged.each(function(d){paintMarker(d3.select(this),keyOf(d)===currentCustom,MK.mine);});
  merged.on('mouseenter',(e,d)=>{const nl=nearestLines(d.lat,d.lng)[0];showTip(d.n,`${lineName(nl)} / ${fmtKm(nl.km)}`,d.lng,d.lat);})
    .on('mouseleave',hideTip)
    .on('click',(e,d)=>selectCustom(keyOf(d),true))
    .on('focus',(e,d)=>{const nl=nearestLines(d.lat,d.lng)[0];showTip(d.n,`${lineName(nl)} / ${fmtKm(nl.km)}`,d.lng,d.lat);}).on('blur',hideTip)
    .on('keydown',(e,d)=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();selectCustom(keyOf(d),true);}});
  rescaleMarkers();
}
let clearArmed=null;
function renderCustomList(){
  const nc=document.getElementById('navCount');nc.textContent=CUSTOM.length;nc.hidden=!CUSTOM.length;
  if(!CUSTOM.length){
    customArea.innerHTML=`<article class="card emptyart"><span class="eyebrow">My List / 0</span><h3>Build a shortlist of places</h3>
      <p class="body dim">Search any city above to see the lines that run nearest to it and save it here. You can also add any of your Top Ten from its card.</p></article>`;
    readC.hidden=true;updateSheetSub();return;
  }
  const rows=CUSTOM.map(c=>{
    const nl=nearestLines(c.lat,c.lng)[0],k=keyOf(c),on=k===currentCustom;
    return `<li class="mrow"${on?' aria-current="true"':''} data-key="${htm(k)}">
      <button type="button" class="mpick" data-pick="${htm(k)}"><span class="dot"></span>
      <span class="nm">${htm(c.n)}<span class="cc">${htm(c.c)}</span></span>
      <span class="near" style="color:${nl.color}"><span class="glyph">${nl.glyph}</span> ${fmtKm(nl.km)}</span></button>
      <button type="button" class="rm" aria-label="Remove ${htm(c.n)}" data-rm="${htm(k)}">${ICON.close}</button></li>`;
  }).join('');
  customArea.innerHTML=`<div class="panel" style="gap:8px"><div class="listhead"><span class="eyebrow">My List / ${CUSTOM.length}</span>
    <button type="button" class="textlink" id="clearBtn">Clear list</button></div><ul class="rlist">${rows}</ul></div>`;
  customArea.querySelectorAll('.mpick').forEach(b=>b.addEventListener('click',()=>selectCustom(b.getAttribute('data-pick'),true)));
  customArea.querySelectorAll('.rm').forEach(btn=>btn.addEventListener('click',e=>{e.stopPropagation();removeCity(btn.getAttribute('data-rm'));}));
  const cb=document.getElementById('clearBtn');
  cb.addEventListener('click',()=>{
    if(clearArmed){clearTimeout(clearArmed);clearArmed=null;clearAll();return;}
    cb.textContent='Select again to clear all';clearArmed=setTimeout(()=>{clearArmed=null;if(cb.isConnected)cb.textContent='Clear list';},4000);
  });
  updateSheetSub();
}
function selectCustom(key,fromUser){
  currentCustom=key;
  const c=CUSTOM.find(x=>keyOf(x)===key);
  customLayer.selectAll('g.mk').each(function(d){paintMarker(d3.select(this),keyOf(d)===key,MK.mine);});
  customLayer.selectAll('g.mk').filter(d=>keyOf(d)===key).raise();
  document.querySelectorAll('.mrow').forEach(r=>{if(r.getAttribute('data-key')===key)r.setAttribute('aria-current','true');else r.removeAttribute('aria-current');});
  if(!c){readC.innerHTML='';readC.hidden=true;return;}
  const nl=nearestLines(c.lat,c.lng),top4=nl.slice(0,4),top=nl[0];
  const r=corpusAt(c.lat,c.lng);
  if(tab==='custom')emphasiseKeys(new Set(top4.map(x=>x.key)));
  const region=[regionName(c.c),fmtCoord(c.lat,c.lng).replace(' / ',', ')].filter(Boolean).join(' / ');
  readC.hidden=false;
  readC.innerHTML=`<div class="cardtop"><span class="eyebrow">Selected</span>${scoreBox(r.score10)}</div>
    <div class="namegrp"><h2 class="cityname">${htm(c.n)}</h2><span class="eyebrow">${htm(region)}</span></div>
    <div class="tags">${top4.map(x=>lineTag(x)).join('')}</div>
    <p class="body">${htm(c.n)} sits ${proximityWord(top.km)} your ${lineName(top)} line (${fmtKm(top.km)}): ${lineInterp(top)}. ${top.cls==='benefic'?'A benefic line, and a genuine plus for living here.':top.cls==='malefic'?'A harder line. It colours the place with challenge as much as opportunity.':'A neutral line, more texture than blessing or burden.'}</p>
    ${contactsBlock(r,5)}
    ${fieldsBlock(r)}
    <p class="small">The nearest lines are measured east to west at this latitude. The score and fields come from the relocated chart: each planet is matched to one corpus record per axis and weighted by orb, so a planet can count without a line running through town.</p>
    <div class="btnrow"><button type="button" class="btn ghost" id="custChart">Relocation chart</button><button type="button" class="btn ghost" id="custCmp">Compare</button></div>`;
  document.getElementById('custChart').onclick=()=>openChart(c);
  document.getElementById('custCmp').onclick=()=>{cmpB={n:c.n,c:c.c,a:c.a||'',lat:c.lat,lng:c.lng};document.getElementById('cmpBInput').value=c.n;renderCompare();setTab('compare');};
  if(tab==='custom')renderLegend();
  if(fromUser)scrollCardIntoSheet(readC);
}
function addCity(dbEntry){
  const c={n:dbEntry.n,c:dbEntry.c,a:dbEntry.a||'',lat:dbEntry.lat,lng:dbEntry.lng};
  if(CUSTOM.some(x=>keyOf(x)===keyOf(c)))return;
  CUSTOM.push(c);persist();renderCustomLayer();renderCustomList();selectCustom(keyOf(c));
}
function removeCity(key){
  CUSTOM=CUSTOM.filter(x=>keyOf(x)!==key);
  if(currentCustom===key){currentCustom=null;readC.innerHTML='';readC.hidden=true;if(tab==='custom'){clearEmph();renderLegend();}}
  persist();renderCustomLayer();renderCustomList();
}
function clearAll(){CUSTOM=[];currentCustom=null;readC.innerHTML='';readC.hidden=true;clearEmph();persist();renderCustomLayer();renderCustomList();renderLegend();}
function persist(){storeSet(STORE_KEY,JSON.stringify(CUSTOM));}

// search / autocomplete
const search=document.getElementById('search'),suggest=document.getElementById('suggest');
let sgIndex=-1,sgResults=[];
function runSearch(){
  const raw=search.value.trim();
  if(!raw){suggest.hidden=true;sgResults=[];return;}
  const q=deaccent(raw);
  sgResults=CITY_DB.filter(c=>c._n.startsWith(q)).slice(0,8);
  if(sgResults.length<8){
    const more=CITY_DB.filter(c=>!c._n.startsWith(q)&&c._n.includes(q)).slice(0,8-sgResults.length);
    sgResults=sgResults.concat(more);
  }
  sgIndex=-1;
  if(!sgResults.length){suggest.innerHTML=`<div class="sgempty">No city found for “${htm(raw)}”. Try another spelling.</div>`;suggest.hidden=false;return;}
  suggest.innerHTML=sgResults.map((c,i)=>{
    const added=CUSTOM.some(x=>keyOf(x)===keyOf(c));
    return `<button type="button" class="sg${added?' added':''}" data-i="${i}"><span><span class="sgn">${htm(c.n)}</span><span class="sgc">${c.a?htm(c.a)+' / ':''}${c.c}</span></span><span class="plus">${added?'✓':'+'}</span></button>`;
  }).join('');
  suggest.hidden=false;
  suggest.querySelectorAll('.sg').forEach(el=>el.addEventListener('click',()=>pick(+el.getAttribute('data-i'))));
}
function pick(i){const c=sgResults[i];if(!c)return;addCity(c);runSearch();search.focus();}
search.addEventListener('input',runSearch);
search.addEventListener('keydown',e=>{
  if(suggest.hidden)return;
  if(e.key==='ArrowDown'){e.preventDefault();sgIndex=Math.min(sgIndex+1,sgResults.length-1);updateSgActive();}
  else if(e.key==='ArrowUp'){e.preventDefault();sgIndex=Math.max(sgIndex-1,0);updateSgActive();}
  else if(e.key==='Enter'){e.preventDefault();pick(sgIndex>=0?sgIndex:0);}
  else if(e.key==='Escape'){suggest.hidden=true;}
});
function updateSgActive(){suggest.querySelectorAll('.sg').forEach((el,i)=>el.classList.toggle('active',i===sgIndex));}
document.addEventListener('click',e=>{if(!e.target.closest('#panel-custom .searchwrap'))suggest.hidden=true;});

/* ---------- views ---------- */
let tab='featured';
const VIEW_TITLE={featured:'Top Ten Best Countries',custom:'My List',chart:'Relocation Chart',zones:'Livability Zones',compare:'Comparison'};
const VIEW_CAP={featured:'Which countries are the best for you to live?',custom:'View angle contacts, livability fields, and activation areas for your favorite cities.',chart:'Study a city in depth, with the full daily life portrait.',zones:"Supercharge your relocation, and find the right fields to boost your chart's needs.",compare:'Having trouble deciding? Examine two cities side by side with comparisons.'};
const panels={featured:document.getElementById('panel-featured'),custom:document.getElementById('panel-custom'),chart:document.getElementById('panel-chart'),
  zones:document.getElementById('panel-zones'),compare:document.getElementById('panel-compare')};
const chartcardEl=document.getElementById('chartcard'),legendEl=document.getElementById('legend'),chartkeyEl=document.getElementById('chartkey');
const viewTitle=document.getElementById('viewTitle'),sheetTitle=document.getElementById('sheetTitle'),sheetSub=document.getElementById('sheetSub'),sideEl=document.getElementById('side');
function updateSheetSub(){
  let s='Relocation corpus v1.2';
  if(tab==='featured')s='10 countries / all lines';
  else if(tab==='custom')s=CUSTOM.length?`${CUSTOM.length} ${CUSTOM.length===1?'place':'places'}`:'No places yet';
  else if(tab==='chart')s=chartPlace?`Re-housed for ${chartPlace.n}`:'No city yet';
  else if(tab==='zones')s=zoneInfo().label;
  else if(tab==='compare'&&cmpA&&cmpB)s=`${cmpA.n} / ${cmpB.n}`;
  sheetSub.textContent=s;
}
function setTab(t){
  if(!panels[t])return;
  tab=t;closeMethod(true);
  document.querySelectorAll('[data-view]').forEach(b=>{if(b.getAttribute('data-view')===t)b.setAttribute('aria-current','page');else b.removeAttribute('aria-current');});
  viewTitle.textContent=VIEW_TITLE[t];document.getElementById('viewCap').textContent=VIEW_CAP[t];sheetTitle.textContent=VIEW_TITLE[t];sideEl.setAttribute('aria-label',VIEW_TITLE[t]);
  Object.entries(panels).forEach(([k,el])=>el.hidden=k!==t);
  const isChart=(t==='chart');
  mapcard.hidden=isChart;chartcardEl.hidden=!isChart;legendEl.hidden=isChart;chartkeyEl.hidden=!isChart;
  featuredLayer.style('display',t==='featured'?null:'none');
  customLayer.style('display',t==='custom'?null:'none');
  compareLayer.style('display',t==='compare'?null:'none');
  hideTip();setSheet('half');
  try{localStorage.setItem('ecliptica:view',t);}catch(e){}
  if(isChart){renderChart();clearEmph();updateSheetSub();return;}
  if(t==='zones'){
    renderZones();
    if(countryStatsDirty||zonesListStale)renderZoneCountries();
    zonesLayer.style('display',null);
    lineG.selectAll('.acgline,.aglyph').style('display','none');   // no lines in this view
    clearEmph();
  }else{
    zonesLayer.style('display','none');
    clearFlash();
    updateLines();                                                 // restore lines per toggles + re-emphasise
    if(t==='custom'){if(currentCustom)selectCustom(currentCustom);else clearEmph();}
    else if(t==='compare'){renderCompare();}
    else if(t==='featured'){reEmphasise();}
    else clearEmph();
  }
  renderLegend();updateSheetSub();
}
document.querySelectorAll('[data-view]').forEach(b=>b.addEventListener('click',()=>{setTab(b.getAttribute('data-view'));if(!isPhone())window.scrollTo({top:0});}));
document.getElementById('brandBtn').addEventListener('click',()=>{setTab('featured');window.scrollTo({top:0});});
function openChart(place){
  chartPlace={n:place.n,c:place.c,a:place.a||'',lat:place.lat,lng:place.lng};
  const inp=document.getElementById('chartInput');if(inp)inp.value=place.n;
  storeSet(CHART_KEY,JSON.stringify(chartPlace));
  setTab('chart');window.scrollTo({top:0});
}

// ---- phone bottom sheet: four stops + hidden (boards 26, 26a, 26b, 27, 28s) ----
// Stops, low to high: min (Peek) · half (default) · tall · max (Full screen). 'off' hides the sheet behind the pill.
const sheetMin=document.getElementById('sheetMin'),showSheet=document.getElementById('showSheet'),sheetHandle=document.getElementById('sheetHandle');
const SHEET_STOPS=['min','half','tall','max'];
function sheetState(){return document.body.getAttribute('data-sheet');}
function setSheet(state){
  if(state==='full')state='half';
  document.body.setAttribute('data-sheet',state);
  const i=SHEET_STOPS.indexOf(state);if(i<0)return;
  const label=state==='max'?'Lower the list to its smallest height, height 4 of 4':`Expand the list, height ${i+1} of 4`;
  sheetMin.setAttribute('aria-label',label);sheetHandle.setAttribute('aria-label',label);
}
// One tap raises the sheet one stop; at Full screen it drops back to Peek.
function stepSheet(){const i=SHEET_STOPS.indexOf(sheetState());setSheet(SHEET_STOPS[i<0||i===3?0:i+1]);}
sheetMin.addEventListener('click',stepSheet);
document.getElementById('sheetClose').addEventListener('click',()=>{setSheet('off');showSheet.focus();});
showSheet.addEventListener('click',()=>setSheet('half'));
(function dragSheet(){
  let y0=null,moved=false;
  sheetHandle.addEventListener('pointerdown',e=>{y0=e.clientY;moved=false;sheetHandle.setPointerCapture(e.pointerId);});
  sheetHandle.addEventListener('pointermove',e=>{if(y0!=null&&Math.abs(e.clientY-y0)>12)moved=true;});
  sheetHandle.addEventListener('pointerup',e=>{
    if(y0==null)return;const dy=e.clientY-y0,i=SHEET_STOPS.indexOf(sheetState());y0=null;
    if(!moved){stepSheet();return;}
    // Drag snaps to the next stop in the drag direction; dragging down from Peek hides the sheet.
    if(dy>0)setSheet(i<=0?'off':SHEET_STOPS[i-1]);else setSheet(SHEET_STOPS[Math.min(3,i+1)]);
  });
})();

// ---- comparison ----
// Hand-written notes for specific places, shown only for the default chart. Add {id,name,region,lat,lng,desc,best} entries here.
const COMPARE_PLACES=[];
let cmpA=null,cmpB=null;
let _regionDN=null;
function regionName(cc){return countryName(cc);}
function regionLabel(p){const country=regionName(p.c);return p.a?`${country} · ${p.a}`:country;}
function curatedFor(p){return birthIsDefault&&COMPARE_PLACES.find(cp=>Math.abs(cp.lat-p.lat)<0.3&&Math.abs(cp.lng-p.lng)<0.35);}
function computeDesc(p){
  const nl=nearestLines(p.lat,p.lng)[0];
  const note=nl.cls==='benefic'?'A benefic line, and a genuine plus for living here.':nl.cls==='malefic'?'A harder line: challenge as much as opportunity.':'A neutral line, more texture than blessing or burden.';
  const prox=proximityWord(nl.km);const proxCap=prox.charAt(0).toUpperCase()+prox.slice(1);
  return `${proxCap} your ${nl.planet} ${nl.angle} line (${fmtKm(nl.km)}): ${lineInterp(nl)}. ${note}`;
}
function computeBest(p,r){
  r=r||corpusAt(p.lat,p.lng);
  if(!r.best.length)return 'No field clears the corpus threshold here.';
  return r.best.slice(0,2).map(k=>CATEGORIES[k].label).join(', ')+'.'+(r.lowConf?' Low confidence.':'');
}
const SLOT={a:{color:'#FCA608',letter:'A'},b:{color:'#B2BFF0',letter:'B'}};
function cmpCard(p,slot){
  const cur=curatedFor(p);
  const region=cur?cur.region:regionLabel(p);
  const desc=cur?cur.desc:computeDesc(p);
  const r=corpusAt(p.lat,p.lng),S=SLOT[slot];
  return `<article class="card ${slot}">
    <div style="display:flex;align-items:center;gap:8px;min-width:0"><span class="slot sm ${slot}" aria-hidden="true">${S.letter}</span><span class="label-s" style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${htm(slashes(region))}</span></div>
    <h3 class="cardhead">${htm(p.n)}</h3>
    <span class="cmpscore">${scoreTag(r.score10)}<span class="bignum">${fmtScore(r.score10)}<small> / 10</small></span></span>
    <div class="tags">${nearestLines(p.lat,p.lng).slice(0,3).map(nl=>lineTag(nl,true)).join('')}</div>
    <p class="cmpdesc">${htm(desc)}</p>
    ${cur?`<div class="callout"><span class="label-s">Your note</span><b>${htm(listSentence(cur.best))}</b></div>`:''}
    <div class="callout"><span class="label-s ${r.best.length?'pos':''}">Best suited</span><b>${computeBest(p,r)}</b></div></article>`;
}
function drawCompareMarkers(A,B){
  const data=[{p:A,slot:'a'},{p:B,slot:'b'}];
  const sel=compareLayer.selectAll('g.cmpm').data(data,d=>d.slot);
  sel.exit().remove();
  const ent=sel.enter().append('g').attr('class','cmpm');
  ent.append('circle').attr('class','halo').attr('r',12).attr('opacity',.22);
  ent.append('circle').attr('class','core').attr('r',5.5).attr('stroke',MK.void).attr('stroke-width',1.5);
  ent.append('text').attr('class','mklabel').attr('text-anchor','middle').attr('dy',-14);
  const m=ent.merge(sel);
  m.selectAll('circle').attr('fill',d=>SLOT[d.slot].color);
  m.select('text').style('fill',d=>SLOT[d.slot].color).text(d=>`${SLOT[d.slot].letter} ${d.p.n}`);
  rescaleMarkers();
}
function cmpBar(k,r,slot){
  const C=CATEGORIES[k],col=SLOT[slot].color;let w,v,neg=false;
  if(C.kind==='overall'){v=r.score10;w=v*10;}
  else if(C.kind==='act'){v=r.fields[k];w=Math.min(v/C_HI,1)*100;}
  else{v=r.fields[k];const d=v-C_BASELINE;w=Math.min(Math.abs(d)/(C_HI-C_BASELINE),1)*100;neg=d<-0.004;}
  return {v,html:`<span class="track">${w>0.05?`<i style="width:${w.toFixed(1)}%;background:${neg?'var(--e500)':col}"></i>`:''}</span>`};
}
function renderCompare(){
  const A=cmpA,B=cmpB;if(!A||!B)return;
  document.getElementById('cmpCards').innerHTML=cmpCard(A,'a')+cmpCard(B,'b');
  document.getElementById('cmpLegend').innerHTML=
    `<span><i style="background:var(--c400)"></i>A / ${htm(A.n)}</span><span><i style="background:var(--i300)"></i>B / ${htm(B.n)}</span>`;
  const rA=corpusAt(A.lat,A.lng),rB=corpusAt(B.lat,B.lng);
  const row=k=>{
    const C=CATEGORIES[k],a=cmpBar(k,rA,'a'),b=cmpBar(k,rB,'b'),act=C.kind==='act';
    const fmt=v=>C.kind==='overall'?v.toFixed(1):v.toFixed(2);
    const winA=!act&&a.v>b.v+1e-9,winB=!act&&b.v>a.v+1e-9;
    return `<div class="cmprow"><span class="lab">${C.label}</span>${a.html}<span class="val${winA?' win':''}" style="color:var(--c400)">${fmt(a.v)}</span>`+
      `${b.html}<span class="val${winB?' win':''}" style="color:var(--i300)">${fmt(b.v)}</span></div>`;
  };
  document.getElementById('cmpFields').innerHTML=CAT_ORDER.filter(k=>CATEGORIES[k].kind!=='act').map(row).join('');
  document.getElementById('cmpAct').innerHTML=ACT_KEYS.map(row).join('');
  drawCompareMarkers(A,B);
  if(tab==='compare'){
    const keys=new Set([...nearestLines(A.lat,A.lng).slice(0,3),...nearestLines(B.lat,B.lng).slice(0,3)].map(x=>x.key));
    emphasiseKeys(keys);renderLegend();updateSheetSub();
  }
}
function makeCitySearch(input,sug,onPick){
  let results=[],idx=-1;
  function run(){
    const raw=input.value.trim();
    if(!raw){sug.hidden=true;results=[];return;}
    const q=deaccent(raw);
    results=CITY_DB.filter(c=>c._n.startsWith(q)).slice(0,8);
    if(results.length<8)results=results.concat(CITY_DB.filter(c=>!c._n.startsWith(q)&&c._n.includes(q)).slice(0,8-results.length));
    idx=-1;
    if(!results.length){sug.innerHTML=`<div class="sgempty">No city found for “${htm(raw)}”. Try another spelling.</div>`;sug.hidden=false;return;}
    sug.innerHTML=results.map((c,i)=>`<button type="button" class="sg" data-i="${i}"><span><span class="sgn">${htm(c.n)}</span><span class="sgc">${c.a?htm(c.a)+' / ':''}${c.c}</span></span><span class="plus">→</span></button>`).join('');
    sug.hidden=false;
    sug.querySelectorAll('.sg').forEach(el=>el.addEventListener('click',()=>choose(+el.getAttribute('data-i'))));
  }
  function choose(i){const c=results[i];if(!c)return;input.value=c.n;sug.hidden=true;onPick(c);}
  function active(){sug.querySelectorAll('.sg').forEach((el,i)=>el.classList.toggle('active',i===idx));}
  input.addEventListener('input',run);
  input.addEventListener('focus',()=>{if(input.value.trim())run();});
  input.addEventListener('keydown',e=>{
    if(sug.hidden)return;
    if(e.key==='ArrowDown'){e.preventDefault();idx=Math.min(idx+1,results.length-1);active();}
    else if(e.key==='ArrowUp'){e.preventDefault();idx=Math.max(idx-1,0);active();}
    else if(e.key==='Enter'){e.preventDefault();choose(idx>=0?idx:0);}
    else if(e.key==='Escape'){sug.hidden=true;}
  });
}
(function initCompare(){
  cmpA={n:'Palma de Mallorca',c:'ES',lat:39.571,lng:2.650};
  cmpB={n:'Montevideo',c:'UY',lat:-34.901,lng:-56.164};
  const aIn=document.getElementById('cmpAInput'),bIn=document.getElementById('cmpBInput');
  const aSug=document.getElementById('cmpASug'),bSug=document.getElementById('cmpBSug');
  aIn.value=cmpA.n;bIn.value=cmpB.n;
  makeCitySearch(aIn,aSug,c=>{cmpA=c;renderCompare();});
  makeCitySearch(bIn,bSug,c=>{cmpB=c;renderCompare();});
  const aWrap=aIn.closest('.cmpwrap'),bWrap=bIn.closest('.cmpwrap');
  document.addEventListener('click',e=>{const w=e.target.closest('.cmpwrap');if(w!==aWrap)aSug.hidden=true;if(w!==bWrap)bSug.hidden=true;});
  renderCompare();
})();

// ---- relocation chart ----
let chartPlace=null, chartGen=0;
const ANGLE_ICON={
  ASC:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><line x1="2.5" y1="19.5" x2="21.5" y2="19.5"/><path d="M5 19 L17.5 6.5"/><path d="M11.5 6.5 L17.5 6.5 L17.5 12.5"/></svg>',
  MC:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="4.5" x2="20" y2="4.5"/><path d="M12 21 L12 8"/><path d="M7.5 12.5 L12 8 L16.5 12.5"/></svg>'
};
const HOUSE_NAME={1:'First',2:'Second',3:'Third',4:'Fourth',5:'Fifth',6:'Sixth',
  7:'Seventh',8:'Eighth',9:'Ninth',10:'Tenth',11:'Eleventh',12:'Twelfth'};
const CUSP_ORB=3;   // our convention for flagging a cusp placement
function shdr(label,attr){return `<div class="sechead"><span>${label}</span>${attr?`<span>${attr}</span>`:''}</div>`;}
const cap=s=>s.charAt(0).toUpperCase()+s.slice(1);
function chartXY(lon,r,asc,cx,cy){const th=(180+(lon-asc))*RAD;return [cx+r*Math.cos(th),cy-r*Math.sin(th)];}
// wheel in the Ecliptica chart style (board 16): Ion 800 rules, Starlight angles, Ion / Ember aspects
const WC={ring:'#2D3674',outer:'#121B21',inner:'#08090D',sign:'#B0B5BA',ang:'#EEF1F4',hn:'#93999E',flow:'#B2BFF0',hard:'#D4654E'};
function renderWheel(ch){
  const svg=document.getElementById('wheel');if(!svg)return;
  const cx=200,cy=200,R=190,RZ=164,RH=58,RP=148,asc=ch?ch.angles.ASC:180;
  const mob=isPhone();
  const E=[];
  E.push(`<circle cx="${cx}" cy="${cy}" r="${R}" fill="${WC.outer}"/>`);
  E.push(`<circle cx="${cx}" cy="${cy}" r="${RZ}" fill="${WC.inner}"/>`);
  E.push(`<circle cx="${cx}" cy="${cy}" r="${R}" fill="none" stroke="${WC.ring}"/>`);
  E.push(`<circle cx="${cx}" cy="${cy}" r="${RZ}" fill="none" stroke="${WC.ring}"/>`);
  E.push(`<circle cx="${cx}" cy="${cy}" r="${RH}" fill="none" stroke="${WC.ring}" opacity=".65"/>`);
  const GF="font-family=\"'Noto Sans Symbols','Noto Sans Symbols 2','Segoe UI Symbol','DejaVu Sans',sans-serif\"";
  for(let s=0;s<12;s++){
    const a=chartXY(s*30,RZ,asc,cx,cy),b=chartXY(s*30,R,asc,cx,cy);
    E.push(`<line x1="${a[0].toFixed(1)}" y1="${a[1].toFixed(1)}" x2="${b[0].toFixed(1)}" y2="${b[1].toFixed(1)}" stroke="${WC.ring}" stroke-width=".7"/>`);
    const g=chartXY(s*30+15,(R+RZ)/2,asc,cx,cy);
    E.push(`<text ${GF} font-size="13" fill="${WC.sign}" x="${g[0].toFixed(1)}" y="${g[1].toFixed(1)}" text-anchor="middle" dominant-baseline="central">${SIGN_GLYPH[s]}</text>`);
  }
  if(!mob)for(let d=0;d<360;d+=5){
    const t=(d%10===0)?6:3,a=chartXY(d,RZ,asc,cx,cy),b=chartXY(d,RZ-t,asc,cx,cy);
    E.push(`<line x1="${a[0].toFixed(1)}" y1="${a[1].toFixed(1)}" x2="${b[0].toFixed(1)}" y2="${b[1].toFixed(1)}" stroke="${WC.ring}" stroke-width=".4" opacity=".7"/>`);
  }
  if(!ch){svg.innerHTML=E.join('');return;}
  if(ch.cusps){
    for(let i=0;i<12;i++){
      const isAng=(i===0||i===3||i===6||i===9);
      const a=chartXY(ch.cusps[i],RH,asc,cx,cy),b=chartXY(ch.cusps[i],isAng?R-4:RZ,asc,cx,cy);
      E.push(`<line x1="${a[0].toFixed(1)}" y1="${a[1].toFixed(1)}" x2="${b[0].toFixed(1)}" y2="${b[1].toFixed(1)}" stroke="${isAng?WC.ang:WC.ring}" stroke-width="${isAng?1.4:.6}"${isAng?'':' opacity=".9"'}/>`);
      const mid=ch.cusps[i]+norm360(ch.cusps[(i+1)%12]-ch.cusps[i])/2;
      const n=chartXY(mid,RH+11,asc,cx,cy);
      E.push(`<text font-family="JetBrains Mono, monospace" font-size="8" fill="${WC.hn}" x="${n[0].toFixed(1)}" y="${n[1].toFixed(1)}" text-anchor="middle" dominant-baseline="central">${i+1}</text>`);
    }
    ANGLE_KEYS.forEach(k=>{
      const p=chartXY(ch.angles[k],R+12,asc,cx,cy);
      E.push(`<text font-family="JetBrains Mono, monospace" font-size="8.5" font-weight="500" fill="${WC.ang}" letter-spacing="0.4" x="${p[0].toFixed(1)}" y="${p[1].toFixed(1)}" text-anchor="middle" dominant-baseline="central">${k}</text>`);
    });
  }
  const ps=ch.planets.slice().sort((a,b)=>a.lon-b.lon);
  const lanes=ps.map(()=>0);
  for(let i=1;i<ps.length;i++){
    let lane=0;
    for(let j=i-1;j>=0&&Math.abs(wrap180(ps[i].lon-ps[j].lon))<(mob?9:6);j--)lane=Math.max(lane,lanes[j]+1);
    lanes[i]=Math.min(lane,3);
  }
  const shown=mob?ch.natal.slice(0,8):ch.natal;
  shown.forEach(a=>{
    if(a.aspect==='Conjunct')return;
    const A=ch.planets.find(p=>p.name===a.a),B=ch.planets.find(p=>p.name===a.b);
    if(!A||!B)return;
    const p1=chartXY(A.lon,RH,asc,cx,cy),p2=chartXY(B.lon,RH,asc,cx,cy);
    const col=(a.aspect==='Trine'||a.aspect==='Sextile')?WC.flow:WC.hard;
    const op=Math.max(.2,.75-(a.orb/a.allow)*.5);
    E.push(`<line x1="${p1[0].toFixed(1)}" y1="${p1[1].toFixed(1)}" x2="${p2[0].toFixed(1)}" y2="${p2[1].toFixed(1)}" stroke="${col}" stroke-width=".8" opacity="${op.toFixed(2)}"/>`);
  });
  ps.forEach((p,i)=>{
    const r=RP-lanes[i]*(mob?16:15);
    const g=chartXY(p.lon,r,asc,cx,cy),t1=chartXY(p.lon,RZ,asc,cx,cy),t2=chartXY(p.lon,RZ-6,asc,cx,cy);
    const m=PMETA[p.name];
    E.push(`<line x1="${t1[0].toFixed(1)}" y1="${t1[1].toFixed(1)}" x2="${t2[0].toFixed(1)}" y2="${t2[1].toFixed(1)}" stroke="${m.color}" stroke-width="1"/>`);
    E.push(`<text ${GF} font-size="15" x="${g[0].toFixed(1)}" y="${g[1].toFixed(1)}" text-anchor="middle" dominant-baseline="central" fill="${m.color}">${m.glyph}</text>`);
    if(p.rx)E.push(`<text font-family="JetBrains Mono, monospace" font-size="7" x="${(g[0]+9).toFixed(1)}" y="${(g[1]+8).toFixed(1)}" text-anchor="middle" fill="${m.color}">R</text>`);
  });
  svg.innerHTML=E.join('');
}

function listOf(a){
  return a.length===1?a[0]:a.slice(0,-1).join(', ')+' and '+a[a.length-1];
}
/* ---------- relocation chart reading: corpus v1.2 structure ----------
   Follows the corpus README's suggested output order — Internal Evaluation, Daily Life Portrait,
   Ascendant, Midheaven, Aspects to Angles, Planets in Houses — and writes the portrait by the
   Synthesis Rules. Every module text comes from the corpus; the connecting sentences are ours. */
const C_ANGLE_LONG={ASC:'Ascendant',DSC:'Descendant',MC:'Midheaven',IC:'Imum Coeli'};
// plain-language domain of each angle, for the lived-experience opening (rule 1)
const C_ANGLE_PLAIN={ASC:'how you come across and how the place meets you',DSC:'partnerships, clients and the people you draw in',
  MC:'work, reputation and public direction',IC:'home, privacy and the sense of being rooted',
  'ASC/DSC':'the pull between your own direction and other people’s',
  'MC/IC':'the pull between public ambition and home life'};
const C_QUINCUNX_ORB=3;   // the corpus sets no orb for the Yod's quincunxes; 3° is our convention
const lc1=s=>s.charAt(0).toLowerCase()+s.slice(1);
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
function houseAt(ch,lon){return ch.cusps?houseOfLon(norm360(lon),ch.cusps):null;}
function hTxt(h){return h?`${ORD(h)} house`:'chart (houses undefined here)';}

/* ---- Configurations sheet: recognition ---- */
function chartConfigs(ch,r){
  const P=ch.planets,N=P.length,out=[];
  const asp=(i,j,ang,orb)=>{const o=Math.abs(separation(P[i].lon,P[j].lon)-ang);return o<=(orb??allowedOrb(P[i].name,P[j].name));};
  const sg=i=>Math.floor(norm360(P[i].lon)/30);
  const nm=i=>P[i].name,hs=i=>P[i].house;
  const opp=[],tri=[];
  for(let i=0;i<N;i++)for(let j=i+1;j<N;j++){if(asp(i,j,180))opp.push([i,j]);if(asp(i,j,120))tri.push([i,j]);}
  const isTri=(i,j)=>asp(i,j,120),isSq=(i,j)=>asp(i,j,90),isSx=(i,j)=>asp(i,j,60),isOpp=(i,j)=>asp(i,j,180);
  // Grand Cross / T-square
  const crossSeen=new Set();
  opp.forEach(([a,b])=>{
    const apex=[];for(let c=0;c<N;c++)if(c!==a&&c!==b&&isSq(c,a)&&isSq(c,b))apex.push(c);
    for(let x=0;x<apex.length;x++)for(let y=x+1;y<apex.length;y++)if(isOpp(apex[x],apex[y])){
      const k=[a,b,apex[x],apex[y]].sort().join();if(crossSeen.has(k))continue;crossSeen.add(k);
      const q=[a,b,apex[x],apex[y]];
      out.push({name:'Grand Cross',planets:q.map(nm),
        spec:`${listOf(q.map(nm))} form two oppositions and four squares in ${C_MODALITY[sg(a)%3].toLowerCase()} signs, across the ${listOf(q.map(i=>ORD(hs(i))))} houses`});}
    apex.forEach(c=>{
      if(out.some(o=>o.name==='Grand Cross'&&o.planets.includes(nm(c))&&o.planets.includes(nm(a))))return;
      const eh=houseAt(ch,P[c].lon+180);
      out.push({name:'T-square',planets:[nm(a),nm(b),nm(c)],apex:nm(c),
        spec:`${nm(c)} is the apex in the ${hTxt(hs(c))} (${C_HOUSE[hs(c)]?C_HOUSE[hs(c)][0]:'—'}), squaring the ${nm(a)}–${nm(b)} opposition across the ${ORD(hs(a))} and ${ORD(hs(b))} houses; the empty leg falls in the ${hTxt(eh)}`});});
  });
  // Grand Trine (one element) and Kite
  for(let i=0;i<N;i++)for(let j=i+1;j<N;j++)for(let k=j+1;k<N;k++){
    if(!(isTri(i,j)&&isTri(j,k)&&isTri(i,k)))continue;
    const el=sg(i)%4;if(sg(j)%4!==el||sg(k)%4!==el)continue;
    const g=[i,j,k];
    out.push({name:'Grand Trine',planets:g.map(nm),
      spec:`${listOf(g.map(nm))} form a ${C_ELEMENT[el].toLowerCase()} grand trine across the ${listOf(g.map(x=>ORD(hs(x))))} houses`});
    for(let d=0;d<N;d++){if(g.includes(d))continue;
      const o=g.find(x=>isOpp(d,x));if(o==null)continue;
      if(g.filter(x=>x!==o).every(x=>isSx(d,x)))
        out.push({name:'Kite',planets:[...g,d].map(nm),focal:nm(d),
          spec:`${nm(d)} in the ${hTxt(hs(d))} opposes ${nm(o)} and sextiles the other two, giving the grand trine a focal point`});}
  }
  // Yod
  for(let i=0;i<N;i++)for(let j=i+1;j<N;j++){if(!isSx(i,j))continue;
    for(let c=0;c<N;c++)if(c!==i&&c!==j&&asp(c,i,150,C_QUINCUNX_ORB)&&asp(c,j,150,C_QUINCUNX_ORB))
      out.push({name:'Yod',planets:[nm(i),nm(j),nm(c)],apex:nm(c),
        spec:`${nm(c)} is the apex in the ${hTxt(hs(c))}, quincunx both ${nm(i)} and ${nm(j)}, which sextile each other`});}
  // Mystic Rectangle
  for(let x=0;x<opp.length;x++)for(let y=x+1;y<opp.length;y++){
    const [a,b]=opp[x],[c,d]=opp[y];if(new Set([a,b,c,d]).size<4)continue;
    const ok=(p,q,s,t)=>isTri(p,s)&&isTri(q,t)&&isSx(p,t)&&isSx(q,s);
    if(ok(a,b,c,d)||ok(a,b,d,c))
      out.push({name:'Mystic Rectangle',planets:[a,b,c,d].map(nm),
        spec:`the ${nm(a)}–${nm(b)} and ${nm(c)}–${nm(d)} oppositions are linked by trines and sextiles`});}
  // Stellium: three or more planets in one sign or house
  const bySign={},byHouse={};
  P.forEach((p,i)=>{(bySign[sg(i)]=bySign[sg(i)]||[]).push(i);if(p.house)(byHouse[p.house]=byHouse[p.house]||[]).push(i);});
  const signSt=[];
  Object.keys(bySign).forEach(s=>{const g=bySign[s];if(g.length<3)return;
    const lons=g.map(i=>degInSign(P[i].lon)),span=Math.max(...lons)-Math.min(...lons);
    const hh=[...new Set(g.map(hs))].filter(Boolean).sort((a,b)=>a-b);
    signSt.push(g.map(nm).join());
    out.push({name:'Stellium',kind:'sign',planets:g.map(nm),houses:hh,span,
      spec:`${listOf(g.map(nm))} share ${SIGNS[s]}, spread over ${Math.round(span)}°${hh.length?`, landing in the ${listOf(hh.map(ORD))} house${hh.length>1?'s':''}`:''}`,
      lead:hh.length===1?hh[0]:null});});
  Object.keys(byHouse).forEach(h=>{const g=byHouse[h];if(g.length<3)return;
    if(signSt.includes(g.map(nm).join()))return;            // same group as a sign stellium: already named
    out.push({name:'Stellium',kind:'house',planets:g.map(nm),houses:[+h],lead:+h,
      spec:`${listOf(g.map(nm))} gather in the ${ORD(+h)} house (${C_HOUSE[h][0]})`});});
  // Angular emphasis: several planets closely contacting the relocated angles
  const close=r.contacts.filter(c=>c.orb<3),closeConj=r.contacts.filter(c=>c.aspect==='Conjunction'&&c.orb<5);
  if(close.length>=3||closeConj.length>=2){
    const g=(close.length>=3?close:closeConj).slice().sort((a,b)=>(a.aspect==='Conjunction'?0:1)-(b.aspect==='Conjunction'?0:1)||a.orb-b.orb);
    out.push({name:'Angular emphasis',planets:g.map(c=>c.planet),contacts:g,
      spec:`${g.length} planets sit close to the angles — ${g.map(c=>`${contactName(c)} (${c.orb.toFixed(1)}°)`).join(', ')}`});}
  // Bowl / Locomotive from the largest empty arc
  const L=P.map((p,i)=>({i,l:norm360(p.lon)})).sort((a,b)=>a.l-b.l);
  let gap=-1,gi=0;L.forEach((x,k)=>{const nx=L[(k+1)%L.length],g=norm360(nx.l-x.l);if(g>gap){gap=g;gi=k;}});
  const before=L[gi].i,after=L[(gi+1)%L.length].i;     // the gap runs from `before` to `after` in zodiac order
  if(gap>=150){
    const mid=norm360(P[after].lon+(360-gap)/2),mh=houseAt(ch,mid);
    const hemi=mh?`${mh>=7?'above the horizon (the public half)':'below the horizon (the private half)'} and ${[10,11,12,1,2,3].includes(mh)?'east of the meridian (the self-directed side)':'west of the meridian (the relational side)'}`:'in a hemisphere the houses cannot define here';
    out.push({name:'Bowl',planets:[nm(after),nm(before)],
      spec:mh?`the planets fill ${Math.round(360-gap)}°, centred in the ${hTxt(mh)} — ${hemi}; the rim planets are ${nm(after)} in the ${hTxt(hs(after))} and ${nm(before)} in the ${hTxt(hs(before))}`
             :`the planets fill ${Math.round(360-gap)}°, with ${nm(after)} and ${nm(before)} on the rim`});
  }else if(gap>=100){
    out.push({name:'Locomotive',planets:[nm(after)],
      spec:`${nm(after)} leads, at the clockwise end of the occupied span in the ${hTxt(hs(after))}`});
  }
  // corpus weight first; among equals, location-dependent patterns (angles, house groupings) first
  const local=o=>o.name==='Angular emphasis'||(o.name==='Stellium'&&o.lead)?1:0;
  out.forEach(o=>o.rank=C_CONFIG[o.name].rank+local(o)*0.5);
  out.sort((a,b)=>b.rank-a.rank);
  return out;
}

/* ---- Internal Evaluation (rules 18–19) ---- */
function confidenceOf(r,ch){
  if(r.lowConf||ch.undefinedHouses)return ['low','fewer than two fields clear 1.75'+(ch.undefinedHouses?', and houses are undefined at this latitude':'')];
  const tight=r.contacts.some(c=>c.orb<3);
  return tight?['high','two or more fields clear 1.75 and at least one contact is inside 3°']
              :['moderate','fields clear 1.75 but no contact is tighter than 3°'];
}
function evalBlock(r,ch,p){
  const [lab,col]=scoreLabel(r.score10),[conf,why]=confidenceOf(r,ch);
  const pos=r.contacts.filter(c=>c.contrib>0).sort((a,b)=>b.contrib-a.contrib),neg=r.contacts.filter(c=>c.contrib<0).sort((a,b)=>a.contrib-b.contrib);
  const nm=c=>`${contactName(c)} (${signed(c.contrib,2)})`;
  const rationale=!r.contacts.length?'No planet reaches an angle record within the corpus orbs, so every field sits at its baseline.'
    :`Driven by ${listOf(pos.slice(0,3).map(nm))||'no positive contact'}${neg.length?`; offset by ${listOf(neg.slice(0,2).map(nm))}`:'; nothing at the angles offsets it'}.`;
  return shdr('Internal evaluation','Synthesis rules 18–19')+
    `<div class="carow"><span class="caname">Suggested score</span><span class="caorb"><b style="color:${col}">${r.score10.toFixed(1)} / 10</b> · ${lab} · ${signed(r.overall,2)} on −2..+5</span></div>`+
    `<p class="caint">${rationale}</p>`+
    catBreakdown(p.lat,p.lng,'Suggested livability fields',r)+
    `<p class="caint" style="margin-top:10px">Confidence: <b>${conf}</b> — ${why}.</p>`+
    `<p class="small" style="margin-top:4px">An internal recommendation for comparison with the app’s model, not an oracle.</p>`;
}

/* ---- Daily Life Portrait (Synthesis Rules 1–20, 300–500 words) ---- */
const C_HARD_FRAME={   // rules 5, 16, 17: friction framed constructively and in proportion
  Saturn:'it can be constructive without feeling easy — structure and accountability tend to arrive as weight before they pay off',
  Mars:'it can build courage and momentum, but tends to show up first as haste, friction or conflict',
  Neptune:'it can make the place feel beautiful or inspiring without making it any more stable',
  Uranus:'it can bring freedom and reinvention, but tends to trade away steady footing',
  Pluto:'it can deepen your sense of agency, but tends to concentrate intensity and questions of control',
  Moon:'mood and comfort-seeking can get caught in the middle',Mercury:'nervous strain and mental noise can collect there',
  Sun:'self-assertion can collide with what others need',Venus:'ease and agreement can come at the cost of honesty',
  Jupiter:'expansion can outrun follow-through'};
function actLevel(v){return v<1?'low':v<2.5?'moderate':'high';}
function anchorSentence(c,listed){
  const p=c.planet,N=C_NATURE[p],o=listed?c.band:`${c.orb.toFixed(1)}° from exact, ${c.band}`;
  if(c.aspect==='Conjunction'){const [nm,,area,exp,shape]=C_ANGLE_TXT[c.angle];
    return `The loudest single contact is ${p} on the ${nm} (${o}): its ${N} are experienced ${exp}, shaping ${shape}.`;}
  if(c.aspect==='Square'){const [axis,bal]=C_AXIS_TXT[c.angle];
    return `The loudest single contact is ${p} square the ${axis} axis (${o}): ${p} is not on an angle, so its ${N} tend to press on ${bal} as recurring friction rather than defining you.`;}
  const [nm,opp,area]=C_ANGLE_TXT[c.angle];
  return `The loudest single contact is ${p} trine the ${nm} (${o}): ${p} sits beside the angle rather than on it, so its ${N} act as a background resource for ${area} — available, but only if it is used.`;
}
function portraitParas(r,ch,cfgs){
  const out=[],A=r.contacts[0];
  if(ch.undefinedHouses)out.push('Placidus houses are undefined at this latitude, so this portrait is drawn from the angles alone and confidence is lower than usual.');
  // 1 · lived experience first, opened by the strongest configuration (rule 1; Configurations sheet)
  const lead=cfgs[0];
  const leadArea=lead&&lead.name==='Stellium'&&lead.lead?C_HOUSE[lead.lead][0]:null;
  const life1=lead?C_CONFIG[lead.name].life.split('. ')[0].replace(/\.$/,'')+'.':'';
  out.push(A
    ? `An ordinary week here tends to organize itself around ${C_ANGLE_PLAIN[A.angle]}${leadArea?`, while a good share of your attention collects around ${leadArea}`:''}. ${life1}`
    : `No planet reaches an angle here, so an ordinary week is unlikely to feel organized around any one corner of life${leadArea?`; what stands out instead is ${leadArea}`:''}. ${life1}`);
  // 2 · technical anchor: configuration specifics, then angularity by orb (rules 2, 20)
  if(lead){
    const C=C_CONFIG[lead.name],rest=C.life.split('. ').slice(1).join('. ');
    let s=`In chart terms this is ${/^[AEIOU]/.test(lead.name)?'an':'a'} ${lead.name.toLowerCase()}: ${lead.spec}.${rest?'§'+rest+'§':''}`;
    if(lead.name==='Stellium')s+=` The planets are ${lead.span!=null&&lead.span>8?'spread out, so they work as a shared emphasis rather than one fused conjunction':'packed close together'}.`;
    if(lead.name==='Bowl')s+=' The shape by itself does not imply isolation.';
    out.push(s+(A?' '+anchorSentence(A,lead.name==='Angular emphasis'):''));
  }else if(A)out.push(anchorSentence(A));
  // 3 · merge repetition into the strongest claim (rule 3)
  const fitTop=r.best.length?r.best.slice(0,2):[];
  if(fitTop.length){
    const parts=fitTop.map((k,i)=>{
      const lab=CATEGORIES[k].label,src=r.contacts.filter(c=>c.contrib>0&&c.fields.some(f=>FIELD_KEY[f]===k));
      const who=src.length?listOf(src.slice(0,3).map(contactName)):'the combined pattern';
      return i===0
        ? `${src.length>1?'Several contacts make the same point':'One contact carries the strongest claim'}: ${lab} — ${C_MEASURES[k]} — is supported by ${who} (${r.fields[k].toFixed(2)} against a 1.50 baseline).`
        : `${lab} follows (${r.fields[k].toFixed(2)}), carried by ${who}.`;});
    out.push(parts.join(' ')+' '+C_FIELD_CAUTION[fitTop[0]]+(r.lowConf?' Fewer than two fields clear the corpus threshold, so read this with low confidence.':''));
  }else out.push('No livability field clears the corpus threshold of 1.75 here, so the place reads as quiet rather than strongly suited — low confidence by the corpus rule.');
  // 4 · contradictions, ease versus benefit, proportion (rules 4, 5, 14–17)
  const neg=r.contacts.filter(c=>c.contrib<0).sort((a,b)=>a.contrib-b.contrib);
  const posSum=r.contacts.reduce((s,c)=>s+Math.max(0,c.contrib),0),negSum=-r.contacts.reduce((s,c)=>s+Math.min(0,c.contrib),0);
  if(neg.some(c=>c.weight>=0.4)){
    const byP=[];neg.filter(c=>c.weight>=0.4).forEach(c=>{const g=byP.find(x=>x.p===c.planet);if(g)g.cs.push(c);else byP.push({p:c.planet,cs:[c]});});
    const lines=byP.slice(0,2).map(g=>`${listOf(g.cs.map(c=>`${contactName(c)} (${c.orb.toFixed(1)}°)`))} ${g.cs.length>1?'pull':'pulls'} the other way on ${listOf([...new Set(g.cs.map(c=>C_ANGLE_PLAIN[c.angle]))])} — ${C_HARD_FRAME[g.p]}`);
    const verdict=negSum<0.35*posSum?'It is one tension inside a broadly supportive pattern, not the defining note.'
      :negSum<0.7*posSum?'Support still outweighs friction, but the friction is real enough to be felt week to week.'
      :negSum<=posSum?'Support and friction are close to balanced, so both tend to be felt in the same weeks.'
      :'Here the friction outweighs the support, so the place is better read as demanding than easy.';
    out.push(`Not all the testimony agrees. ${lines.join('; and ')}. ${verdict}`);
  }else{
    const ben=r.contacts.find(c=>['Jupiter','Venus','Sun'].includes(c.planet));
    out.push(ben
      ? `Nothing at the angles works against this, which carries its own risk: with ${ben.planet} this prominent, the likelier problem is ${C_BEST[ben.planet][1]} rather than outside friction.`
      : 'Nothing at the angles pulls hard against the rest of the pattern, so tension here is more likely to come from circumstances than from the chart.');
  }
  // 5 · activation is not fit (rule 6)
  const E=r.fields.excitement_instability,R=r.fields.responsibility_focus;
  let act=`On the activation side, Excitement & Instability is ${actLevel(E)} (${E.toFixed(1)} of 5) and Responsibility & Focus ${actLevel(R)} (${R.toFixed(1)} of 5).`;
  if(E>=2.5)act+=' That measures stimulation and volatility, not extra livability — the place may feel exciting and unsettled at once.';
  if(R>=2.5)act+=' Responsibility concentrates here; that describes load, not ease.';
  if(E<1&&R<1)act+=' Neither is pronounced, so the angles alone are unlikely to make the place feel pressured or unsettled.';
  else if(E<2.5&&R<2.5)act+=' Both stay in a range that adds texture rather than strain.';
  out.push(act);
  // 6 · houses as concrete routines (rules 9, 13)
  if(!ch.undefinedHouses){
    const by={};ch.planets.forEach(p=>{(by[p.house]=by[p.house]||[]).push(p);});
    const hs=Object.keys(by).map(Number).sort((a,b)=>by[b].length-by[a].length||a-b);
    const pick=[];hs.forEach(h=>{if(pick.length<2&&by[h].length>=2&&h!==(lead&&lead.lead))pick.push(h);});
    [10,4].forEach(h=>{if(pick.length<2&&by[h]&&!pick.includes(h)&&h!==(lead&&lead.lead))pick.push(h);});
    const sent=pick.map(h=>`with ${listOf(by[h].map(p=>p.name))} in the ${ORD(h)} house (${C_HOUSE[h][0]}), ${lc1(C_HOUSE[h][1]).replace(/\.$/,'')}`);
    let s=sent.length?`Day to day, the houses turn this into routines: ${sent.join('; ')}`:'The houses spread your planets thinly here, so no single routine dominates';
    s+=`. ${ch.shifts.length===10?'All 10 of your planets change house':ch.shifts.length?`${ch.shifts.length} of your 10 planets change house`:'No planet changes house'} from the natal chart.`;
    const cusp=ch.planets.filter(p=>p.onCusp&&(pick.includes(p.house)||(A&&p.name===A.planet)));
    if(cusp.length)s+=` ${listOf(cusp.map(p=>p.name))} ${cusp.length>1?'sit':'sits'} within ${CUSP_ORB}° of a cusp, so read ${cusp.length>1?'those placements':'that placement'} loosely.`;
    out.push(s);
  }
  // 7 · natal context (rule 7)
  const natal=cfgs.filter(o=>o!==lead&&o.name!=='Angular emphasis'&&!(o.name==='Stellium'&&o.kind==='house')).slice(0,2);
  const nName=o=>o.name==='Stellium'?`${signOf(ch.planets.find(x=>x.name===o.planets[0]).lon)} stellium`:o.name.toLowerCase();
  out.push(`Relocation changes emphasis and angles, not character${natal.length?`. Your natal ${listOf(natal.map(nName))} ${natal.length>1?'travel':'travels'} with you; here, ${natal.map(o=>o.spec).join(', and ')}`:''}. What this city adds is where those natal themes land and which of them it brings to the surface.`);
  // 8 · close with use and caution (rules 8, 12, 14)
  if(A){
    const use=cRecordText(A.id).use,w=neg[0]&&Math.abs(neg[0].contrib)>=0.3?neg[0]:null;
    out.push(`To use the place well, ${lc1(use).replace(/\.$/,'')}. The proportionate watch point is ${w?`${w.planet} — ${C_BEST[w.planet][1]}, mostly around ${C_ANGLE_PLAIN[w.angle]}`:`${A.planet} itself — ${C_BEST[A.planet][1]}`}.`);
  }else out.push('To use the place well, lean on the houses rather than the angles: the routines above are where the chart is felt, and nothing here amplifies them.');
  const total=out.reduce((n,x)=>n+wc(x.replace(/§/g,' ')),0);
  return out.map(x=>total>500?x.replace(/§[^§]*§/,''):x.replace(/§/g,' ').replace(/  +/g,' '));
}
const wc=s=>s.trim().split(/\s+/).length;

/* ---- Internal Evaluation, restyled (overrides the earlier declaration; same logic) ---- */
function evalBlock(r,ch,p){
  const [lab]=scoreLabel(r.score10),[conf,why]=confidenceOf(r,ch);
  const pos=r.contacts.filter(c=>c.contrib>0).sort((a,b)=>b.contrib-a.contrib),neg=r.contacts.filter(c=>c.contrib<0).sort((a,b)=>a.contrib-b.contrib);
  const nm=c=>`${contactName(c)} (${signed(c.contrib,2)})`;
  const rationale=!r.contacts.length?'No planet reaches an angle record within the corpus orbs, so every field sits at its baseline.'
    :`Driven by ${listOf(pos.slice(0,3).map(nm))||'no positive contact'}${neg.length?`; offset by ${listOf(neg.slice(0,2).map(nm))}`:'. Nothing at the angles offsets it'}.`;
  return `<section class="sec">${shdr('Internal evaluation','Rules 18–19')}
    <p class="body">${rationale}</p>
    <p class="small">Suggested score ${r.score10.toFixed(1)} / 10 (${lab}), ${signed(r.overall,2)} on the −2 to +5 scale.</p>
    ${fieldRows(FIT_KEYS,r)}
    ${bestCallout(r)}
    <div class="callout"><span class="label-s">Confidence</span><b>${cap(conf)}: ${why}.</b></div>
    <span class="label-s" style="padding-top:4px">Activation / 0–5, not a fit score</span>
    ${fieldRows(ACT_KEYS,r)}
    <p class="small">An internal recommendation for comparison with the app’s model, not an oracle.</p></section>`;
}

/* ---- Ascendant / Midheaven (rule 10: synthesize with rulers, angle-house planets, aspects) ---- */
function angleSection(k,ch,r){
  const isA=k==='ASC',lon=ch.angles[k],sg=signOf(lon),rul=cRulers(sg),[best,watch]=(isA?C_ASC_BW:C_MC_BW)[sg];
  const title=isA?'Ascendant':'Midheaven',angH=isA?1:10;
  let H=`<section class="sec">${shdr(title,fmtLon(lon))}`;
  H+=`<p class="body">${isA?cAscText(sg):cMcText(sg)}</p>`;
  rul.forEach((rp,i)=>{
    const p=ch.planets.find(x=>x.name===rp),h=p&&p.house;
    const role=rul.length>1?(i===0?'traditional ruler':'modern ruler'):(isA?'chart ruler':'Midheaven ruler');
    const onAngle=r.contacts.filter(c=>c.planet===rp&&c.weight>=0.4);
    H+=`<p class="body dim"><b>${rp}</b>, the ${role}, ${h?`falls in the ${ORD(h)} house (${C_HOUSE[h][0]}). ${C_HOUSE[h][1]}`:'has no house here because houses are undefined at this latitude.'}`+
       (onAngle.length?` It is also on the angles itself: ${listOf(onAngle.map(c=>`${contactName(c)} (${c.orb.toFixed(1)}°)`))}.`:'')+`</p>`;
  });
  const inH=ch.undefinedHouses?[]:ch.planets.filter(p=>p.house===angH).map(p=>p.name);
  const axis=isA?['ASC','DSC','ASC/DSC']:['MC','IC','MC/IC'];
  const cs=r.contacts.filter(c=>axis.includes(c.angle));
  H+=`<p class="small">${inH.length?`In the ${ORD(angH)} house: ${listOf(inH)}.`:`No planet occupies the ${ORD(angH)} house.`} `+
     `${cs.length?`Contacts on this axis: ${cs.map(c=>`${contactLabel(c)} ${c.orb.toFixed(1)}° (${signed(c.contrib,2)})`).join('; ')}.`:'No planet contacts this axis within the corpus orbs.'}</p>`;
  H+=`<div class="callout"><span class="label-s pos">Best expression</span><b>${cap(best)}.</b></div>`+
     `<div class="callout"><span class="label-s neg">Watch for</span><b>${cap(watch)}.</b></div></section>`;
  return H;
}

/* ---- Aspects to Angles (Angle Aspects records, rule 2 order) ---- */
function aspectsSummary(r){
  if(!r.contacts.length)return 'No records within orb';
  const c=r.contacts[0];return `${r.contacts.length} record${r.contacts.length===1?'':'s'} / ${contactLabel(c)} ${c.band}`;
}
function aspectsSection(r){
  if(!r.contacts.length)return `<p class="small">No planet reaches an angle record within the corpus orbs (10° conjunction, 7° square or trine position).</p>`;
  return r.contacts.map(c=>{
    const t=cRecordText(c.id),tone=c.impact>0?'pos':c.impact<0?'neg':'';
    const strong=c.weight>=0.65;
    return `<div class="rec"><div class="rectop"><span class="nm"><span class="glyph" style="color:${PMETA[c.planet].color}">${PMETA[c.planet].glyph}</span>${contactLabel(c)}</span>`+
       `<span class="o">${c.orb.toFixed(2)}° / ${c.band}</span></div>`+
       (strong?`<p class="body">${t.core}</p>`:`<p class="small">${c.band==='moderate'?'Moderate orb: supporting context rather than a central claim.':'Background orb: used cautiously, and only where other testimony reinforces it.'}</p>`)+
       `<div class="callout"><span class="label-s ${tone}">Constructive use</span><span class="body">${t.use}</span></div>`+
       `<p class="small">${t.caution}</p>`+
       `<span class="meta">${c.id} / ${C_PRIORITY[c.aspect]} priority / ${C_MODE[c.aspect]} / impact ${signed(c.impact)} × ${c.weight} = ${signed(c.contrib,2)}</span>`+
       `<span class="meta">${c.fields.join(' / ')} / equivalent: ${cEquiv(C_AA[c.id])}</span></div>`;
  }).join('');
}

/* ---- Planets in Houses (120 modules, interpretive; modified by angularity and rulership) ---- */
function housesSummary(ch){
  if(ch.undefinedHouses)return 'Houses undefined at this latitude';
  const n=new Set(ch.planets.map(p=>p.house)).size;
  return `${n} houses occupied / ${ch.shifts.length} of 10 planets change house`;
}
function housesSection(r,ch){
  if(ch.undefinedHouses)return `<p class="small">Houses are undefined at this latitude, so there are no placements to report. The angles above still hold.</p>`;
  const ascR=cRulers(signOf(ch.angles.ASC)),mcR=cRulers(signOf(ch.angles.MC));
  const by={};ch.planets.forEach(p=>{(by[p.house]=by[p.house]||[]).push(p);});
  let H='';
  Object.keys(by).map(Number).sort((a,b)=>a-b).forEach(h=>{
    const ps=by[h];
    H+=`<div class="housegrp"><div class="househead"><span class="eyebrow" style="color:var(--s100)">${ps.length>=3?'<span class="stel">Stellium</span>':''}${HOUSE_NAME[h]} house</span><span class="small">${C_HOUSE[h][0]}</span></div>`;
    ps.forEach(p=>{
      const m=cHouseModule(p.name,h),tags=[];
      r.contacts.filter(c=>c.planet===p.name&&c.weight>=0.4).forEach(c=>tags.push(`${contactLabel(c)} ${c.orb.toFixed(1)}°`));
      if(ascR.includes(p.name))tags.push('Chart ruler');
      if(mcR.includes(p.name))tags.push('Midheaven ruler');
      if(p.house!==p.natalHouse)tags.push(`Natal ${ORD(p.natalHouse)} → ${ORD(p.house)}`);
      if(p.onCusp)tags.push(`${p.onCusp.d.toFixed(1)}° ${p.onCusp.dir} the ${ORD(p.onCusp.cusp)} cusp`);
      H+=`<div class="rec"><div class="rectop"><span class="nm"><span class="glyph" style="color:${PMETA[p.name].color}">${PMETA[p.name].glyph}</span>${p.name} in the ${ORD(h)}</span><span class="o">${m.id}</span></div>`+
         (tags.length?`<div class="minitags">${tags.map(t=>`<span>${t}</span>`).join('')}</div>`:'')+
         `<p class="body">${m.core}</p>`+
         `<p class="small">${m.use} ${m.watch}</p><span class="meta">${m.fields.join(' / ')}</span></div>`;
    });
    H+=`</div>`;
  });
  return H;
}

function accordion(id,title,summary,inner){
  return `<div class="sec" style="gap:0"><button type="button" class="accbtn" aria-expanded="false" aria-controls="${id}"><span class="t"><span>${title}</span><span>${summary}</span></span>${ICON.chev}</button>`+
    `<div class="accbody" id="${id}" hidden>${inner}</div></div>`;
}
const PORTRAIT_SHOWN=2;
function portraitInner(paras,gen){
  const cls=gen?'body gen':'body';
  const vis=paras.slice(0,PORTRAIT_SHOWN),more=paras.slice(PORTRAIT_SHOWN);
  return vis.map((x,i)=>`<p class="${cls}${i?' dim':''}">${x}</p>`).join('')+
    (more.length?`<div class="sec portrait-more" id="portraitMore" hidden>${more.map(x=>`<p class="${cls} dim">${x}</p>`).join('')}</div>`+
      `<button type="button" class="textlink" id="portraitToggle" aria-expanded="false" aria-controls="portraitMore">Read the full portrait</button>`:'');
}
function wirePortrait(){
  const t=document.getElementById('portraitToggle'),m=document.getElementById('portraitMore');
  if(!t||!m)return;
  t.onclick=()=>{const open=m.hidden;m.hidden=!open;t.setAttribute('aria-expanded',String(open));t.textContent=open?'Show less':'Read the full portrait';};
}
const chartRead=document.getElementById('chartRead');
function renderChartKey(){
  document.getElementById('chartkey').innerHTML=
    `<div class="keygrp"><span class="label-s">Planets</span><div class="keygrid">`+
      Object.keys(PMETA).map(n=>`<span><span class="glyph" style="color:${PMETA[n].color}">${PMETA[n].glyph}</span>${n}</span>`).join('')+`</div></div>`+
    `<div class="keygrp"><span class="label-s">Signs</span><div class="keygrid signs">`+
      SIGNS.map((n,i)=>`<span><span class="glyph" style="color:var(--s300);font-size:14px">${SIGN_GLYPH[i]}</span>${n}</span>`).join('')+`</div></div>`+
    `<div class="keyrow"><span><i style="background:var(--s100)"></i>ANGLES</span><span><i style="background:var(--i300)"></i>FLOWING ASPECT</span><span><i style="background:var(--e500)"></i>HARD ASPECT</span></div>`;
}
function renderChart(){
  const host=chartRead;if(!host)return;
  renderChartKey();
  const rh=document.getElementById('rehoused'),we=document.getElementById('wheelEmpty');
  if(!chartPlace){
    host.innerHTML=`<div class="emptyart"><span class="eyebrow">No city yet</span><h3>Your chart, moved to any city</h3>
      <p class="body dim">Search a city above. Your natal chart is re-housed for it and read in the corpus v${CORPUS_VERSION} order: internal evaluation, a daily life portrait, the Ascendant and Midheaven, aspects to the angles and planets in houses.</p>
      <p class="small">You can also open a chart from any city card in Top Ten or My List.</p></div>`;
    renderWheel(null);rh.hidden=true;we.hidden=false;chartGen++;updateSheetSub();return;
  }
  const p=chartPlace,ch=relocatedChart(p.lat,p.lng),r=corpusAt(p.lat,p.lng),cfgs=chartConfigs(ch,r);
  const cur=curatedFor(p),region=cur?cur.region:regionLabel(p);
  const paras=portraitParas(r,ch,cfgs);
  let H=`<div class="namegrp"><div class="cardtop"><span class="eyebrow">${signOf(ch.angles.ASC)} rising</span>${scoreBox(r.score10)}</div>
    <h2 class="cityname">${htm(p.n)}</h2><span class="eyebrow">${htm(slashes(region))}</span></div>`;
  H+=evalBlock(r,ch,p);
  H+=`<section class="sec">${shdr('Daily life portrait',`<span id="portraitWords">${paras.reduce((s,x)=>s+wc(x),0)} words</span>`)}<div id="portrait" class="sec">${portraitInner(paras)}</div></section>`;
  H+=angleSection('ASC',ch,r);
  H+=angleSection('MC',ch,r);
  H+=`<div class="sec" style="gap:8px">`+accordion('accAspects','Aspects to angles',aspectsSummary(r),aspectsSection(r))+
     accordion('accHouses','Planets in houses',housesSummary(ch),housesSection(r,ch))+`</div>`;
  H+=`<p class="small">Sections follow the corpus’s suggested output order, and the portrait follows its Synthesis Rules. Placidus houses; configurations use the chart’s Lilly orbs (quincunx ${C_QUINCUNX_ORB}°, our convention). Rulers are read through Planets in Houses until the corpus adds ruler modules.</p>`;
  host.innerHTML=H;
  wirePortrait();
  host.querySelectorAll('.accbtn').forEach(b=>b.addEventListener('click',()=>{
    const body=document.getElementById(b.getAttribute('aria-controls')),open=body.hidden;
    body.hidden=!open;b.setAttribute('aria-expanded',String(open));
  }));
  renderWheel(ch);
  rh.hidden=false;document.getElementById('rehousedCity').textContent=p.n;we.hidden=true;
  document.getElementById('wheel').setAttribute('aria-label',`Relocation chart wheel for ${p.n}. Ascendant ${fmtLon(ch.angles.ASC)}, Midheaven ${fmtLon(ch.angles.MC)}.`);
  const gen=++chartGen;
  enrichChart(p,ch,r,cfgs,gen);
  updateSheetSub();
}
const CHART_KEY='astro:chart:city';
(function initChart(){
  const inp=document.getElementById('chartInput'),sug=document.getElementById('chartSug');
  if(!inp)return;
  makeCitySearch(inp,sug,c=>{
    chartPlace=c;renderChart();
    storeSet(CHART_KEY,JSON.stringify({n:c.n,c:c.c,lat:c.lat,lng:c.lng,a:c.a||''}));
  });
  const wrap=document.getElementById('chartWrap');
  document.addEventListener('click',e=>{if(!wrap.contains(e.target))sug.hidden=true;});
  renderChart();
})();
// restore the last chart city, if there is one
async function restoreChartCity(){
  try{
    const raw=await storeGet(CHART_KEY);if(!raw)return;
    const c=JSON.parse(raw);
    if(!c||!c.n||typeof c.lat!=='number'||typeof c.lng!=='number')return;
    chartPlace=c;
    const inp=document.getElementById('chartInput');if(inp)inp.value=c.n;
    renderChart();
  }catch(e){ /* no persistence available: the view simply opens empty */ }
}


/* ---------- Layer 2: generated Daily Life Portrait ----------
   Receives the corpus facts for this city and the corpus's own Synthesis Rules. Performs no
   astronomy, may not add numbers that are not in the facts, and falls back silently to the
   template portrait on any failure. Only the portrait is rewritten; every other section is
   corpus text. */
const PROSE_CACHE={};
const PROSE_MODEL='claude-sonnet-4-6';
const PROSE_KEY_STORE='ecliptica:anthropic-key';
const PROSE_WORDS=[300,500];
const PROSE_BANNED=/(!|\byou will\b|\bnever\b|\bdoomed\b|\bguarantee|\bdestin(y|ed)\b)/i;
function factBlock(p,ch,r,cfgs){
  const by={};if(!ch.undefinedHouses)ch.planets.forEach(x=>{(by[x.house]=by[x.house]||[]).push(x.name);});
  const ang=k=>{const sg=signOf(ch.angles[k]);return{sign:sg,rulers:cRulers(sg).map(n=>{const x=ch.planets.find(q=>q.name===n);return{planet:n,house:x?x.house:null};})};};
  return {
    city:p.n,score10:+r.score10.toFixed(1),
    bestSuited:r.best.map(k=>({field:CATEGORIES[k].label,score:+r.fields[k].toFixed(2),measures:C_MEASURES[k],caution:C_FIELD_CAUTION[k]})),
    confidence:confidenceOf(r,ch)[0],
    activation:{excitementInstability:+r.fields.excitement_instability.toFixed(1),responsibilityFocus:+r.fields.responsibility_focus.toFixed(1)},
    contacts:r.contacts.map(c=>({record:c.id,orb:+c.orb.toFixed(1),band:c.band,impact:c.impact,contribution:+c.contrib.toFixed(2),
      fields:c.fields,constructiveUse:cRecordText(c.id).use,shadow:C_BEST[c.planet][1]})),
    configurations:cfgs.map(o=>({name:o.name,detail:o.spec,dailyLife:C_CONFIG[o.name].life,synthesis:C_CONFIG[o.name].synth,caution:C_CONFIG[o.name].caution})),
    ascendant:ang('ASC'),midheaven:ang('MC'),
    houses:Object.keys(by).map(Number).sort((a,b)=>a-b).map(h=>({house:h,area:C_HOUSE[h][0],planets:by[h],note:C_HOUSE[h][1]})),
    houseShifts:ch.shifts.length,housesUndefined:ch.undefinedHouses,
    cuspPlacements:ch.planets.filter(x=>x.onCusp).map(x=>x.name)
  };
}
function allowedNumbers(f){
  const s=new Set(['10','1.50','1.5','1.75','5']);const add=v=>{if(v==null)return;s.add(String(v));s.add(String(Math.round(v)));};
  add(f.score10);f.bestSuited.forEach(b=>add(b.score));add(f.activation.excitementInstability);add(f.activation.responsibilityFocus);
  f.contacts.forEach(c=>{add(c.orb);add(c.impact);add(Math.abs(c.contribution));});
  f.houses.forEach(h=>{add(h.house);});add(f.houseShifts);
  return s;
}
function proseValid(text,allowed){
  if(typeof text!=='string'||!text.trim())return false;
  const n=wc(text);if(n<PROSE_WORDS[0]-30||n>PROSE_WORDS[1]+20)return false;
  if(PROSE_BANNED.test(text))return false;
  if(text.split(/\n\s*\n/).length<3)return false;
  const nums=text.replace(/\b\d+(st|nd|rd|th)\b/g,m=>m.replace(/\D+$/,'')).match(/\d+(?:\.\d+)?/g)||[];
  return nums.every(n=>allowed.has(n));
}
function prosePrompt(f){
  return `You are writing the Daily Life Portrait section of a relocated-chart reading, using the Relocation Astrology Interpretation Corpus v${CORPUS_VERSION}. Write original prose; do not quote any published astrologer.

THE CORPUS'S SYNTHESIS RULES — follow every one:
${C_SYNTH_RULES.map(([n,t,i])=>`${n}. ${t}: ${i}`).join('\n')}

HOW THE CORPUS WANTS THIS SECTION BUILT
- Length 300–500 words, in 5–8 short paragraphs separated by a blank line. One idea per paragraph.
- Open with what an ordinary week feels like, drawn from the strongest configuration's daily-life text and the strongest contact, in plain words before any chart terminology.
- Then rank the testimony: contacts in the order given (conjunctions, then squares, then trines, by orb). "dominant" orbs anchor the portrait; "moderate" and "background" orbs are supporting context only.
- Merge contacts that support the same field into one stronger claim. Name contradictions between supportive and difficult contacts instead of averaging them.
- Treat activation (Excitement & Instability, Responsibility & Focus) as how much is going on, never as livability.
- Translate houses into routines, housing, work, money and local behaviour.
- Note that relocation changes emphasis, not natal character.
- Close with one constructive use and one proportionate watch point.
- Conditional language: may, tends to, can. Second person. No exclamation marks, no "you will", no "never", no predictions of events, no medical, legal or financial claims.

FACTS — the only geometry that exists. Never invent, adjust or add to these. Any numeral you write must appear here; prefer words to numerals:
${JSON.stringify(f)}

Return ONLY JSON, no preamble or markdown fences: {"portrait":"paragraph\\n\\nparagraph\\n\\n..."}`;
}
async function enrichChart(p,ch,r,cfgs,gen){
  const key=p.n+'|'+p.lat+'|'+p.lng+'|'+CORPUS_VERSION;
  if(PROSE_CACHE[key]){applyProse(PROSE_CACHE[key],gen);return;}
  // Optional AI prose. Off by default on a static host: the template portrait is always shown.
  // To enable it in your own browser, store an Anthropic API key once from the dev console:
  //   localStorage.setItem('ecliptica:anthropic-key','sk-ant-...')
  // The key stays in that browser and is sent only to api.anthropic.com.
  let apiKey=null;try{apiKey=window.localStorage.getItem(PROSE_KEY_STORE);}catch(e){}
  if(!apiKey)return;
  const f=factBlock(p,ch,r,cfgs);
  try{
    const res=await fetch('https://api.anthropic.com/v1/messages',{
      method:'POST',
      headers:{'Content-Type':'application/json','x-api-key':apiKey,'anthropic-version':'2023-06-01',
               'anthropic-dangerous-direct-browser-access':'true'},
      body:JSON.stringify({model:PROSE_MODEL,max_tokens:1600,messages:[{role:'user',content:prosePrompt(f)}]})
    });
    if(!res.ok)return;
    const data=await res.json();
    const txt=(data.content||[]).filter(b=>b.type==='text').map(b=>b.text).join('').trim();
    const out=JSON.parse(txt.replace(/```json|```/g,'').trim());
    if(!proseValid(out.portrait,allowedNumbers(f)))return;
    PROSE_CACHE[key]=out.portrait.trim();
    applyProse(PROSE_CACHE[key],gen);
  }catch(e){ /* silent: the template portrait already reads */ }
}
function applyProse(text,gen){
  if(gen!==chartGen)return;                        // city changed while in flight
  const el=document.getElementById('portrait');if(!el)return;
  el.innerHTML=portraitInner(text.split(/\n\s*\n/).map(x=>esc(x.trim())),true);wirePortrait();
  const w=document.getElementById('portraitWords');if(w)w.textContent=`${wc(text)} words`;
}

/* ---------- Livability Zones panel ---------- */
/* One or more fields. With more than one, the map, readout and country lists show their average
   (design boards 17d / 30d). Fields of one kind average in their own units; a mix of kinds is
   rescaled to 0–10 first (overall /10, activation /5, fit from −2..+5). */
let zonesKeys=['overall'],zonesListStale=false;
const CAT_RANGE={overall:'0–10',act:'0–5',fit:'−2 to +5',mix:'0–10'};
function zoneKind(keys){const ks=new Set(keys.map(k=>CATEGORIES[k].kind));return ks.size===1?[...ks][0]:'mix';}
function zoneNorm(k,v){const K=CATEGORIES[k].kind;return K==='overall'?v/10:K==='act'?v/5:(v+2)/7;}
function zoneCombine(get,keys){
  keys=keys||zonesKeys;if(keys.length===1)return get(keys[0]);
  const mix=zoneKind(keys)==='mix';let s=0;
  for(const k of keys){const v=get(k);s+=mix?zoneNorm(k,v)*10:v;}
  return s/keys.length;
}
function zoneValue(r){return zoneCombine(k=>corpusValue(r,k));}
function catShort(k){return k==='overall'?'Overall':CATEGORIES[k].label;}
function zoneInfo(){
  if(zonesKeys.length===1){
    const k=zonesKeys[0],C=CATEGORIES[k];
    return {key:k,label:C.label,title:k==='overall'?'Overall livability':C.label,kind:C.kind,range:CAT_RANGE[C.kind],low:C.low,high:C.high,desc:C.desc,
      eyebrow:C.kind==='overall'?'Overall score / 0–10':C.kind==='act'?'Activation level / 0–5':'Fit field / −2 to +5'};
  }
  const kind=zoneKind(zonesKeys),labs=zonesKeys.map(catShort),n=zonesKeys.length;
  const names=labs.slice(0,-1).join(', ')+' and '+labs[n-1];
  return {key:null,label:`${n} fields averaged`,title:`${n} fields combined`,kind,range:CAT_RANGE[kind],low:'Weaker',high:'Stronger',
    eyebrow:`Average of ${n} fields / ${CAT_RANGE[kind]}`,
    desc:`Each point shows the average of ${names}.`+(kind==='mix'?' These fields use different scales, so each one is rescaled to 0–10 before averaging.':'')};
}
function fmtZone(v){const k=zoneInfo().kind;return k==='overall'||k==='mix'?v.toFixed(1):v.toFixed(2);}
function renderZoneCountries(){
  const Z=zoneInfo();let data;
  if(Z.key){if(countryStatsDirty)computeCountryStats();data=COUNTRY_CATS[Z.key];}
  else{const M=ensureCountryMeans(),idx=k=>M.keys.indexOf(k);
    data=rankCountries(M.rows.map(x=>({n:x.n,m:zoneCombine(k=>x.v[idx(k)])})));}
  zonesListStale=false;
  const kind=Z.kind,lab=Z.label;
  const rows=(items,tone)=>`<ol class="rlist">`+items.map((c,i)=>
    `<li><button type="button" class="zrow" data-name="${htm(c.n)}" data-tone="${tone}" data-m="${c.m}" aria-pressed="false" aria-expanded="false" aria-label="${htm(c.n)}, ${fmtZone(c.m)}. Show its best city">`+
    `<span class="rk">${pad2(i+1)}</span><span class="nm">${htm(c.n)}</span>`+
    `<span class="track"><i style="width:${Math.max(0,Math.min(100,c.f))}%;background:${tone==='avoid'?'var(--i600)':'var(--c400)'}"></i></span>`+
    `<span class="sc">${fmtZone(c.m)}</span></button></li>`).join('')+`</ol>`;
  const bestH=!Z.key||kind==='overall'?'Strongest countries':kind==='act'?'Most activated':'Best for '+lab.toLowerCase();
  const worstH=!Z.key||kind==='overall'?'Weakest countries':kind==='act'?'Least activated':'Weakest for '+lab.toLowerCase();
  const zc=document.getElementById('zoneCountries');
  openCountry=null;clearZonePin();bestCache.clear();
  zc.innerHTML=`<div class="panel" style="gap:8px"><span class="eyebrow">${htm(bestH)}</span>${rows(data.best,'good')}</div>`+
    `<div class="panel" style="gap:8px"><span class="eyebrow">${htm(worstH)}</span>${rows(data.worst,'avoid')}</div>`;
  zc.querySelectorAll('.zrow').forEach(b=>b.addEventListener('click',()=>toggleCountry(b)));
  markZoneRows();
}
/* Country detail (boards 17e / 30e): a country row opens its strongest city for the current map. */
let openCountry=null;
const bestCache=new Map();
function countryBest(name){
  if(!bestCache.has(name))bestCache.set(name,bestCityIn(name,zoneValue));
  return bestCache.get(name);
}
// the atlas cities inside a country, largest first (CITY_DB order). The country code keeps a coarse
// outline from taking in a neighbour's cities; small islands the outline misses fall back to the code alone.
function citiesIn(name){
  const f=LANDBYNAME[name],cc=ISO2[name];let out=[];
  if(f){
    const b=d3.geoBounds(f),wrap=b[0][0]>b[1][0];
    const inB=c=>c.lat>=b[0][1]-0.01&&c.lat<=b[1][1]+0.01&&(wrap?(c.lng>=b[0][0]||c.lng<=b[1][0]):(c.lng>=b[0][0]-0.01&&c.lng<=b[1][0]+0.01));
    out=CITY_DB.filter(c=>!(cc&&c.c!==cc)&&inB(c)&&d3.geoContains(f,[c.lng,c.lat]));
  }
  if(!out.length&&cc)out=CITY_DB.filter(c=>c.c===cc);
  return out;
}
function bestCityIn(name,valueOf){
  let best=null,bv=-Infinity;
  for(const c of citiesIn(name)){
    const r=corpusAt(c.lat,c.lng),v=valueOf(r);
    if(v>bv+1e-9){bv=v;best={c,r,v};}         // largest first, so ties keep the bigger city
  }
  return best;
}
function clearZonePin(){zonesLayer.selectAll('g.zpin').remove();}
function showZonePin(c){
  clearZonePin();
  const g=zonesLayer.append('g').attr('class','mk zpin').datum({lat:c.lat,lng:c.lng}).style('pointer-events','none');
  buildMarker(g,MK.sel);paintMarker(g,true,MK.sel);
  g.append('text').attr('class','mklabel').attr('text-anchor','middle').attr('dy',-16).style('fill',MK.sel).text(c.n);
  rescaleMarkers();
}
function countryDetailHTML(name,m,tone){
  const B=countryBest(name),Z=zoneInfo();
  if(!B)return `<div class="cdet"><p class="small" style="color:var(--s300);margin:0">No city in the atlas falls inside ${htm(name)}. The country averages ${fmtZone(m)} across its land.</p></div>`;
  const {c,r,v}=B,entry={n:c.n,c:c.c,a:c.a||'',lat:c.lat,lng:c.lng},sk=savedKey(entry);
  const field=Z.key==='overall'?'':` for ${Z.key?Z.label:'these fields'} (${fmtZone(v)})`;
  const lead=tone==='avoid'?`Best city in ${name}${field}, though the country averages ${fmtZone(m)} across its land.`
    :`Strongest spot in ${name}${field}. The country averages ${fmtZone(m)} across its land.`;
  return `<div class="cdet">
    <div class="cardtop"><span class="eyebrow">${signOf(ascLonAt(c.lat,c.lng))} rising</span>${scoreBox(r.score10)}</div>
    <div class="namegrp"><h3>${htm(c.n)}</h3><span class="eyebrow">${htm([countryName(c.c),c.a].filter(Boolean).join(' / '))}</span></div>
    <p class="small" style="margin:0;color:var(--s300)">${htm(lead)}</p>
    <div class="cdbtns">${sk?`<button type="button" class="btn ghost" data-act="view">${ICON.check}View in My List</button>`
      :`<button type="button" class="btn pos" data-act="add">${ICON.plus}Add to My List</button>`}<button type="button" class="btn ghost" data-act="chart">Relocation chart</button></div>
  </div>`;
}
function closeCountryDetail(){
  const d=document.getElementById('cdetLi');if(d)d.remove();
  document.querySelectorAll('.zrow[aria-expanded="true"]').forEach(b=>b.setAttribute('aria-expanded','false'));
  openCountry=null;clearZonePin();
}
function fillCountryDetail(li,btn){
  const name=btn.getAttribute('data-name'),tone=btn.getAttribute('data-tone'),m=+btn.getAttribute('data-m');
  li.innerHTML=countryDetailHTML(name,m,tone);
  const B=countryBest(name);if(!B)return;
  const entry={n:B.c.n,c:B.c.c,a:B.c.a||'',lat:B.c.lat,lng:B.c.lng};
  li.querySelectorAll('[data-act]').forEach(x=>x.addEventListener('click',()=>{
    const a=x.getAttribute('data-act');
    if(a==='add'){addCity(entry);fillCountryDetail(li,btn);toast('Added to My List',`${entry.n} is saved with your other places.`);}
    else if(a==='view'){const k=savedKey(entry);setTab('custom');if(k)selectCustom(k,true);}
    else openChart(entry);
  }));
}
function toggleCountry(btn){
  const name=btn.getAttribute('data-name'),was=openCountry===name;
  closeCountryDetail();clearFlash();
  if(was)return;
  openCountry=name;btn.setAttribute('aria-expanded','true');
  const li=document.createElement('li');li.className='cdetli';li.id='cdetLi';
  btn.parentElement.after(li);btn.setAttribute('aria-controls','cdetLi');
  fillCountryDetail(li,btn);
  flashCountry(name,btn.getAttribute('data-tone'));
  const B=countryBest(name);if(B)showZonePin(B.c);
  if(isPhone())li.scrollIntoView({block:'nearest',behavior:'smooth'});
}
function setZones(keys){
  keys=CAT_ORDER.filter(k=>keys.includes(k));if(!keys.length)keys=['overall'];
  zonesKeys=keys;zonesCat=keys[0];
  const Z=zoneInfo();
  document.getElementById('zonesTitle').textContent=Z.title;
  document.getElementById('zonesSubtitle').textContent=Z.eyebrow;
  document.getElementById('zonesDesc').textContent=Z.desc;
  document.getElementById('scaleLow').textContent=Z.low;
  document.getElementById('scaleHigh').textContent=Z.high;
  document.getElementById('catBtnCount').textContent=`${keys.length} selected`;
  clearFlash();
  if(tab==='zones'||(Z.key&&!countryStatsDirty))renderZoneCountries();else zonesListStale=true;
  paintZones();   // no-op until the field has been built
  if(tab==='zones'){renderLegend();updateSheetSub();}
}
function setCategory(cat){if(CATEGORIES[cat])setZones([cat]);}

/* ---------- Categories drawer ---------- */
const catBtn=document.getElementById('catBtn'),catDrawer=document.getElementById('catDrawer'),catScrim=document.getElementById('catScrim');
const catChips=document.getElementById('catChips'),catApply=document.getElementById('catApply'),catClear=document.getElementById('catClear');
let catPending=null;
catChips.innerHTML=CAT_ORDER.map(k=>`<button type="button" class="dchip" data-cat="${k}" aria-pressed="false">${ICON.check}${htm(catShort(k))}</button>`).join('');
function paintCatDrawer(){
  catChips.querySelectorAll('.dchip').forEach(b=>b.setAttribute('aria-pressed',String(catPending.includes(b.getAttribute('data-cat')))));
  const n=catPending.length;
  document.getElementById('catCount').textContent=`${n} selected`;
  catApply.textContent=n?`Show ${n} ${n===1?'category':'categories'}`:'Select a category';
  catApply.disabled=!n;
}
function openCats(){
  catPending=zonesKeys.slice();paintCatDrawer();
  catScrim.hidden=false;catDrawer.hidden=false;catBtn.setAttribute('aria-expanded','true');document.body.classList.add('drawer-open');
  document.getElementById('catClose').focus();
}
function closeCats(){
  if(catDrawer.hidden)return;
  catDrawer.hidden=true;catScrim.hidden=true;catBtn.setAttribute('aria-expanded','false');document.body.classList.remove('drawer-open');
  catBtn.focus();
}
catBtn.addEventListener('click',openCats);
catScrim.addEventListener('click',closeCats);
document.getElementById('catClose').addEventListener('click',closeCats);
catChips.addEventListener('click',e=>{
  const b=e.target.closest('.dchip');if(!b)return;const k=b.getAttribute('data-cat');
  catPending=catPending.includes(k)?catPending.filter(x=>x!==k):[...catPending,k];paintCatDrawer();
});
catClear.addEventListener('click',()=>{catPending=[];paintCatDrawer();});
catApply.addEventListener('click',()=>{if(!catPending.length)return;setZones(catPending);closeCats();});
catDrawer.addEventListener('keydown',e=>{
  if(e.key==='Escape'){e.stopPropagation();closeCats();return;}
  if(e.key!=='Tab')return;
  const f=[...catDrawer.querySelectorAll('button:not([disabled])')];if(!f.length)return;
  const first=f[0],last=f[f.length-1];
  if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}
  else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}
});
setZones(['overall']);

/* ---------- How the scores work (board 39), built from the live corpus numbers ---------- */
const BANDS=[[0,3,'Friction-heavy','Below 3.0','Hard contacts dominate the angles.','#B5381F'],
  [3,4.5,'Challenging','3.0 to 4.4','More works against you here than for you.','#E78A76'],
  [4.5,5.5,'Quiet','4.5 to 5.4','Few contacts either way. 5.0 means none at all.','#5B6368'],
  [5.5,7,'Mild / mixed','5.5 to 6.9','Some support, or contacts that pull both ways.','#FCA608'],
  [7,8.5,'Strong','7.0 to 8.4','Clear, mostly supportive contacts.','#5261B5'],
  [8.5,10,'Exceptional','8.5 to 10','Tight benefic contacts on the angles.','#039851']];
const CONTACT_SVG=[
  '<svg viewBox="0 0 80 80" aria-hidden="true"><circle cx="40" cy="40" r="34" fill="none" stroke="#41494F" stroke-width="1.5"></circle><line x1="40" y1="40" x2="14" y2="40" stroke="#EEF1F4" stroke-width="2"></line><circle cx="14" cy="40" r="5" fill="#FCA608"></circle><circle cx="40" cy="40" r="3" fill="#EEF1F4"></circle></svg>',
  '<svg viewBox="0 0 80 80" aria-hidden="true"><circle cx="40" cy="40" r="34" fill="none" stroke="#41494F" stroke-width="1.5"></circle><line x1="40" y1="40" x2="14" y2="40" stroke="#EEF1F4" stroke-width="2"></line><path d="M 26 40 A 14 14 0 0 1 40 26" fill="none" stroke="#B2BFF0" stroke-width="1.5"></path><line x1="40" y1="40" x2="40" y2="14" stroke="#FCA608" stroke-width="1.5" stroke-dasharray="3 3"></line><circle cx="40" cy="14" r="5" fill="#FCA608"></circle><circle cx="40" cy="40" r="3" fill="#EEF1F4"></circle></svg>',
  '<svg viewBox="0 0 80 80" aria-hidden="true"><circle cx="40" cy="40" r="34" fill="none" stroke="#41494F" stroke-width="1.5"></circle><line x1="40" y1="40" x2="14" y2="40" stroke="#EEF1F4" stroke-width="2"></line><path d="M 26 40 A 14 14 0 0 1 47 27.9" fill="none" stroke="#B2BFF0" stroke-width="1.5"></path><line x1="40" y1="40" x2="53" y2="17.5" stroke="#FCA608" stroke-width="1.5" stroke-dasharray="3 3"></line><circle cx="53" cy="17.5" r="5" fill="#FCA608"></circle><circle cx="40" cy="40" r="3" fill="#EEF1F4"></circle></svg>'];
const WARN_SVG='<svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="8" fill="none" stroke="#FCA608" stroke-width="1.5"></circle><path d="M10 5.5 V11" stroke="#FCA608" stroke-width="1.8"></path><circle cx="10" cy="14" r="1.1" fill="#FCA608"></circle></svg>';
function methodHTML(){
  const d=CITIES.find(c=>c.id==='mvd')||CITIES[CITIES.length-1],r=corpusAt(d.lat,d.lng),[lab]=scoreLabel(r.score10);
  const band=BANDS.find(b=>b[2]===lab)||BANDS[BANDS.length-1];
  const raw=C_BASELINE+C_SCALE*r.raw,clamped=Math.abs(raw-r.overall)>1e-9;
  const ex=r.contacts.find(c=>c.weight<1&&c.contrib>0)||r.contacts[0];
  const topFit=r.best[0]||'career';
  const toc=[['m1','The short version'],['m2','What gets measured'],['m3','From contacts to a score'],['m4','Worked example'],['m5','Reading the fields'],['m6','What it can’t tell you']];
  const head=(n,id,t)=>`<div class="mhead"><span class="label-s">${pad2(n)}</span><h2 id="${id}h">${t}</h2></div>`;
  const pinPos=v=>`${(v*10).toFixed(1)}%`;
  return `<button type="button" class="back" id="methodBack"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M15 5 L8 12 L15 19"></path></svg>Back</button>
  <div class="ptitle" style="margin:0"><h1 class="vtitle" id="methodTitle" tabindex="-1">How the scores work</h1><span class="eyebrow">Relocation corpus v${CORPUS_VERSION} / method</span></div>
  <div class="mgrid">
    <aside class="mtoc">
      <nav aria-label="On this page" style="display:flex;flex-direction:column;gap:12px"><span class="label-s">On this page</span>
        <ol>${toc.map(([id,t],i)=>`<li><a href="#${id}" data-jump="${id}"><span>${pad2(i+1)}</span>${t}</a></li>`).join('')}</ol></nav>
      <div class="card" style="gap:16px"><b style="font-size:16px;line-height:24px">Scores look off?</b>
        <span class="small" style="color:var(--s200)">The most common cause is an approximate birth time. These scores use ${htm(birthLine(', '))}.${BIRTH.unknownTime?' The birth time is unknown, so noon is used and every line can be off by up to 90° of longitude.':''}</span>
        <button type="button" class="btn pri" data-open-settings style="align-self:flex-start">Edit birth data</button></div>
    </aside>
    <div class="mmain">
      <section class="msec" id="m1" aria-labelledby="m1h">${head(1,'m1','The short version')}
        <p class="lede">Each city gets a score from 0 to 10 based on which of your planets touch its four angles, and how tightly. Tight, supportive contacts push the score up. Hard ones pull it down. A city where nothing touches an angle sits at 5.0.</p>
        <div class="callout"><span class="label-s">The score comes from</span><b>Your birth data, four angles, three kinds of contact, the orb of each one.</b></div>
        <div class="scalebar" role="img" aria-label="Score scale from 0 to 10. Friction-heavy below 3, challenging 3 to 4.4, quiet 4.5 to 5.4, mild or mixed 5.5 to 6.9, strong 7 to 8.4, exceptional 8.5 to 10. A city with no contacts scores 5.0. ${d.name} scores ${fmtScore(r.score10)}.">
          <div class="bars">${BANDS.map(b=>`<span style="width:${(b[1]-b[0])*10}%;background:${b[5]}"></span>`).join('')}
            <span class="pin" style="left:50%;color:var(--s200)">5.0 no contacts<span style="width:2px;height:14px;background:var(--s200)"></span></span>
            <span class="pin" style="left:${pinPos(r.score10)};color:var(--s100)">${fmtScore(r.score10)} ${d.name}<span style="width:2px;height:38px;background:var(--s100)"></span></span>
            <span style="position:absolute;left:${pinPos(r.score10)};top:50%;width:12px;height:12px;border-radius:50%;background:var(--s100);border:2px solid var(--void);transform:translate(-50%,-50%)"></span></div>
          <div class="ticks">${[0,3,4.5,5.5,7,8.5,10].map(v=>`<span style="left:${v*10}%">${v}</span>`).join('')}</div>
        </div>
        <div class="g4">${BANDS.map(b=>{const [bg,fg]=SCORE_TAG[b[2]];return `<div class="tile band" style="border-top-color:${b[5]}"><span class="tag" style="align-self:flex-start;background:${bg};color:${fg}">${b[2]}</span><span class="mono" style="font-size:12px">${b[3]}</span><span class="d">${b[4]}</span></div>`;}).join('')}</div>
      </section>

      <section class="msec" id="m2" aria-labelledby="m2h">${head(2,'m2','What gets measured')}
        <p class="mtext">Every place on Earth has four angles: points where the horizon and the meridian cross the sky at your birth moment. A planet that touches one of them colours the part of life that angle stands for.</p>
        <span class="eyebrow" style="color:var(--s100)">The four angles</span>
        <div class="g4 four">${[['ASC','Ascendant','How you come across, and how at home you feel in your own skin.'],['DSC','Descendant','Partners, close collaborators and the people you attract.'],
          ['MC','Midheaven','Career, reputation and the direction you are seen to take.'],['IC','Imum Coeli','Home, family, roots and a sense of belonging.']]
          .map(([k,n,t])=>`<div class="tile"><span class="mono" style="font-size:13px;font-weight:500;letter-spacing:.06em">${k}</span><span class="t">${n}</span><span class="d">${t}</span></div>`).join('')}</div>
        <span class="eyebrow" style="color:var(--s100)">Three kinds of contact</span>
        <div class="g4">${[['On the angle','0°','The planet sits right on the angle. This is the loudest contact.'],['Square','90°','Tension with the angle. Pressure that pushes you to act.'],['Trine','120°','An easy flow toward the angle. Support you don’t have to work for.']]
          .map(([n,o,t],i)=>`<div class="tile ctile">${CONTACT_SVG[i]}<div style="display:flex;flex-direction:column;gap:4px;min-width:0"><span class="t">${n} <span class="mono" style="font-size:12px;color:var(--s400)">${o}</span></span><span class="d">${t}</span></div></div>`).join('')}</div>
        <p class="small">On the diagrams, the white line is the angle and the gold dot is the planet.</p>
      </section>

      <section class="msec" id="m3" aria-labelledby="m3h">${head(3,'m3','From contacts to a score')}
        <ol class="steps">${[['Re-angle your chart','Your birth moment stays fixed. For each city the four angles are recalculated from its latitude and longitude.',''],
          ['Find the contacts','Each planet is matched to one record in the corpus per axis: on the angle, square to it, or trine to it.',''],
          ['Weight by orb','The orb is how far a contact is from exact. Tighter counts for more: under 1° counts in full, up to 3° at 0.85, up to 5° at 0.65, up to 7° at 0.4.','contribution = impact × orb weight'],
          ['Add them up','Contributions are summed, halved and added to a baseline of 1.5, then held between −2 and +5.','raw = 1.5 + 0.5 × sum'],
          ['Put it on 0–10','The raw value is rescaled so it reads like any other score. With no contacts at all, a city lands on 5.0.','score = (raw + 2) ÷ 7 × 10']]
          .map(([t,b,f],i)=>`<li><span class="n">${i+1}</span><div style="display:flex;flex-direction:column;gap:8px;min-width:0"><span class="t" style="font-weight:600">${t}</span><span class="mtext">${b}</span>${f?`<code>${f}</code>`:''}</div></li>`).join('')}</ol>
      </section>

      <section class="msec" id="m4" aria-labelledby="m4h">${head(4,'m4','Worked example')}
        <p class="mtext">${d.name} is one of your strongest cities. Here is how its ${r.contacts.length} angle contact${r.contacts.length===1?'':'s'} become${r.contacts.length===1?'s':''} ${r.score10.toFixed(1)}.</p>
        <div class="tablewrap"><table class="work"><caption>Angle contacts for ${d.name}, ${slashes(d.place).split(' / ')[0]}.</caption>
          <thead><tr><th scope="col">CONTACT</th><th scope="col">ORB</th><th scope="col">STRENGTH</th><th scope="col">CONTRIBUTION</th></tr></thead>
          <tbody>${r.contacts.map(c=>`<tr><td>${ptag(c.planet,contactLabel(c))}</td><td>${c.orb.toFixed(1)}°</td><td style="font-family:var(--f-body);font-size:14px">${cap(c.band)}</td><td class="${valClass(c.contrib)}">${signed(c.contrib,2)}</td></tr>`).join('')}</tbody>
          <tfoot><tr><td colspan="3" style="font-family:var(--f-body)">Sum of contributions</td><td>${signed(r.raw,2)}</td></tr></tfoot></table></div>
        ${ex?`<p class="small">Each contribution is the corpus impact times the orb weight. For ${contactLabel(ex)}, ${signed(ex.impact,2)} × ${ex.weight} = ${signed(ex.contrib,2)}.</p>`:''}
        <div class="panel" style="gap:8px">
          <div class="formula"><span class="label-s">Raw</span><span>1.5 + 0.5 × ${r.raw.toFixed(2)} = <b>${raw.toFixed(2)}</b>${clamped?` → held at <b>${r.overall.toFixed(2)}</b>`:''}</span></div>
          <div class="formula"><span class="label-s">Score</span><span>(${r.overall.toFixed(2)} + 2) ÷ 7 × 10 = <b>${r.score10.toFixed(1)}</b></span></div>
        </div>
        <div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap">${scoreBox(r.score10)}<span class="small" style="color:var(--s300)">Inside the ${lab} band, ${band[3].toLowerCase()}.</span></div>
      </section>

      <section class="msec" id="m5" aria-labelledby="m5h">${head(5,'m5','Reading the fields')}
        <p class="mtext">The overall score is built from the same contacts as eleven field scores, which split it by area of life.</p>
        <div class="g4 two">
          <div class="tile" style="gap:12px;padding:20px;border-top:3px solid var(--a600)">
            <div class="cardtop"><span class="t">Fit fields</span><span class="mono" style="font-size:12px;color:var(--s400)">−2 TO +5</span></div>
            <p class="d" style="margin:0;color:var(--s200)">How well a place supports each part of life. Bars start at the 1.50 baseline, so a longer green bar is a stronger placement, a red bar falls below it, and no bar means nothing at the angles.</p>
            ${fieldRows([...new Set([topFit,'career'])],r)}
            <ul class="pillist" aria-label="The nine fit fields">${FIT_KEYS.map(k=>`<li>${CATEGORIES[k].label}</li>`).join('')}</ul>
          </div>
          <div class="tile" style="gap:12px;padding:20px;border-top:3px solid var(--i600)">
            <div class="cardtop"><span class="t">Activation fields</span><span class="mono" style="font-size:12px;color:var(--s400)">0 TO 5</span></div>
            <p class="d" style="margin:0;color:var(--s200)">How much is going on, not how good it is. A high reading means more stimulation or more demands, which some people want and others don’t.</p>
            ${fieldRows(ACT_KEYS.slice().reverse(),r)}
            <ul class="pillist" aria-label="The two activation fields">${ACT_KEYS.map(k=>`<li>${CATEGORIES[k].label}</li>`).join('')}</ul>
          </div>
        </div>
        <p class="small">A field counts as best suited when it clears 1.75, a quarter point above the baseline. Up to four are listed.</p>
      </section>

      <section class="msec" id="m6" aria-labelledby="m6h">${head(6,'m6','What it can’t tell you')}
        <ul class="caveats">${[['Birth time matters most.','The angles turn about 1° every four minutes, so an hour off moves every line about 15° of longitude.'],
          ['Only angle contacts are scored.','Cost of living, visas, climate, language and safety are not in the score. Weigh those separately.'],
          ['The corpus is versioned.',`Scores come from relocation corpus v${CORPUS_VERSION}. A new version can move a city up or down, and the corpus marks its weights as hypotheses still being calibrated.`],
          ['It is a lens, not a forecast.','A high score points to themes that tend to come forward in a place. It does not promise outcomes.']]
          .map(([t,b])=>`<li>${WARN_SVG}<div style="display:flex;flex-direction:column;gap:4px"><span style="font-weight:600">${t}</span><span class="mtext">${b}</span></div></li>`).join('')}</ul>
      </section>
    </div>
  </div>`;
}
const methodView=document.getElementById('methodView'),settingsView=document.getElementById('settingsView'),stageEl=document.getElementById('stage');
let methodBuilt=false;
function showPage(el,titleId){
  closeMenu();if(mapcard.classList.contains('expanded'))setExpanded(false);
  stageEl.hidden=true;methodView.hidden=el!==methodView;settingsView.hidden=el!==settingsView;document.body.classList.add('method-open');
  document.querySelectorAll('[data-view]').forEach(b=>b.removeAttribute('aria-current'));
  window.scrollTo({top:0});
  const h=document.getElementById(titleId);if(h)h.focus({preventScroll:true});
}
function openMethod(){
  if(!methodBuilt){
    methodView.innerHTML=methodHTML();methodBuilt=true;
    document.getElementById('methodBack').addEventListener('click',()=>{setTab(tab);window.scrollTo({top:0});});
    methodView.querySelectorAll('[data-jump]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();
      const t=document.getElementById(a.getAttribute('data-jump'));if(t)t.scrollIntoView({behavior:'smooth',block:'start'});}));
    methodView.querySelectorAll('[data-open-settings]').forEach(b=>b.addEventListener('click',openSettings));
  }
  showPage(methodView,'methodTitle');
}
function closeMethod(){
  if(methodView.hidden&&settingsView.hidden)return;
  methodView.hidden=true;settingsView.hidden=true;stageEl.hidden=false;document.body.classList.remove('method-open');
}
/* ---------- account menu ---------- */
const acctBtn=document.getElementById('acctBtn'),acctMenu=document.getElementById('acctMenu');
function closeMenu(){acctMenu.hidden=true;acctBtn.setAttribute('aria-expanded','false');}
acctBtn.addEventListener('click',e=>{
  e.stopPropagation();const open=acctMenu.hidden;acctMenu.hidden=!open;acctBtn.setAttribute('aria-expanded',String(open));
  if(open){const f=acctMenu.querySelector('[role=menuitem]');if(f)f.focus();}
});
document.addEventListener('click',e=>{if(!e.target.closest('.acct'))closeMenu();});
document.querySelectorAll('[data-open-method]').forEach(b=>b.addEventListener('click',openMethod));
document.querySelectorAll('[data-open-settings]').forEach(b=>b.addEventListener('click',openSettings));
document.addEventListener('keydown',e=>{
  if(e.key!=='Escape')return;
  if(!acctMenu.hidden){closeMenu();acctBtn.focus();}
  else if(mapcard.classList.contains('expanded'))setExpanded(false);
});

/* ---------- account: name, birth profiles and the settings page (boards 19, 20, 20a, 33) ---------- */
function initialsOf(n){const w=String(n||'').trim().split(/\s+/).filter(Boolean);return ((w[0]||'?')[0]+(w.length>1?w[w.length-1][0]:'')).toUpperCase();}
function birthLine(sep){return [fmtBirthDate(BIRTH.date),BIRTH.unknownTime?'time unknown':birthTime(BIRTH),BIRTH.place.n].join(sep||' / ');}
function renderAccount(){
  const ini=initialsOf(BIRTH.name);
  document.getElementById('acctInitials').textContent=ini;
  document.getElementById('menuInitials').textContent=ini;
  document.getElementById('menuName').textContent=BIRTH.name||'You';
  document.getElementById('menuBirth').textContent=birthLine(' / ');
  acctBtn.setAttribute('aria-label',`Account, ${BIRTH.name||'you'}`);
}
function defaultFeatured(){return TT[0]?TT[0].n:null;}

// time zones: the browser's IANA list; a zone's own city (America/Los_Angeles → Los Angeles) places it on the map
let ZONES=null,TZ_PTS=null;
function zoneList(){
  if(ZONES)return ZONES;
  try{ZONES=Intl.supportedValuesOf('timeZone');}catch(e){ZONES=[];}
  if(!ZONES.length)ZONES=['UTC','America/New_York','America/Chicago','America/Denver','America/Phoenix','America/Los_Angeles','America/Anchorage','Pacific/Honolulu',
    'America/Mexico_City','America/Bogota','America/Lima','America/Sao_Paulo','America/Argentina/Buenos_Aires','America/Montevideo','Europe/London','Europe/Lisbon','Europe/Madrid',
    'Europe/Paris','Europe/Berlin','Europe/Rome','Europe/Athens','Europe/Istanbul','Europe/Moscow','Africa/Cairo','Africa/Johannesburg','Asia/Dubai','Asia/Kolkata','Asia/Bangkok',
    'Asia/Manila','Asia/Shanghai','Asia/Tokyo','Australia/Sydney','Pacific/Auckland'];
  if(!ZONES.includes(BIRTH.tz))ZONES=[BIRTH.tz,...ZONES];
  return ZONES;
}
function tzPoints(){
  if(TZ_PTS)return TZ_PTS;
  const byName={};CITY_DB.forEach(c=>{(byName[c._n]=byName[c._n]||[]).push(c);});
  const fits={America:c=>c.lng<-25,Europe:c=>c.lng>-32&&c.lng<70&&c.lat>27,Asia:c=>c.lng>25,Africa:c=>c.lng>-26&&c.lng<64&&c.lat<38,Australia:c=>c.lng>100&&c.lat<-8};
  TZ_PTS=[];
  zoneList().forEach(z=>{
    const parts=z.split('/');if(parts.length<2||parts[0]==='Etc')return;
    const cands=byName[deaccent(parts[parts.length-1].replace(/_/g,' '))];if(!cands)return;
    const ok=fits[parts[0]]||(()=>true),c=cands.find(ok);
    if(c)TZ_PTS.push({z,c:c.c,lat:c.lat,lng:c.lng});
  });
  return TZ_PTS;
}
function guessTz(place){
  const pts=tzPoints(),same=pts.filter(p=>p.c===place.c),pool=same.length?same:pts;
  let best=null,bd=Infinity;pool.forEach(p=>{const d=distKm(p,place);if(d<bd){bd=d;best=p;}});
  return best&&(same.length||bd<1500)?best.z:null;
}
const placeLabel=p=>[p.n,p.a,countryName(p.c)].filter(Boolean).join(', ');
const fmtLatLng=p=>`${Math.abs(p.lat).toFixed(2)}° ${p.lat>=0?'N':'S'}, ${Math.abs(p.lng).toFixed(2)}° ${p.lng>=0?'E':'W'}`;

const PF_ICON={
  plus:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="square" aria-hidden="true"><path d="M12 5 V19 M5 12 H19"/></svg>',
  edit:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square" aria-hidden="true"><path d="M4 20 H8 L19 9 L15 5 L4 16 Z M13 7 L17 11"/></svg>',
  del:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square" aria-hidden="true"><path d="M4 7 H20 M9 7 V4 H15 V7 M6 7 L7 20 H17 L18 7 M10 11 V16 M14 11 V16"/></svg>',
  swap:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square" aria-hidden="true"><path d="M4 8 H18 M14 4 L18 8 L14 12 M20 16 H6 M10 12 L6 16 L10 20"/></svg>',
  search:'<svg class="lead" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square" aria-hidden="true"><circle cx="11" cy="11" r="6"/><path d="M16 16 L20 20"/></svg>'
};
let pfOpen=null;      // the one open form: null, {mode:'add'} or {mode:'edit',id}
let pfConfirm=null;   // id of the profile whose delete is being confirmed
function pfMeta(p){const [y,m,d]=p.date.split('-');return [`${d} / ${m} / ${y}`,p.unknownTime?'Time unknown':birthTime(p),[p.place.n,p.place.c].filter(Boolean).join(', ')].map(x=>`<span>${htm(x)}</span>`).join(' · ');}
function settingsHTML(){
  return `<div class="ptitle" style="margin:0"><h1 class="vtitle" id="settingsTitle" tabindex="-1">Account settings</h1><span class="eyebrow">Account</span></div>
  <div class="setform">
    <section class="card setsec" aria-labelledby="pfHead">
      <div class="sethead"><h2 id="pfHead">Birth profiles</h2><p class="small">Each profile casts its own chart. The active profile drives every line, score and reading.</p></div>
      <div class="setfields">
        <div class="note" role="note"><span class="label-s">Note</span><span>Switching profiles or editing the active one recalculates every line, score and reading. My List keeps its places.</span></div>
        <div class="pfbar"><span class="pfcount"><span class="lbl">Profiles</span><span class="n" id="pfCount"></span></span>
          <button type="button" class="btn pfadd" id="pfAdd" aria-expanded="false">${PF_ICON.plus}Add birth data</button></div>
        <ul class="pflist" id="pfList" aria-label="Birth profiles"></ul>
      </div>
    </section>
  </div>`;
}
function pfFormHTML(p,mode){
  const act=mode==='edit'&&p.id===ACTIVE_ID;
  const note=mode==='add'?'Saving adds this profile to the list. Your active chart stays the same until you switch.'
    :act?'This is the active profile, so saving recalculates every line, score and reading.'
    :'Saving updates this profile only. Switch to it to see its lines.';
  return `<form class="pfform" id="pfForm" novalidate aria-label="${mode==='add'?'New birth profile':'Edit '+htm(p.name)}">
    <div class="fld"><label for="pf-name">Name</label><input class="input" id="pf-name" type="text" maxlength="60" autocomplete="off" placeholder="Their name or a nickname" aria-describedby="pf-name-msg"><span class="help" id="pf-name-msg">Shown in the profile list and the account menu.</span></div>
    <div class="fldrow">
      <div class="fld"><label for="pf-dob">Date of birth</label><input class="input" id="pf-dob" type="date" min="1800-01-01" max="2100-12-31" aria-describedby="pf-dob-msg"><span class="help" id="pf-dob-msg">Type it or pick it from the calendar.</span></div>
      <div class="fld"><label for="pf-tob">Time of birth</label><input class="input" id="pf-tob" type="time" aria-describedby="pf-tob-msg"><span class="help" id="pf-tob-msg"></span>
        <label class="check" for="pf-unknown"><input type="checkbox" id="pf-unknown">Birth time unknown</label></div>
    </div>
    <div class="fld"><label for="pf-city">Birth city</label>
      <div class="field" id="pfCityWrap">${PF_ICON.search}<input class="input" id="pf-city" type="text" autocomplete="off" spellcheck="false" placeholder="Search a city, 24,000+ worldwide" aria-describedby="pf-city-msg"><div class="suggest" id="pfCitySug" hidden></div></div>
      <span class="help" id="pf-city-msg"></span>
      <button type="button" class="textlink" id="pfTzToggle" aria-expanded="false" aria-controls="pfTzFld">Change time zone</button></div>
    <div class="fld" id="pfTzFld" hidden><label for="pf-tz">Time zone</label><select class="input" id="pf-tz" aria-describedby="pf-tz-msg"></select><span class="help" id="pf-tz-msg"></span></div>
    <div class="formerr" id="pfErr" role="alert" hidden></div>
    <div class="pffoot"><p class="small">${note}</p><div class="btns"><button type="button" class="btn ghost" id="pfCancel">Cancel</button><button type="button" class="btn pri" id="pfSave">Save profile</button></div></div>
  </form>`;
}
function pfRowHTML(p){
  const act=p.id===ACTIVE_ID,ed=!!(pfOpen&&pfOpen.mode==='edit'&&pfOpen.id===p.id),nm=htm(p.name||'Unnamed'),id=htm(p.id);
  let acts='';
  if(!ed&&pfConfirm===p.id)
    acts=`<span class="pfask" id="pfask-${id}">Delete ${nm}?</span>
      <button type="button" class="sbtn" data-pf="keep" data-id="${id}">Keep</button>
      <button type="button" class="sbtn danger" data-pf="confirm" data-id="${id}" aria-describedby="pfask-${id}">${PF_ICON.del}Delete</button>`;
  else if(!ed)
    acts=(act?'':`<button type="button" class="sbtn" data-pf="switch" data-id="${id}" aria-label="Switch to ${nm}">${PF_ICON.swap}Switch to</button>`)+
      `<button type="button" class="sbtn" data-pf="edit" data-id="${id}" aria-label="Edit ${nm}">${PF_ICON.edit}Edit</button>`+
      (act?`<button type="button" class="sbtn" data-pf="delete" data-id="${id}" aria-disabled="true" aria-label="Delete ${nm}. Switch to another profile first" title="Switch to another profile before deleting this one">${PF_ICON.del}Delete</button>`
          :`<button type="button" class="sbtn" data-pf="delete" data-id="${id}" aria-label="Delete ${nm}">${PF_ICON.del}Delete</button>`);
  return `<li class="${act?'active':''}${ed?' editing':''}" data-id="${id}"${ed?` aria-label="Editing ${nm}"`:''}>
    <div class="pfrow"><div class="pfid"><span class="pfav" aria-hidden="true">${htm(initialsOf(p.name))}</span><div class="pftext"><div class="pfname"><b>${nm}</b>${act?'<span class="pftag on">Active</span>':''}${ed?'<span class="pftag edit">Editing</span>':''}</div><span class="pfmeta">${pfMeta(p)}</span></div></div>${acts?`<div class="pfacts">${acts}</div>`:''}</div>
    ${ed?pfFormHTML(p,'edit'):''}
  </li>`;
}
function pfNewHTML(){
  return `<li class="editing" aria-label="New birth profile">
    <div class="pfrow"><div class="pfid"><span class="pfav new" aria-hidden="true">${PF_ICON.plus}</span><div class="pftext"><div class="pfname"><b class="dim">New profile</b><span class="pftag edit">Editing</span></div><span class="pfmeta">Not saved yet</span></div></div></div>
    ${pfFormHTML(null,'add')}
  </li>`;
}
function renderProfiles(focusSel){
  const list=document.getElementById('pfList');if(!list)return;
  const n=PROFILES.length,cnt=document.getElementById('pfCount'),add=document.getElementById('pfAdd');
  cnt.textContent=n;cnt.setAttribute('aria-label',`${n} profile${n===1?'':'s'}`);
  const adding=!!(pfOpen&&pfOpen.mode==='add');
  add.setAttribute('aria-expanded',adding?'true':'false');
  if(adding)add.setAttribute('aria-controls','pfForm');else add.removeAttribute('aria-controls');
  list.innerHTML=PROFILES.map(pfRowHTML).join('')+(adding?pfNewHTML():'');
  if(pfOpen)pfWireForm(pfOpen.mode==='add'?null:PROFILES.find(p=>p.id===pfOpen.id),pfOpen.mode);
  if(focusSel){const el=typeof focusSel==='string'?document.querySelector(focusSel):focusSel;if(el)el.focus();}
}
const pfSel=(act,id)=>`#pfList [data-pf="${act}"][data-id="${id}"]`;
function pfWireForm(p,mode){
  const $=id=>document.getElementById(id);
  const nameIn=$('pf-name'),dob=$('pf-dob'),tob=$('pf-tob'),unk=$('pf-unknown'),city=$('pf-city'),sug=$('pfCitySug'),tzSel=$('pf-tz');
  const cityMsg=$('pf-city-msg'),tzMsg=$('pf-tz-msg'),dobMsg=$('pf-dob-msg'),tobMsg=$('pf-tob-msg'),err=$('pfErr'),tzFld=$('pfTzFld'),tzTog=$('pfTzToggle');
  let formPlace=null,tzNote='';
  tzSel.innerHTML=zoneList().map(z=>`<option value="${htm(z)}">${htm(z.replace(/_/g,' '))}</option>`).join('');
  const showTz=on=>{tzFld.hidden=!on;tzTog.hidden=on;tzTog.setAttribute('aria-expanded',on?'true':'false');};
  function offsetNow(){
    if(!/^\d{4}-\d{2}-\d{2}$/.test(dob.value)||!tzSel.value)return null;
    try{return birthUTC({date:dob.value,time:unk.checked||!tob.value?'12:00':tob.value,unknownTime:unk.checked,tz:tzSel.value}).off;}catch(e){return null;}
  }
  function refresh(){
    const off=offsetNow();
    if(formPlace){
      city.classList.add('ok');city.classList.remove('bad');cityMsg.className='help ok';
      cityMsg.innerHTML=`${ICON.check}Matched / ${fmtLatLng(formPlace)} / ${htm(tzSel.value.replace(/_/g,' '))}${off!=null?', '+fmtOffset(off):''}`;
    }else{city.classList.remove('ok');cityMsg.className='help';cityMsg.textContent='Pick a match to set the coordinates and time zone.';}
    tzTog.hidden=!formPlace||!tzFld.hidden;
    tzMsg.className='help';
    tzMsg.textContent=(tzNote?tzNote+' ':'')+(off!=null?`On this date it is ${fmtOffset(off)}, daylight saving included.`:'Worked out from the birth city. Change it if it’s wrong.');
    tobMsg.className='help';tobMsg.textContent=unk.checked?'Noon is used. Lines and angles can be off by up to 90° of longitude.':'Local time where they were born.';
  }
  if(p){
    nameIn.value=p.name||'';dob.value=p.date;tob.value=p.unknownTime?'':p.time;unk.checked=!!p.unknownTime;
    formPlace=Object.assign({},p.place);city.value=placeLabel(formPlace);
    if(!zoneList().includes(p.tz)){ZONES=[p.tz,...ZONES];tzSel.insertAdjacentHTML('afterbegin',`<option value="${htm(p.tz)}">${htm(p.tz)}</option>`);}
    tzSel.value=p.tz;
  }else tzSel.value='';
  tob.disabled=unk.checked;showTz(false);refresh();
  makeCitySearch(city,sug,c=>{
    formPlace={n:c.n,c:c.c,a:c.a||'',lat:c.lat,lng:c.lng};city.value=placeLabel(formPlace);
    const g=guessTz(formPlace);
    if(g){tzSel.value=g;tzNote='Set from the birth city.';}else{tzNote='Couldn’t work out the time zone. Choose it here.';showTz(true);}
    city.classList.remove('bad');refresh();
  });
  city.addEventListener('input',()=>{formPlace=null;refresh();});
  [dob,tob,tzSel].forEach(el=>el.addEventListener('change',()=>{if(el===tzSel)tzNote='';el.classList.remove('bad');if(el===dob){dobMsg.className='help';dobMsg.textContent='Type it or pick it from the calendar.';}refresh();}));
  unk.addEventListener('change',()=>{tob.disabled=unk.checked;tob.classList.remove('bad');refresh();});
  tzTog.addEventListener('click',()=>{showTz(true);tzSel.focus();});
  const cancel=()=>{const back=mode==='add'?'#pfAdd':pfSel('edit',p.id);pfOpen=null;renderProfiles(back);};
  $('pfCancel').addEventListener('click',cancel);
  $('pfForm').addEventListener('keydown',e=>{if(e.key==='Escape'&&sug.hidden){e.preventDefault();cancel();}},true);   // capture: runs before the city search hides its list
  /* Save is a plain button, not a form submit: sandboxed previews without allow-forms block submit
     events, which left the edit open with nothing saved. Enter in a field still saves. */
  $('pfForm').addEventListener('submit',e=>e.preventDefault());
  $('pfForm').addEventListener('keydown',e=>{
    if(e.key!=='Enter'||e.defaultPrevented||e.isComposing||e.target.tagName!=='INPUT')return;   // city search handles its own Enter
    e.preventDefault();save();
  });
  $('pfSave').addEventListener('click',()=>save());
  function save(){
    if($('pfSave').disabled)return;
    err.hidden=true;
    [dob,tob,city].forEach(el=>el.classList.remove('bad'));
    const errs=[],y=+dob.value.slice(0,4);
    if(!/^\d{4}-\d{2}-\d{2}$/.test(dob.value)||y<1800||y>2100){dob.classList.add('bad');dobMsg.className='help err';dobMsg.textContent='Enter a date between 1800 and 2100.';errs.push(dob);}
    else{dobMsg.className='help';dobMsg.textContent='Type it or pick it from the calendar.';}
    if(!unk.checked&&!/^\d{2}:\d{2}/.test(tob.value)){tob.classList.add('bad');tobMsg.className='help err';tobMsg.textContent='Enter the time as hours and minutes, like 14:32, or tick “Birth time unknown”.';errs.push(tob);}
    if(!formPlace){city.classList.add('bad');cityMsg.className='help err';cityMsg.textContent='Choose the birth city from the list, so the coordinates are known.';errs.push(city);}
    else if(!tzSel.value){showTz(true);tzSel.classList.add('bad');tzMsg.className='help err';tzMsg.textContent='Choose the time zone for this birth city.';errs.push(tzSel);}
    if(errs.length){errs[0].focus();return;}
    const name=nameIn.value.trim()||(mode==='add'?`Profile ${PROFILES.length+1}`:'You');
    const b={id:p?p.id:newProfileId(),name,date:dob.value,time:unk.checked?'12:00':tob.value.slice(0,5),unknownTime:unk.checked,place:formPlace,tz:tzSel.value};
    const fail=x=>{err.textContent=(x&&x.message)||'This birth data couldn’t be calculated. Check the date and time zone.';err.hidden=false;};
    const isActive=mode==='edit'&&p.id===ACTIVE_ID;
    if(!isActive){
      try{if(!sameChart(b,DEFAULT_BIRTH))computeEph(b);}catch(x){fail(x);return;}   // check it can be cast before it joins the list
      if(mode==='add')PROFILES.push(b);else PROFILES[PROFILES.findIndex(q=>q.id===b.id)]=b;
      pfOpen=null;saveProfiles();renderProfiles(pfSel('switch',b.id));
      toast(mode==='add'?'Profile added':'Profile saved',mode==='add'?`${name} is in your list. Switch to it to see its chart.`:`${name} is updated. Your active chart hasn’t changed.`);
      return;
    }
    if(sameChart(b,BIRTH)&&b.unknownTime===!!BIRTH.unknownTime&&b.place.n===BIRTH.place.n){   // only the name changed
      BIRTH=Object.assign({},BIRTH,{name});PROFILES[PROFILES.findIndex(q=>q.id===b.id)]=BIRTH;
      pfOpen=null;saveProfiles();saveBirth(BIRTH);renderAccount();methodBuilt=false;renderProfiles(pfSel('edit',b.id));
      toast('Profile saved',`Your name now shows as ${name}.`);return;
    }
    const btn=$('pfSave');btn.disabled=true;btn.textContent='Recalculating…';
    setTimeout(()=>{
      try{applyBirth(b);}catch(x){fail(x);btn.disabled=false;btn.textContent='Save profile';return;}
      PROFILES[PROFILES.findIndex(q=>q.id===b.id)]=b;pfOpen=null;saveProfiles();saveBirth(b);rebuildAll();
      renderProfiles(pfSel('edit',b.id));
      toast('Birth data saved','Every line, score and reading has been recalculated.');
    },30);
  }
}
function pfAction(btn){
  const act=btn.getAttribute('data-pf'),id=btn.getAttribute('data-id'),p=PROFILES.find(q=>q.id===id);if(!p)return;
  if(act==='edit'){pfOpen={mode:'edit',id};pfConfirm=null;renderProfiles('#pf-name');}
  else if(act==='delete'){
    if(id===ACTIVE_ID){toast('This is the active profile','Switch to another profile before deleting this one.');return;}
    pfOpen=null;pfConfirm=id;renderProfiles(pfSel('keep',id));
  }
  else if(act==='keep'){pfConfirm=null;renderProfiles(pfSel('delete',id));}
  else if(act==='confirm'){
    const i=PROFILES.indexOf(p);PROFILES.splice(i,1);pfConfirm=null;saveProfiles();
    const next=PROFILES[Math.min(i,PROFILES.length-1)];
    renderProfiles(next?pfSel('edit',next.id):'#pfAdd');
    toast('Profile deleted',`${p.name} has been removed from your profiles.`);
  }
  else if(act==='switch'){
    btn.disabled=true;btn.lastChild.textContent='Switching…';
    setTimeout(()=>{
      try{applyBirth(p);}catch(x){btn.disabled=false;btn.lastChild.textContent='Switch to';toast('Couldn’t switch',(x&&x.message)||'This profile’s chart couldn’t be calculated.');return;}
      ACTIVE_ID=id;pfOpen=null;pfConfirm=null;saveProfiles();saveBirth(p);rebuildAll();
      renderProfiles(pfSel('edit',id));
      toast(`Switched to ${p.name}`,'Every line, score and reading has been recalculated.');
    },30);
  }
}
document.addEventListener('click',e=>{const sg=document.getElementById('pfCitySug');if(sg&&!e.target.closest('#pfCityWrap'))sg.hidden=true;});
function openSettings(){
  settingsView.innerHTML=settingsHTML();
  pfOpen=null;pfConfirm=null;
  document.getElementById('pfAdd').addEventListener('click',()=>{
    if(pfOpen&&pfOpen.mode==='add'){document.getElementById('pf-name').focus();return;}   // one draft at a time
    pfOpen={mode:'add'};pfConfirm=null;renderProfiles('#pf-name');
    const f=document.getElementById('pfForm');if(f&&f.scrollIntoView)f.closest('li').scrollIntoView({block:'nearest',behavior:'smooth'});
  });
  document.getElementById('pfList').addEventListener('click',e=>{
    const btn=e.target.closest('[data-pf]');if(btn&&!btn.disabled)pfAction(btn);
  });
  renderProfiles();
  showPage(settingsView,'settingsTitle');
}
function rebuildAll(){
  drawLines();
  if(tab==='zones')lineG.selectAll('.acgline,.aglyph').style('display','none');
  currentFeatured=null;buildFeatured();selectFeatured(defaultFeatured());
  Object.keys(PROSE_CACHE).forEach(k=>{delete PROSE_CACHE[k];});
  methodBuilt=false;
  if(zonesImg)paintZones();
  clearFlash();if(!countryStatsDirty&&zonesKeys.length===1)renderZoneCountries();else zonesListStale=true;
  renderCustomLayer();renderCustomList();if(currentCustom)selectCustom(currentCustom);
  renderCompare();renderChart();renderAccount();
}
let toastTimer=null;
function toast(title,body){
  const t=document.getElementById('toast');
  document.getElementById('toastTitle').textContent=title;document.getElementById('toastBody').textContent=body;
  t.hidden=false;clearTimeout(toastTimer);toastTimer=setTimeout(()=>{t.hidden=true;},5000);
}

/* ---------- init ---------- */
syncAspect();
try{window.matchMedia('(max-width:640px)').addEventListener('change',()=>{syncAspect();if(tab==='chart'&&chartPlace)renderChart();});}catch(e){}
setSheet('half');
(async function init(){
  const saved=await storeGet(STORE_KEY);
  if(saved){try{const arr=JSON.parse(saved);if(Array.isArray(arr))CUSTOM=arr.filter(c=>c&&c.n&&typeof c.lat==='number');}catch(e){}}
  renderCustomLayer();renderCustomList();
  await restoreChartCity();
  let start='featured';
  try{const v=localStorage.getItem('ecliptica:view');if(v&&panels[v])start=v;}catch(e){}
  setTab(start);
  selectFeatured(defaultFeatured());
  renderAccount();
  rescaleMarkers();
})();

