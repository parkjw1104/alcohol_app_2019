function Alcohol({name,picture}){
  return (
    <div>
  <h2>I like {name}</h2>
  <img src={picture}/>
  </div>
  );

}

const alcoholILike = [
  {
    name: 'Soju',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.i0xxvU_laI9FQfixe6lKggHaHL%26pid%3DApi&f=1'
  },
  {
    name: 'Bear',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.s5KoCoaK8V2SjCp7Sfpm1AHaH5%26pid%3DApi&f=1'
  },
  {
    name: 'Makgeolli',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.CMURZPZSpJzd7Na_9tVvTQHaFj%26pid%3DApi&f=1'
  },
  {
    name: 'Vodka',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.yfCj_Bm_Arva5mkKE7G-8QHaLb%26pid%3DApi&f=1'
  },
  {
    name: 'cocktail',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.JMDVbaUxX_gsZZy7vIpCEgHaHa%26pid%3DApi&f=1'
  }
];

function App() {
  return (
    <div>
     {alcoholILike.map(glass => <Alcohol key= {glass.name} name={glass.name} picture = {glass.image}/>)}
    </div>
  );
}

export default App;
