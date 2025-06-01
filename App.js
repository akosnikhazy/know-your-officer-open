import React, {useCallback} from 'react';
import { Text, StyleSheet, Button,  Linking, ScrollView } from 'react-native';
import RendfokozatBlock from './components/RendfokozatBlock';
import RendfokozatKep from './components/RendfokozatKep';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>
        Tiszthelyettesek
      </Text>
      <RendfokozatBlock items={tisztHelyettesek} />
      
       <Text style={styles.title}>
        Zászlósok
      </Text>
      <RendfokozatBlock items={zaszlosok} />
      
       <Text style={styles.title}>
        Tisztek
      </Text>
      <RendfokozatBlock items={tisztek} />
      
       <Text style={styles.title}>
        Főtisztek
      </Text>
      <RendfokozatBlock items={foTisztek} />
      
       <Text style={styles.title}>
       Tábornokok
      </Text>
      <RendfokozatBlock items={tabornokok} />
      {/*<Text style={styles.title}>
       Vezérezredes
      </Text>
       <RendfokozatBlock items={vezerezredes} />*/}
     
       <Text style={styles.bigtitle}>Fejfedő színek</Text>
        <Text style={styles.sapkak}>
        <Text style={styles.kek}>Kék</Text>: ORFK, BRFK{"\n"}
        <Text style={styles.piros}>Piros</Text>: Készenléti Rendőrség{"\n"}
        <Text style={styles.zold}>Zöld</Text>: Határvadász{"\n"}
        </Text>
      <Text style={styles.bigtitle}>A rendőri hivatás etikai kódexe</Text>
