# Frastra UI - Proje Analizi

Bu doküman, Frastra UI projesinin yapısını, teknolojilerini ve felsefesini başka bir LLM'in veya geliştiricinin kolayca anlayabilmesi için hazırlanmıştır.

## 1. Proje Felsefesi ve Amacı

Frastra UI, geleneksel bir bileşen kütüphanesi değildir. Bir NPM paketi olarak kurulup projelere dahil edilmek yerine, "kopyala-yapıştır" prensibiyle çalışan bir bileşen koleksiyonudur. Temel amaç, geliştiricilere tamamen kendi kontrollerinde olan, kolayca özelleştirilebilir ve projenin tasarım sistemine tam uyum sağlayabilen, özenle tasarlanmış temel bileşenler sunmaktır.

Bu yaklaşım sayesinde geliştiriciler, kütüphane bağımlılıklarının getirdiği kısıtlamalardan, stil çakışmalarından ve gereksiz kod yükünden kurtulur. Her bileşenin kaynak kodu doğrudan projeye eklenir, bu da tam şeffaflık ve sınırsız esneklik sağlar.

## 2. Teknoloji Yığını

Proje, modern ve performans odaklı teknolojiler üzerine kurulmuştur:

-   **Framework**: Next.js 15
-   **Dil**: JavaScript (React 19 ile)
-   **Stil**:
    -   **Tailwind CSS 4**: Utility-first CSS yaklaşımı için.
    -   **`clsx` & `tailwind-merge`**: Koşullu ve çakışmayan class birleştirmeleri için.
    -   **`tailwindcss-animate`**: Animasyonlu geçişler için.
    -   **`class-variance-authority` (CVA)**: Bileşenlerin farklı varyantlarını (renk, boyut vb.) yönetmek için.
-   **Temel Bileşen Altyapısı**: Proje, harici UI kütüphanelerine (Radix, MUI vb.) dayanmak yerine kendi temel bileşen soyutlamalarını oluşturur.
-   **İkonlar**: `@heroicons/react`.
-   **Kod Vurgulama (Dokümantasyon)**: `prism-react-renderer`, dokümantasyon sitesindeki kod örneklerinin renklendirilmesi için kullanılır.

## 3. Tasarım Sistemi Kuralları (Temel)

Proje, Tailwind CSS'in varsayılan tasarım sistemini temel alır ve bunu birkaç temel kural ile genişletir.

-   **Renkler**:
    -   Açık ve koyu tema desteği mevcuttur.
    -   Ana renkler CSS değişkenleri ile tanımlanmıştır (`globals.css`):
        -   `--background`: Sayfa arka planı (Açık: `#ffffff`, Koyu: `#0a0a0a`)
        -   `--foreground`: Ana metin rengi (Açık: `#171717`, Koyu: `#ededed`)
-   **Tipografi**:
    -   Ana font olarak sisteme varsayılan `Arial, Helvetica, sans-serif` ailesi kullanılmaktadır.
-   **Stil Tutarlılığı**:
    -   Bileşenlerin önizleme pencereleri (`PreviewAndCode.js`) `border-white/10` ile ince bir çerçeveye sahiptir. Bu, arayüzde tutarlı bir kart ve panel stili olduğunu gösterir.
-   **Animasyon**:
    -   `tailwind.config.mjs` içinde `accordion-down` ve `accordion-up` gibi özel animasyonlar tanımlanmıştır. Bu, açılır/kapanır elemanlar için standart bir animasyon davranışı belirler.
-   **Duyarlılık (Responsiveness)**: Tüm bileşenler, mobil cihazlardan geniş masaüstü ekranlara kadar tüm ekran boyutlarında düzgün görünmeli ve çalışmalıdır. Bu, projenin temel gereksinimlerinden biridir.

## 4. Klasör Yapısı

Projenin ana mantığı `src` klasörü altında iki ana bölüme ayrılmıştır:

