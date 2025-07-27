export async function getStaticProps() {
  return {
    props: {
      pageId: "landing"
    }
  }
}

export default function Landing() {
  return <div className="max-w-sm w-full lg:max-w-full lg:flex">
  <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
  </div>
  <div className="mt-5 border-r border-b border-l border-gray-400 lg:border-l-1 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
    <div className="mb-8">
      <p className="text-sm text-gray-600 flex items-center">
      </p>
      <div className="text-gray-900 font-bold text-xl mb-2">TMA TEXT NEXTJS</div>
      <p className="text-gray-700 text-base">Nama : Wafi Amna Taqdirul Aziz</p>
      <p className="text-gray-700 text-base">Role : Sysadmins</p>
      <p className="text-gray-700 text-base">Harapan untuk TMA : </p>
      <p className="text-gray-700 text-base">Semoga perusahaan terus berkembang pesat, menjadi tempat yang nyaman untuk bekerja, serta memberikan manfaat yang luas bagi karyawan, pelanggan, dan masyarakat."</p>
    </div>
    <div className="flex items-center">
      <div className="text-sm">
        <p className="text-gray-900 leading-none">wafiamna</p>
        <p className="text-gray-600">July 27, 2025</p>
      </div>
    </div>
  </div>
</div>
}