<Text style={styles.hitvallas}>
    
     <Text style={styles.title}>1. A köz szolgálatáról és a testülethez tartozásról</Text>{"\n"}{"\n"}
    A rendőr szolgálatát a törvényekben kifejeződő társadalmi akaratnak megfelelően, a köz érdekében, a társadalom által biztosított lehetőségek között látja el. Önként vállalt hivatásával szemben különleges társadalmi elvárások érvényesülnek, melyekre szolgálati viszonyának fennállása alatt mindvégig figyelemmel kell lennie. Hivatását az előírások és a vezetők utasításainak betartásával, az esküjében foglaltak szerint gyakorolja, tudása legjavát nyújtja. Cselekedeteivel erősíti a testület belső egységét és a szervezet jó hírnevét.{"\n"}{"\n"}
     <Text style={styles.title}>2. A tisztességről</Text>{"\n"}{"\n"}
    A rendőr becsületes, fegyelmezett, kötelességtudó, visszautasít minden olyan tartalmú nyílt vagy burkolt kérést, amely az előírásoktól való eltérésre irányul. Elutasítja a korrupciót, annak valamennyi formája ellen fellép. Elutasít minden olyan ajándékot, előnyt vagy szívességet, ami alkalmas lehet elfogulatlanságának kétségbevonására. Rendőri mivoltát, a tudomására jutott információkat jogtalan előny szerzésére, hátrány okozására nem használja, annak még a látszatát is elkerüli.{"\n"}{"\n"}
    <Text style={styles.title}>3. Az erőszakról</Text>{"\n"}{"\n"}
    A rendőr erőszakot kivételesen, kizárólag a törvényes cél elérése érdekében, jogszerű formában és szükséges mértékben alkalmaz, törekszik a következmények mérséklésére. Kerüli a hatalmaskodást és az önkényes erőszak minden formáját.{"\n"}{"\n"}
    <Text style={styles.title}>4. A hátrányos megkülönböztetés tilalmáról</Text>{"\n"}{"\n"}
    A rendőr elismeri és védi az emberi méltóságot, tiszteletben tartja az emberi és a személyiségi jogokat. Elfogulatlanul jár el nemre, korra, állampolgárságra, etnikai hovatartozásra, vallási és politikai meggyőződésre, társadalmi és vagyoni helyzetre tekintet nélkül.{"\n"}{"\n"}
    <Text style={styles.title}>5. Az emberségről és a segítségnyújtásról</Text>{"\n"}{"\n"}
    A rendőr a ráruházott hatalom alkalmazása során megfontolt és mértéktartó, intézkedéseit előítéletektől és indulatoktól mentesen hajtja végre, kerüli a szükségtelen konfliktusok kialakítását. Nem alkalmaz kínzást, könyörtelen, embertelen vagy megalázó bánásmódot és ezt mástól sem tűri el. Empátiával fordul embertársai felé, védelmet és segítséget nyújt a rászorulóknak.{"\n"}{"\n"}
    <Text style={styles.title}>6. A bajtársiasságról</Text>{"\n"}{"\n"}
    A rendőr együttműködik munkatársaival, velük kulturáltan, a kölcsönös tisztelet és megbecsülés szellemében érintkezik. Önzetlen támogatást nyújt, a problémák megoldását elősegítő légkör kialakítására törekszik. Tudását, gyakorlati tapasztalatait megosztja munkatársaival. Áldozatkészen védi társai életét, testi épségét, óvja jó hírnevüket. Követi a jó példával elöljárókat, elítéli az erkölcstelen magatartást tanúsítókat.{"\n"}{"\n"}
    <Text style={styles.title}>7. A felelősségről</Text>{"\n"}{"\n"}
    A rendőr szolgálati feladatai végrehajtásáért, döntéseiért jogi, erkölcsi és anyagi értelemben is felelősséggel tartozik. Döntési, cselekvési kötelezettségét mindenkor késedelem nélkül, aktívan vállalja, a felelősséget másra alaptalanul nem hárítja át. Hibás döntései következményeit lehetőségei szerint orvosolja. Tudatában van annak, hogy saját személyén keresztül az egész testület megítéléséért is felelős.{"\n"}{"\n"}
    <Text style={styles.title}>8. A munka minőségéről</Text>{"\n"}{"\n"}
    A rendőr jól ismeri a tevékenységét szabályozó előírásokat, munkáját lelkiismeretesen, magas színvonalon, törvényesen, szakszerűen, hatékonyan végzi. Bővíti szakmai ismereteit, fejleszti képességeit. Az elkövetett hibák elemzésével mindent megtesz azért, hogy azok ne ismétlődjenek meg.{"\n"}{"\n"}
    <Text style={styles.title}>9. Az információról</Text>{"\n"}{"\n"}
    A rendőr betartja a titok- és adatvédelmi rendelkezéseket, szolgálatban és a magánéletben egyaránt. Kerül minden olyan megnyilvánulást, ami a szervezetről, annak tevékenységéről, feladatairól, valamint tagjairól félreérthető, félrevezető vagy szükségtelen információk nyilvánosságra jutását teszi lehetővé.{"\n"}{"\n"}
    <Text style={styles.title}>10. A megjelenésről</Text>{"\n"}{"\n"}
    A rendőr megjelenésével is emeli a testület társadalmi megbecsültségét, tiszteletet és bizalmat ébreszt. Egyenruhája és polgári öltözéke tiszta, rendezett. Munkahelyén kerüli a szélsőséges, kihívó, alkalomhoz nem illő viseletet, rendben és tisztán tartja környezetét.{"\n"}{"\n"}
    <Text style={styles.title}>11. A vezetőkről</Text>{"\n"}{"\n"}
    A vezető tiszteletben tartja beosztottjai emberi méltóságát, gondoskodik róluk, megbecsüléssel és részrehajlás nélkül irányítja őket. Személyes példamutatásával is ösztönzi munkatársait, igényli és meghallgatja véleményüket, tanácsaival és iránymutatásaival segíti a munkavégzést. Betartja és betartatja a törvényeket, magas szintű követelményeket támaszt.{"\n"}{"\n"}
    <Text style={styles.title}>12. A szolgálaton kívüli magatartásról</Text>{"\n"}{"\n"}
    A rendőr magánéletében is példamutató, nem sérti a közerkölcs és a jó ízlés szabályait. Lehetőségei szerint kiegyensúlyozott magánélet megteremtésére törekszik. Szabadidejében nem folytat olyan tevékenységet, amely hivatásával összeegyeztethetetlen. Úgy alakítja kapcsolatrendszerét, hogy ne kerüljön szolgálati jogosultságaival és kötelezettségeivel ellentétes függőségi helyzetbe.{"\n"}{"\n"}
    <Text style={styles.title}>13. A közbizalomról</Text>{"\n"}{"\n"}
    A Rendőrség működéséhez a közbizalom elengedhetetlenül szükséges, ezért különösen károsnak tekinthetők azok a szolgálaton kívüli cselekmények, amelyek azt veszélyeztetik. A közbizalom súlyos veszélyeztetésére alkalmas magatartásnak tekinthető különösen: ha a rendőr szándékos vagy súlyos következménnyel járó gondatlan bűncselekményt követ el; ha tulajdon elleni szabálysértést követ el; ha felettese felhívása ellenére olyan szerencsejátékot folytat, amely miatt súlyos anyagi függősége alakult ki; ha botrányos életvezetése vagy italozó életmódja miatt személyes tekintélyét környezetében elvesztette; ha kábítószert fogyaszt; ha bűnöző életmódot folytató személlyel nem szolgálati célú, elvtelen kapcsolatot tart fenn; ha nyilvánvalóan jogellenes szervezet rendezvényein rendszeresen megjelenik vagy annak tevékenységében részt vesz.