-   `src/components`: UI kütüphanesinin yeniden kullanılabilir bileşenlerinin kaynak kodlarının bulunduğu yerdir. Her bileşen kendi klasöründe, farklı varyasyonları (örn. `PrimaryButton`, `OutlineButton`) ile birlikte bulunur.
-   `src/app`: Next.js App Router yapısı kullanılarak oluşturulan dokümantasyon sitesinin sayfalarını içerir. Bu dizin altında, her bileşen için canlı önizlemelerin, kullanım talimatlarının ve kod örneklerinin yer aldığı sayfalar bulunur.

### Detaylı Yapı:

```
frastra/
├── src/
│   ├── app/                    # Dokümantasyon ve sunum katmanı (Next.js App Router)
│   │   ├── components/         # Her bir UI bileşeni için dokümantasyon sayfaları
│   │   │   └── [component-name]/
│   │   │       ├── page.js     # Bileşenin canlı önizlemesi ve açıklamaları
│   │   │       └── codes.js    # Sayfada gösterilen kod örnekleri
│   │   ├── get-started/        # "Başlarken" bölümü (Giriş vb.)
│   │   ├── layout.js           # Ana sayfa düzeni
│   │   └── page.js             # Ana sayfa
│   │
│   └── components/             # Asıl UI Kütüphanesi
│       ├── [component-name]/   # Her bileşenin kendi klasörü
│       │   └── Component.js    # Bileşenin kaynak kodu
│       ├── Sidebar.js          # Dokümantasyon sitesi için kenar çubuğu
│       ├── Navbar.js           # Dokümantasyon sitesi için navigasyon çubuğu
│       └── Footer.js           # Dokümantasyon sitesi için alt bilgi
│
├── public/                     # Statik dosyalar (resimler, ikonlar)
├── package.json                # Proje bağımlılıkları ve script'leri
└── tailwind.config.mjs         # Tailwind CSS yapılandırması
```

## 5. Sayfa Yapısı ve Layout Kuralları

Her dokümantasyon sayfası, tutarlı bir kullanıcı deneyimi sağlamak için standart bir layout yapısını takip eder. Bu yapı, içeriğin sunumunu ve sayfalar arası gezinmeyi kolaylaştırır. Bir dokümantasyon sayfasının temel yapısı aşağıdaki ana bölümlerden oluşur:

```jsx
<div className='flex gap-16'>
  {/* Ana İçerik Alanı */}
  <main className='flex-1 min-w-0 overflow-hidden'>
    {/* 1. Sayfa Başlığı ve Açıklaması */}
    <div className='space-y-4'>
      <h1 className='text-3xl font-bold'>Sayfa Başlığı</h1>
      <p className='text-white/70'>
        Sayfa veya bileşen hakkında kısa bir açıklama.
      </p>
    </div>

    {/* 2. İçerik Bölümleri */}
    <div className='space-y-12 mt-10'>
      <section id='bolum-1' className='space-y-4 scroll-mt-24'>
        <h2 className='text-xl font-semibold'>Bölüm Başlığı 1</h2>
        <PreviewAndCode code={...}>
          {/* Bileşen Önizlemesi */}
        </PreviewAndCode>
      </section>
      {/* Diğer bölümler... */}
    </div>

    {/* 3. Sayfa Altı Navigasyonu */}
    <ComponentFooter
      currentComponent='Mevcut Sayfa'
      nextComponent={{ name: 'Sonraki Sayfa', href: '...' }}
    />
    
    {/* 4. Genel Footer */}
    <Footer />
  </main>

  {/* Sağ Kenar Çubuğu (İçindekiler) */}
  <aside className='w-[280px] shrink-0'>
    <div className='sticky top-24 ...'>
      <TableOfContents headings={[...]} />
    </div>
  </aside>
</div>
```

### Layout Bileşenleri ve Sorumlulukları

