

const HeroSectionSub = ({data}) => {
    return (

        <div class="relative">
    <img src="https://cdn.pixabay.com/photo/2023/10/26/08/24/autumn-8342089_1280.jpg" class="w-full h-screen object-cover" alt="Trekking Image" />
    <div class="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
    <p class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-2 text-custom-gold text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold font-poppins z-10">{data}</p>
</div>

  );
}

export default HeroSectionSub;