</Text>
      <OpenURLButton url={supportedURL}>App Source Code</OpenURLButton>
    </ScrollView>
  );
}
const supportedURL = 'https://github.com/akosnikhazy/know-your-officer';
const OpenURLButton = ({url, children}) => {
  const handlePress = useCallback(async () => {
    
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return <Button title={children} onPress={handlePress} />;
};

const tisztHelyettesek = [
  {
    icon: (
      <RendfokozatKep imageSource={require('./assets/rendfokozatok/01-ormester.png')} rendfokozatMegnevezes='Őrmester' />
    )
  },
  {
    icon: (
      <RendfokozatKep imageSource={require('./assets/rendfokozatok/02-torzsormester.png')} rendfokozatMegnevezes='Törzsörmester' />
    )
  },
  {
    icon: (
      <RendfokozatKep imageSource={require('./assets/rendfokozatok/03-fotorzsormester.png')} rendfokozatMegnevezes='Főtörzsörmester' />
    )
  }

];

const zaszlosok = [
  {
    icon: (
      <RendfokozatKep imageSource={require('./assets/rendfokozatok/04-zaszlos.png')} rendfokozatMegnevezes='Zászlós' />
    )
  },
  {
    icon: (
       <RendfokozatKep imageSource={require('./assets/rendfokozatok/05-torzszaszlos.png')} rendfokozatMegnevezes='Törzszászlós' />
    )
  },
  {
    icon: (
       <RendfokozatKep imageSource={require('./assets/rendfokozatok/06-fotorzszaszlos.png')} rendfokozatMegnevezes='Főtörzszászlós' />
    )
  }

];

const tisztek = [
  {
    icon: (
       <RendfokozatKep imageSource={require('./assets/rendfokozatok/07-hadnagy.png')} rendfokozatMegnevezes='Hadnagy' />
    )
  },
  {
    icon: (
      <RendfokozatKep imageSource={require('./assets/rendfokozatok/08-fohadnagy.png')} rendfokozatMegnevezes='Főhadnagy' />
    )
  },
  {
    icon: (
       <RendfokozatKep imageSource={require('./assets/rendfokozatok/09-szazados.png')} rendfokozatMegnevezes='Százados' />
    )
  }

];

const foTisztek = [
  {
    icon: (
       <RendfokozatKep imageSource={require('./assets/rendfokozatok/10-ornagy.png')} rendfokozatMegnevezes='Őrnagy' />
    )
  },
  {
    icon: (
       <RendfokozatKep imageSource={require('./assets/rendfokozatok/11-alezredes.png')} rendfokozatMegnevezes='Alezredes' />
    )
  },
  {
    icon: (
       <RendfokozatKep imageSource={require('./assets/rendfokozatok/12-ezredes.png')} rendfokozatMegnevezes='Ezredes' />
    )
  }

];

const tabornokok = [
  {
    icon: (
      <RendfokozatKep imageSource={require('./assets/rendfokozatok/13-dandartabornok.png')} rendfokozatMegnevezes='Dandártábornok' />
    )
  },
  {
    icon: (
       <RendfokozatKep imageSource={require('./assets/rendfokozatok/14-vezerornagy.png')} rendfokozatMegnevezes='Vezérőrnagy' />
    )
  },
  {
    icon: (
       <RendfokozatKep imageSource={require('./assets/rendfokozatok/15-altabornagy.png')} rendfokozatMegnevezes='Altábornagy' />
    )
  }

];

const vezerezredes = [
    {
    icon: (
      <RendfokozatKep imageSource={require('./assets/rendfokozatok/16-vezerezredes.png')} rendfokozatMegnevezes='Pintér Sándor' />
    )
  }

]

const styles = StyleSheet.create({
  container: {
     overflowY: 'scroll',
    backgroundColor: '#ecf0f1',
    padding:10,
    
    
  },
  bigtitle:{
    fontWeight: 'bold',
    textAlign:'center',
    fontSize:25,
    margin:10,
    color:'#487dff'
  },
  title: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  hitvallas:{
    padding:5,
    textAlign:'justify'
  },
  sapkak:{
    padding:20
  },
  kek:{
    color:'#4669a1',
    fontWeight:'bold'
  },
  piros:{
    color:'#ce3c61',
    fontWeight:'bold'
  },
  zold:{
    color:'#3e697c',
    fontWeight:'bold'
  }

});