*   **Ana Kapsayıcı (`div.flex`)**: Sayfayı, ana içerik ve sağ kenar çubuğu olarak iki ana sütuna ayırır. `gap-16` class'ı ile sütunlar arasında boşluk bırakır.
*   **Ana İçerik (`main`)**:
    *   **Başlık Alanı**: `<h1>` ve `<p>` etiketleriyle sayfanın ne hakkında olduğunu net bir şekilde belirtir.
    *   **Bölümler (`section`)**: Sayfanın ana içeriği, `id` verilmiş `section` etiketleri ile mantıksal olarak ayrılır. Bu `id`'ler, sağdaki içindekiler tablosu tarafından kullanılır.
    *   **`PreviewAndCode`**: Bir UI elemanının canlı önizlemesini ve kullanım kodunu bir arada sunan kritik bir bileşendir.
        -   **Önemli Not**: `code` prop'una geçirilen kod, bileşenin önizlemede görünen halini oluşturmak için gereken **tüm kodu** içermelidir. Buna importlar, yardımcı değişkenler ve JSX'in tamamı dahildir. Amaç, kullanıcının kodu kopyaladığında önizlemenin aynısını kendi projesinde elde edebilmesidir (What You See Is What You Get - WYSIWYG).
    *   **`ComponentFooter`**: Kullanıcıların dokümantasyon sayfaları arasında sıralı bir şekilde (önceki/sonraki) gezinmesini sağlar.
    *   **`Footer`**: Sitenin genel alt bilgi bölümünü her sayfanın en altına ekler.
*   **Sağ Kenar Çubuğu (`aside`)**:
    *   **`TableOfContents`**: Sayfa içindeki `section` başlıklarına hızlıca atlamayı sağlayan bir içindekiler tablosu oluşturur. `headings` prop'u ile bölüm başlıklarını ve `id`'lerini alır. Sayfa kaydırıldığında sabit kalması (`sticky`) önemlidir.

## 6. WYSIWYG Prensibi (What You See Is What You Get)

Bu proje için en kritik kuraldır: **Kullanıcının önizlemede gördüğü ile kopyaladığı kodun aynı sonucu vermesi**. Bu prensip, "kopyala-yapıştır" felsefesinin temelini oluşturur.

### 6.1. Prensip Tanımı

WYSIWYG prensibi şu anlama gelir:
1. Kullanıcı dokümantasyon sitesinde bir bileşenin **önizlemesini** görür
2. Kodu **kopyalar** ve kendi projesine yapıştırır  
3. Kendi projesinde **tamamen aynı görsel sonucu** elde eder

### 6.2. Hangi Kodlar Senkronize Olmalı?

#### A) State Başlangıç Değerleri
**Problem Örneği:**
```jsx
// page.js'de (önizleme)
const [plan, setPlan] = useState('pro')  // "Pro" seçili görünür

// codes.js'de (kopyalanacak kod) 
const [plan, setPlan] = useState('free') // "Free" seçili gelir
```

**Doğru Yaklaşım:** Her ikisi de aynı değeri kullanmalı.

#### B) Veri Yapıları
**Problem Örneği:**
```jsx
// page.js'de
const items = [
  { name: 'Home', href: '#' },
  { name: 'Components', href: '#' },
  { name: 'Breadcrumb', href: '#' }
]

// codes.js'de
const items = [
  { name: 'Ana Sayfa', href: '/' },  // Farklı isimler!
  { name: 'Bileşenler', href: '/components' }
]
```

**Doğru Yaklaşım:** Array içeriği tamamen aynı olmalı.

#### C) Props ve Parametreler
**Problem Örneği:**
```jsx
// page.js'de
<RadioGroup name="plan" options={options} value={plan} onChange={setPlan} />

// codes.js'de  
<RadioGroup options={options} value={plan} onChange={setPlan} />
// "name" prop'u eksik!
```

**Doğru Yaklaşım:** Tüm props aynı olmalı.

### 6.3. PreviewAndCode ile WYSIWYG Implementasyonu

`PreviewAndCode` bileşeni bu prensibi desteklemek için tasarlanmıştır:

```jsx
<PreviewAndCode codeTabs={exampleTabs}>
  <ExampleComponent value="demo" />  {/* Önizleme */}
</PreviewAndCode>
```

`codes.js` dosyasındaki kod:
```jsx
const exampleTabs = [
  { 
    label: "Component", 
    code: `<ExampleComponent value="demo" />`  // Aynı props!
  }
]
```

### 6.4. Yaygın WYSIWYG İhlalleri ve Çözümleri

