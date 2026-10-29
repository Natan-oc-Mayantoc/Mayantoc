# Mayantoc website — paano gamitin

## Mga inayos sa bersyong ito (fixes)

- **Naayos ang sirang layout sa 8 pahina** (Balita, Events, Pamahalaan, Serbisyo,
  Barangay, Parangal, Transparency, Contact): may nawawalang closing `</div>`
  sa header na nagdudulot ng maling pag-nest ng buong pahina sa ilalim ng
  navigation bar kapag binuksan sa browser. Naitama na ito.
- **Naitama ang mga larawan na hindi lumalabas**: tumutugma na ngayon ang mga
  filename sa code (halimbawa `assets/mayantoc_bg.jpg`) sa aktwal na mga
  na-upload na larawan.
- **Naayos ang dark mode ng orasan sa header** — hindi na gumagana ang kulay
  nito dati sa dark mode dahil sa maling CSS selector.
- **Pinalitan ang generic na stock photo sa About page** ng tunay na larawan
  ng Munisipyo ng Mayantoc.
- Dinagdagan ng maliliit na premium touch (arrow na gumagalaw sa hover ng
  button, mas malinaw na dark-mode contrast) nang hindi ginagalaw ang
  pangkalahatang disenyo at palette.


## Istraktura

```
mayantoc-site/
├── index.html          Home — hero + carousel
├── about.html          Tungkol sa bayan
├── government.html     Mga opisyal at departamento
├── services.html       Serbisyo + live search
├── barangays.html      24 barangay + search at A–Z filter
├── news.html           Balita (featured + archive grid)
├── events.html         Kalendaryo ng gawain
├── awards.html         Awarding page + gallery carousel
├── transparency.html   Budget, procurement, citizen's charter
├── contact.html        Contact form + emergency numbers
└── assets/
    ├── style.css       Lahat ng disenyo (isang palette lang)
    ├── data.js         LAHAT ng content — dito kayo mag-edit
    ├── app.js          Smooth scroll, carousel, search, dark mode
    └── mayantoc.jpg    ← ILAGAY DITO ANG LOGO
```

## 1. Logo

Ilagay ang inyong file na `mayantoc.jpg` sa loob ng `assets/`. Susi:
ang filename ay dapat **eksaktong `mayantoc.jpg`** (maliit na letra).

Kung wala pa ang file, hindi masisira ang site — lalabas na lang ang
letrang **M** sa loob ng bilog hanggang mailagay ninyo ang logo.
Para sa pinakamalinis na hitsura: square na larawan, 400×400px pataas.

## 2. Pagpalit ng content

Buksan ang `assets/data.js`. Isang file lang ang ie-edit ninyo para sa
lahat ng pahina — barangay, serbisyo, opisyal, balita, events, parangal,
at emergency contacts.

Ang lahat ng `[OFFICIAL INFORMATION TO BE INSERTED]` ay palitan ng totoong
impormasyon mula sa munisipyo. Pakisuri rin ang listahan ng 24 barangay
laban sa opisyal na rekord ng LGU bago i-publish.

## 3. Kulay

Nasa taas ng `style.css` ang buong palette:

| Variable | Kulay | Gamit |
|---|---|---|
| `--forest` | `#3A7A55` | primary green |
| `--deep-green` | `#24503A` | header/footer background |
| `--emerald` | `#4F9668` | hover accent |
| `--gold` | `#E3B54B` | dilaw na accent |
| `--gold-light` | `#F0D08A` | hover ng dilaw |
| `--off-white` | `#FAF8F1` | background ng pahina |

Malambot ang mga kulay — walang neon na dilaw at walang itim na
background, kaya hindi masakit sa mata sa matagal na pagbabasa.
Palitan lang ang hex value sa itaas at magbabago ang buong site.

## 4. Smooth scroll

Naka-on ang inertia scrolling sa desktop (mouse wheel, arrow keys,
PageUp/PageDown). Sa mobile at sa mga naka-"reduced motion" na device,
native scroll ang gamit para hindi lumag.

Kung gusto ninyong mas mabagal o mas mabilis ang glide, palitan ang
`ease: 0.085` sa `assets/app.js` — mas maliit, mas mahaba ang glide.

## 5. Pagpapatakbo

Doble-klik lang ang `index.html`. Para sa totoong hosting, i-upload ang
buong `mayantoc-site` folder sa web host — walang kailangang i-install.

## Paalala

Demo pa lamang ang contact form — kailangan itong ikabit sa opisyal na
email o sistema ng munisipyo bago gamitin sa publiko. Ang mga larawan sa
carousel ay stock photos; palitan ng totoong litrato ng Mayantoc.