#### İhlal 1: Farklı useState Değerleri
```jsx
// ❌ Yanlış
// page.js: useState('option1')
// codes.js: useState('option2') 

// ✅ Doğru  
// Her ikisi de: useState('option1')
```

#### İhlal 2: Farklı Array İçerikleri
```jsx
// ❌ Yanlış
// page.js: [{ id: 1, name: 'Test' }]
// codes.js: [{ id: 1, name: 'Example' }]

// ✅ Doğru
// Her ikisi de: [{ id: 1, name: 'Test' }]
```

#### İhlal 3: Eksik Import/Dependency
```jsx
// ❌ Yanlış
// Önizlemede: import { HomeIcon } from '@heroicons/react/20/solid' var
// codes.js'de: import eksik

// ✅ Doğru  
// codes.js'de tüm importlar dahil edilmeli
```

### 6.5. WYSIWYG Doğrulama Checklist

Yeni bir bileşen eklerken veya mevcut olanı güncellerken:

- [ ] State başlangıç değerleri aynı mı?
- [ ] Array/Object içerikleri tamamen aynı mı?  
- [ ] Tüm props değerleri aynı mı?
- [ ] Import statement'ları eksik değil mi?
- [ ] CSS class'ları aynı sonucu veriyor mu?
- [ ] Kullanıcı kodu kopyalayınca aynı görsel sonucu alacak mı?

### 6.6. WYSIWYG İhlali Nasıl Test Edilir?

1. Dokümantasyon sayfasında önizlemeyi incele
2. "Component" tabından kodu kopyala
3. Yeni bir test projesinde yapıştır
4. Sonucun önizlemeyle %100 aynı olduğunu doğrula

Bu test başarısız olursa, WYSIWYG prensibi ihlal edilmiştir ve düzeltilmelidir.

## 7. Mevcut Bileşenler Listesi

Aşağıda `src/components` dizini altında geliştirilmiş olan UI bileşenlerinin bir listesi bulunmaktadır:

-   Accordion
-   Alert
-   Avatar
-   Badge
-   Breadcrumb
-   Button
-   Card
-   Checkbox
-   Dropdown Menu
-   Input
-   Layout (Box, Flex vb. yardımcı bileşenler)
-   List
-   Modal
-   Pagination
-   Radio Group
-   Select
-   Skeleton
-   Spinner / Loader
-   Switch
-   Table
-   Tabs
-   Textarea
-   Toast
-   Tooltip

Bu doküman, projenin mevcut durumunu yansıtmaktadır ve yeni bileşenler eklendikçe veya teknoloji yığını değiştikçe güncellenmelidir.

---

## LLM'ler için Notlar

Bu projeyle etkileşim kuran bir LLM olarak, aşağıdaki prensiplere uymanız beklenmektedir:

1.  **Minimalist Yaklaşım**: Projenin temel felsefesi basitlik ve kontrol olduğu için, ekleyeceğiniz veya düzenleyeceğiniz kodlar da bu felsefeye uygun olmalıdır. Gereksiz karmaşıklıktan, soyutlama katmanlarından veya harici bağımlılıklardan kaçının.
2.  **Mevcut Yapıya Saygı**: Yeni bir bileşen veya sayfa eklerken, projedeki mevcut kodlama stillerini, dosya yapısını ve isimlendirme kurallarını takip edin. Tutarlılık, projenin en önemli önceliklerinden biridir.
3.  **Odaklı Değişiklikler**: Kullanıcı tarafından talep edilen görevin dışına çıkmayın. İstenmeyen dosyaları veya kod bloklarını "düzeltmekten" veya "iyileştirmekten" kaçının. Sadece istenen değişikliği, en temiz ve en basit şekilde yapın.
4.  **WYSIWYG Prensibi**: Bu projenin en kritik kuralıdır. Her zaman önizlemede gösterilen ile kopyalanacak kodun aynı sonucu vermesini sağlayın. State değerleri, props, veri yapıları ve import'lar tamamen senkronize olmalıdır. Bu prensip ihlal edilirse, kullanıcı deneyimi bozulur ve projenin temel felsefesi çiğnenir. 