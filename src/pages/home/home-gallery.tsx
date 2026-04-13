import { useState, useEffect, useCallback, useRef } from 'react'

const MAPS_URL =
  'https://www.google.com/maps/place/Lisbon+Marriott+Hotel/@38.7471294,-9.1648298,498m/data=!3m2!1e3!5s0xd1933192fc38c43:0x1c6d718ca01cf866!4m15!1m5!3m4!2zMzjCsDQ0JzQ5LjYiTiA5wrAwOSc0OC4xIlc!8m2!3d38.747112!4d-9.16336!3m8!1s0xd1933193228d665:0x9d10db22bf118f34!5m2!4m1!1i2!8m2!3d38.747256!4d-9.1643492!16s%2Fg%2F1hc5byv81?entry=ttu&g_ep=EgoyMDI2MDQwOC4wIKXMDSoASAFQAw%3D%3D'

// Full remote gallery used in lightbox
const ALL_IMAGES = [
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2F28ba927d55c4cdcf54b238d9d4a427fcc822a1da_19a82f86f46_dfd0_0001_002b.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2F879a09374c4de5961177a68c7e392d4ac345c614_19a82f87359_dfd0_0001_0028.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2F5d6ed14930900b3ad9307fa39b29ab8c15c82e00_19a82f8772a_dfd0_0001_0028.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2F05569a0d00365735075f412b65541460a8877fd9_19a82f87b88_dfd0_0001_0028.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2F033319aea5e74371c87e8fb2e2fe14ecb87eaf4c_19a82f87fc0_dfd0_0001_002b.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2Fb302902ec64cf161c4d5a5490c200363ce9b5349_19a82f885b3_dfd0_0001_002b.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2F7028cb614f789fdd31c406439e7169357eb9eeab_19a82f889e5_dfd0_0001_002b.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2F613f215aaaf041ff044e2ff174eb93793f7e3495_19a82f88e38_dfd0_0001_002b.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2Fb85f3a022898c53ba2b8451891cfb2a3ceb2d644_19a82f89229_dfd0_0001_0028.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2F8af7a6137e886c20795d87ff415ee228158c976f_19a82f896b9_dfd0_0001_0028.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2Fefd4d31759151de49f93b14785a09830f23e069f_19a82f89ab2_dfd0_0001_0028.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2Ff4628d99ebda3c3e3d68f4634701db5f4232e52a_19a82f89f63_dfd0_0001_002b.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2Fc068f2ee63f637bb33da5e826765ce92336c7b6a_19a82f8a53e_dfd0_0001_002b.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2F7fb89d47832c5674543caf3ed91c5845c15e6852_19a82f8a992_dfd0_0001_002b.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2Fdf4becdd85f58d00abdf7810ad3cc8f79844e1b5_19a82f8ad72_dfd0_0001_002b.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2F644f87fabb30e4c81009d300be0659287694c19d_19a82f8b417_dfd0_0001_0028.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2Febebc39f534cb815c5433095ea9a71fc0b1b2ac6_19a82f8b801_dfd0_0001_002b.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2F7cd389e2f619923746902b6238c48a26dabbd8ee_19a82f8bc47_dfd0_0001_002b.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2Ff9eef8ff85280ac5f1666993e92e794e989ca0fe_19a82f8c288_dfd0_0001_0028.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2Fbb860094bb913b969a2b97ba5db37c55e5fe42f0_19a82f8c66d_dfd0_0001_0028.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2Fcb66128785584264cb5786c57c68ad69d6c9d1b0_19a82f8cb8c_dfd0_0001_002b.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2F505bafeae0487bfbb8fec01fa013c4d114d91367_19a82f8cf6c_dfd0_0001_002b.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2Ff5fb6de4973ab5ea54f2f8c248b5b6b3b3d86919_19a82f8d55e_dfd0_0001_002b.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2Fcf66c86b94fb02577403de412eb5ea019325bf04_19a82f8deac_dfd0_0001_002b.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2F09d3084bf4bdbdd9a989630ea4e5033a733894e5_19a82f8e616_dfd0_0001_002b.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2Fa7e5cf0545870db48c41b0e863ac29f85ec4d3b5_19a82f8f173_dfd0_0001_002b.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2F25935f24363c48c9e75db66188a5679997dfc491_19a82f8fb92_dfd0_0001_002b.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2Ffcf0183306cb818448116f38a6225bf77b967026_19a82f906f0_dfd0_0001_002b.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2F4ef020811b98b3e5d482f55072d7f795c1d550b4_19a82f90acd_dfd0_0001_0028.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2Fe5c5fc5eaa01b2b930be995c1339bb011bcb23ad_19a82f90dda_dfd0_0001_0028.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2F4b1235c8a226bfbd1f0666a09950b5eeb7a31942_19a82f91307_dfd0_0001_0028.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2F5cd1e3920b458658db5ddf2938d11afcbeafdadc_19a82f91816_dfd0_0001_002b.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2Fd2ec6627f6f462662340417310e552c8c8444b0a_19a82f92175_dfd0_0001_002b.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2Fb8fd701aa6d7de9c89bf6c60f911193b332779bf_19a82f92ae9_dfd0_0001_002b.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2Fc472bb6fe802f16eef4869a1a69b1aa18172ce6d_19a82f92f35_dfd0_0001_0020.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2F94bb5bf5aed0526d439e487673217bdefa93bef7_19a82f932fd_dfd0_0001_0020.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2Fc6b402834f8ea1f1aa1dbf8c3e4b5261916c3685_19a82f93748_dfd0_0001_002b.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2F4ea8a9c3329fae72362c8f18cbd06fe2fd6985ae_19a82f93bad_dfd0_0001_0020.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2F11457856f7da01cc93ca456165a1acc9af1a64d0_19a82f93f43_dfd0_0001_0020.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2F078f42f7dbb3dd3bdfdd59fed685778821566826_19a82f94322_dfd0_0001_0020.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2Fbd2e22b0c72a354cdf2f4b6e7b846193ad2c24a1_19a82f94707_dfd0_0001_0020.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2F50fb4df6ca923ae809ea00fc12bd7f17baff0ed9_19a82f94b5e_dfd0_0001_0020.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2F8a49a37090a0209cd119187087387ad3adf304f9_19a82f94f2e_dfd0_0001_0028.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2Fa8a93ff469ed6c048025bbb1081f3ac0143354f8_19a82f95316_dfd0_0001_0028.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2F9f153ade19974f447583022e280628804fa176b3_19a82f956fd_dfd0_0001_0028.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2F2518f2771b3f88f548409d6c51c976e4b540b70d_19a82f95d9c_dfd0_0001_0028.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2F9d9788c7c0c091425184ebca0457d654caa821da_19a82f96ff1_dfd0_0001_0028.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2Fa607c3918a6345d90f0a04df80a60bcc629febbe_19a82f97445_dfd0_0001_0028.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2Fe28d285f97697a6b19835c5498c569b657ac5290_19a82f979b4_dfd0_0001_0028.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2Fe95b55ab7628b136aa0dc34d9e6b67f424a95bbe_19a82f97e10_dfd0_0001_0028.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2F446ded38e982753c65002b9a2de22dbdcd7648e2_19a82f981ea_dfd0_0001_0028.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2F8540df525a375ecd78e969b30fcb3064e30b35ee_19a82f985e1_dfd0_0001_0028.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2F643a0305aae7c34ef0d06d29c98b9c975cf1f235_19a82f98a2f_dfd0_0001_0028.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2F781ee4a7ee125ca2e8e84c7b1e6456e6cd8756f1_19a82f98e78_dfd0_0001_0028.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2F0ac2bfab27ba58f06a54e109cdfece8b16a02b41_19a82f99260_dfd0_0001_0028.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2F7a332446212e3a5ce5eed8a6d125d6acacba03c6_19a82f99775_dfd0_0001_0028.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2Fef3c17b9f1ce91b53ddba4fc82a5d6d8f7cf18da_19a82f99c24_dfd0_0001_0028.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2Fd27ea20793b639655633a97c3bb092c2b840505d_19a82f9a0d3_dfd0_0001_0028.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2Fde22ba5e2a71db65eb307c44953470bde8888ebf_19a82f9a64a_dfd0_0001_002b.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2F82c1a5bf6a486f68b2def9107635403dd9889e5e_19a82f9a9e0_dfd0_0001_002b.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2Fb6f0734c1fb9eeec2ae0d30bd64af436fbc9d95d_19a82f9ae1d_dfd0_0001_002b.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2Ff3750f43642327e4731597dfe19e9d40ecf98dbd_19a82f9b214_dfd0_0001_0028.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2F2fe5680a84f6d180575e118c5f8ff717891f8e50_19a82f9b5ee_dfd0_0001_0028.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2Fa3f5276d9ddebf00ed0a684e1f12b7bfa59efd32_19a82f9b916_dfd0_0001_0028.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2F5c03ad2527039d4d2a375d6eed2633ea2e1cebd8_19a82f9bee2_dfd0_0001_0028.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2F478846973f488424b2ab433b8b293b0c5cf2c9f2_19a82f9c398_dfd0_0001_0028.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2F49e36156898dc65fbff06781ea3045b585013529_19a82f9cb16_dfd0_0001_0028.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2Fa1a9543b89db05c1bd51ec234165697e53d545c7_19a82f9d20d_dfd0_0001_0028.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2F2116c6e2c147bcde1d894b66c09b08e4face5904_19a82f9d785_dfd0_0001_0028.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2F2e6a36ba4a810e04f8c6decd4aa2abc2ffd7c8e4_19a82f9dc83_dfd0_0001_0028.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2F195792c7435712639861bb3e19bb05bd4cdacfa2_19a82f9e017_dfd0_0001_0028.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2F2c7187ed8e8345db738d28a713304be89935c62f_19a82f9e415_dfd0_0001_0028.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2Ffaf43f17207607809364573891b682d21d6c912e_19a82f9e8ab_dfd0_0001_0020.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2Fd8dddc02cb8a8f20554c8b6785707216a5ed06fa_19a82f9ec48_dfd0_0001_0020.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2Fbd457feeb4f668ae10f0095441d107a4a2d272b6_19a82f9f007_dfd0_0001_0028.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2F231b1468e146f745f506e4af32f7121603e1cca0_19a82f9f3b5_dfd0_0001_0020.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2F2e72c24f5c92bce99e68bcfbc7e498ed288267e3_19a82f9fb78_dfd0_0001_0020.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2F92a24923d42759c2d73ce42bf5a4c9fa1037d386_19a82fa014d_dfd0_0001_0020.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2Fa78605e33965405f22c8dbc8fd9bc10ceb0d5845_19a82fa04dd_dfd0_0001_0020.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2F5a09006ddbb2091eb474ee5477f28022f9a4fc13_19a82fa09ee_dfd0_0001_0028.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2Fa736f338b8b28301cf29a066ff5613a19134d0a2_19a82fa0dd1_dfd0_0001_0020.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2Ff38591d766d5da39824d44195143c61ac73b275c_19a82fa11c7_dfd0_0001_0028.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2F940cbb29a769af73309784ba59dbfc796a1df36a_19a82fa1524_dfd0_0001_0020.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2F01b27c5ed7ed6f52aeba742a81990507ebe98d17_19a82fa1920_dfd0_0001_0028.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2F790b94a0732e3e1da852d4061167d6e6b08e2e1c_19a82fa1c5b_dfd0_0001_0020.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2F8450fe7af63aed57329b920b208f645240664ced_19a82fa208e_dfd0_0001_0020.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2F5a55b9c7a95292d356fe6b1273f6d9d72a0e360f_19a82fa27f8_dfd0_0001_0020.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2F4346443bf84c0b436fa052932d29d1e9307efe08_19a82fa2c4d_dfd0_0001_0020.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2F48d390d6a926ca7f7b324a3b3f64e8ce1d1cfd04_19a82fa302c_dfd0_0001_0020.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2F95faf83735cd81a202d77221e09cd1b9a3fe5e53_19a82fa36e9_dfd0_0001_0020.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2F58b06ffde85f6605fe075038899b831540ed7739_19a82fa3b26_dfd0_0001_0028.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2F8daef6c25eeca0f19b423bf5ee7dd16ba60f0ca1_19a82fa3f7c_dfd0_0001_0028.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2Fcf8544165541a8d11875e2e74fb0c131cc203bc6_19a82fa447b_dfd0_0001_0028.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2F66679eda043a1f542c8d3e533e28477c92cfb770_19a82fa4dde_dfd0_0001_0028.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2F291a525dc70b90fb9ba29351918e707b8aa9c966_19a82fa54e7_dfd0_0001_0028.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2F2be2b2d2a08f7600ec2c9bdbe1bf074da7de3028_19a82fa5a48_dfd0_0001_0028.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2F65e58d124200079c73fc92b90cf13aa01311fd6c_19a82fa5fee_dfd0_0001_0028.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2F524b5a8db6ad370b8d0841615c346cd1b1a15363_19a82fa64eb_dfd0_0001_0028.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2Fcbbc6d171dc2001410d6f34654c536c9ae43e047_19a82fa6d19_dfd0_0001_0028.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2F55cac0e9fcffe4ae9ea949d0b58bd6ab308f9236_19a82fa71cf_dfd0_0001_0028.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2F64990ffac65cd36ad4d8906eee4167abaad8f8a5_19a82fa78d3_dfd0_0001_0028.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2F2414f0f2b464007b5b035389e18eb5a6f3c38d9e_19a82fa7f7c_dfd0_0001_0028.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2Fb89c19b8452c821c60fec9a37fa6b9204582f805_19a82fa8429_dfd0_0001_0028.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2F54e0ddfa042eee4439c3b5b5943252386864967f_19a82fa8816_dfd0_0001_0028.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2F432be0ffe9b6894988f9d32f09807d23f9568aec_19a82fa8ba3_dfd0_0001_0028.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2F18097213e6bb94bf65e3eec3741d3e5c2e4937f2_19a82fa8fe2_dfd0_0001_0028.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2F09b4aabd1fbba6ca91daee43865791cf2ef35df2_19a82fa9374_dfd0_0001_0028.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2Fc47173c76974b82286c77865e5b117d343658217_19a82fa9a71_dfd0_0001_0028.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2Fbc740502f13d5c4d0c4d7e7d0e9333b805dd8bbc_19a82fa9d8d_dfd0_0001_0028.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2F009c7b9870172b8185fc08d5009f42f7cefafe69_19a82faa188_dfd0_0001_0028.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2F2a4adea82854ac3ba7e1f3e032d9368f30dd2a6c_19a82faa55e_dfd0_0001_0028.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2Fefd0474f1d9cb0fd362f467012fb6f1db9f7bc1c_19a82faa8df_dfd0_0001_0028.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2Fd8f69acf26d0a4ee11c1d6b86c6db1134c0878d2_19a82faac69_dfd0_0001_0028.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2Fc85dcad6b7c2555fd4bd9fb66e193e3eb6676633_19a82fab0b1_dfd0_0001_0020.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2F8bc188239ce2139621b897615db1569f6629e07d_19a82fab68e_dfd0_0001_0020.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2Fc56e4344ffbe710cc4f45076eb20cc64f027b121_19a82faba19_dfd0_0001_0020.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2F7315a5caa44c872adcf4df0189678233ef1df6c4_19a82fabdfb_dfd0_0001_0028.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2F3fd2d07ecbeb50a0f65a4d685af66d3bcac34e27_19a82fac17d_dfd0_0001_0028.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2F91b617c5f231d907f838aafb145768160a9f1ee4_19a82fac575_dfd0_0001_0028.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2F0d9abe08db9a626c07662ca03d17878d1a5bdb9f_19a82faca8e_dfd0_0001_0028.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2Fdf873d1b03662e5e89e5f8fe79c678e9cb7597db_19a82faceb2_dfd0_0001_0028.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2F624e20ac84f4049e293f40c87da9cd9de7c816aa_19a82fad572_dfd0_0001_0020.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2Feb90eae0e5e95a650c7554f4aa2ddf265d56e527_19a82fadb54_dfd0_0001_0020.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2F6a4498352a9d5852a0cad652019dce575252f3fc_19a82fadf29_dfd0_0001_0020.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2F08a54dda213e9de156bd6ee6c93ddde93cf3c4b5_19a82fae4af_dfd0_0001_0020.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2F3f0f295de18b6c04dddb9e7fe88949ceab6c6746_19a82fae8f6_dfd0_0001_0020.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2F4f47aaa7cf5b25f8f98a05bb9c032cd9c84054f1_19a82faecd8_dfd0_0001_0020.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2Fcf6739f26d2d544b58da5d4e8abde4712a708153_19a82faf062_dfd0_0001_0020.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2F3a640437b8304fa5b4f9b4d5874110dde989fde5_19a82faf44d_dfd0_0001_0020.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2F0e271ec227fa5eac093e05cd0a85ac1b33e3435f_19a82fafa33_dfd0_0001_0020.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2Fcb31116b3a5a50c6a6ccbc7459336c2dc8de322b_19a82fb0003_dfd0_0001_0028.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2F2e70351648f3baad0d253a8be45bb3597b3649f7_19a82fb03ed_dfd0_0001_0028.jpg',
  'https://storage.googleapis.com/entravel-dev-fe/images%2Fhotels%2F804622%2Fbc98059d8c88071097b6b4040a8251a119644245_19a82fb07d0_dfd0_0001_0028.jpg',
]

// ── Icon helpers ─────────────────────────────────────────────────────────────
function IconClose() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}
function IconLeft() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M12.5 15L7.5 10l5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
function IconRight() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M7.5 5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function StarFourCircleFilledIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M5.06613 0C4.54588 0.0711455 4.05139 0.203859 3.58356 0.398141C2.84473 0.70507 2.2023 1.13422 1.65628 1.68651C1.11026 2.2388 0.687746 2.88549 0.38919 3.62705C0.198594 4.09998 0.0688634 4.59937 0 5.12475L3.81459 3.80126L5.06613 0Z" fill="currentColor"/>
      <path d="M11.628 5.12156C11.5574 4.60986 11.4259 4.12051 11.2339 3.65396C10.9296 2.91514 10.5044 2.26662 9.9584 1.70886C9.41238 1.1511 8.77128 0.716471 8.03511 0.40407C7.57172 0.207508 7.08168 0.0729697 6.56543 0L7.81608 3.79898L11.6276 5.12111L11.628 5.12156Z" fill="currentColor"/>
      <path d="M0.000444714 6.62451C0.0697524 7.14579 0.199037 7.64244 0.388745 8.11401C0.687301 8.85556 1.10981 9.50271 1.65583 10.0545C2.20185 10.6068 2.84428 11.0374 3.58312 11.347C4.05095 11.5431 4.54543 11.6768 5.06568 11.7488L3.81415 7.948L0 6.62497L0.000444714 6.62451Z" fill="currentColor"/>
      <path d="M7.81652 7.94709L6.56543 11.747C7.08168 11.6749 7.57172 11.5413 8.03511 11.3466C8.77128 11.0369 9.41238 10.6064 9.9584 10.0541C10.5044 9.5018 10.9296 8.8551 11.2339 8.11355C11.4272 7.64198 11.5591 7.14579 11.6293 6.62451L7.81652 7.94709Z" fill="currentColor"/>
    </svg>
  )
}

// ── Mobile carousel ──────────────────────────────────────────────────────────
function MobileCarousel({
  images,
}: {
  images: string[]
}) {
  const [current, setCurrent] = useState(0)
  const touchStartX = useRef<number | null>(null)

  const prev = () => setCurrent((i) => (i - 1 + images.length) % images.length)
  const next = () => setCurrent((i) => (i + 1) % images.length)

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 40) { if (diff > 0) next(); else prev() }
    touchStartX.current = null
  }

  return (
    <div
      className="relative overflow-hidden md:hidden"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="relative aspect-[587/367]">
        <div className="absolute top-0 left-0 w-full h-16 z-[1] bg-gradient-to-b from-black/64 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-32 z-[1] bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
        <img
          src={images[current]}
          alt={`Hotel image ${current + 1}`}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Dot navigation */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-[2] flex items-center h-3 gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`shrink-0 rounded-[0.5px] transition-all duration-200 ${
              i === current ? 'bg-white w-[2.5px] h-3' : 'bg-[#C8C8C8] w-[5px] h-0.5'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

// ── Gallery modal ─────────────────────────────────────────────────────────────
function GalleryModal({ startIndex, onClose }: { startIndex: number; onClose: () => void }) {
  const [current, setCurrent] = useState(startIndex)
  const total = ALL_IMAGES.length
  const thumbRef = useRef<HTMLDivElement>(null)

  const prev = useCallback(() => setCurrent((i) => (i - 1 + total) % total), [total])
  const next = useCallback(() => setCurrent((i) => (i + 1) % total), [total])

  // Keyboard nav
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose, prev, next])

  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  // Scroll active thumbnail into view
  useEffect(() => {
    const el = thumbRef.current?.querySelector(`[data-index="${current}"]`) as HTMLElement | null
    el?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' })
  }, [current])

  // Preload adjacent
  useEffect(() => {
    ;[current + 1, current - 1].forEach((i) => {
      const img = new Image()
      img.src = ALL_IMAGES[(i + total) % total]
    })
  }, [current, total])

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/85 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-[98vw] max-w-[1060px] min-[470px]:w-[95vw] h-[90dvh] max-h-[510px] bg-[#151515] rounded p-3.5 md:p-6 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-3.5 md:mb-6 gap-3 shrink-0">
          <h2 className="text-xl font-medium text-white truncate sm:text-2xl">
            Lisbon Marriott Hotel
          </h2>
          <button onClick={onClose} className="text-sm transition-colors text-white/60 hover:text-white shrink-0">
            close
          </button>
        </div>

        {/* Body */}
        <div className="flex flex-1 min-h-0 overflow-hidden text-white max-md:flex-col max-md:overflow-y-auto max-md:space-y-5 md:gap-6">
          {/* Left: carousel */}
          <div className="relative flex flex-col md:flex-[3] min-w-0">
            {/* Slide */}
            <div className="relative flex-1 min-h-0 overflow-hidden">
              <img
                key={current}
                src={ALL_IMAGES[current]}
                alt={`Hotel image ${current + 1}`}
                className="object-cover object-center w-full h-full"
              />
              <div
                className="absolute bottom-0 left-0 right-0 pointer-events-none top-1/2"
                style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.64) 100%)' }}
              />
            </div>

            {/* Arrows + dots */}
            <div className="flex items-center justify-between gap-3 mt-3">
              <button
                onClick={prev}
                className="p-2 text-white transition-colors bg-white/10 hover:bg-white/20 shrink-0"
                aria-label="Previous"
              >
                <IconLeft />
              </button>

              <div className="flex items-center justify-center gap-3">
                {(() => {
                  const dotCount = 7
                  const half = Math.floor(dotCount / 2)
                  let start = Math.max(0, current - half)
                  const end = Math.min(total - 1, start + dotCount - 1)
                  start = Math.max(0, end - dotCount + 1)
                  return Array.from({ length: end - start + 1 }, (_, k) => start + k).map((i) => (
                    <button
                      key={i}
                      onClick={() => setCurrent(i)}
                      className={`shrink-0 rounded-[0.5px] transition-all duration-200 ${
                        i === current
                          ? 'bg-white w-[2.5px] h-3'
                          : 'bg-[#C8C8C8] w-[5px] h-0.5'
                      }`}
                      aria-label={`Go to image ${i + 1}`}
                    />
                  ))
                })()}
              </div>

              <button
                onClick={next}
                className="p-2 text-white transition-colors bg-white/10 hover:bg-white/20 shrink-0"
                aria-label="Next"
              >
                <IconRight />
              </button>
            </div>
          </div>

          {/* Right: thumbnail grid */}
          <div ref={thumbRef} className="md:flex-[2] min-w-0 overflow-y-auto no-scrollbar">
            <div className="grid grid-cols-2 gap-3 p-0.5">
              {ALL_IMAGES.map((src, i) => (
                <div
                  key={src}
                  data-index={i}
                  onClick={() => setCurrent(i)}
                  className={`aspect-[3/2] overflow-hidden rounded-sm cursor-pointer ${
                    i === current ? 'ring-2 ring-white' : 'opacity-70 hover:opacity-100'
                  } transition-opacity`}
                >
                  <img src={src} alt="" className="object-cover w-full h-full" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Main export ───────────────────────────────────────────────────────────────
export function HomeGallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  return (
    <>
      <section id="gallery" className="bg-[#101010] px-5 sm:px-10 xl:px-[132px] pb-11 md:pb-[120px] border-b border-[#27272A]">
        <div className="max-w-[1104px] mx-auto">

          {/* Desktop: large left image + right column (top image + bottom row with see-all + map) */}
          <div className="hidden md:grid grid-cols-[2fr_1fr] gap-2 h-[405px]">
            {/* Col 1 — large hero image */}
            <button
              className="relative overflow-hidden group"
              onClick={() => setLightboxIndex(0)}
            >
              <img
                src={ALL_IMAGES[0]}
                alt="Hotel image 1"
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
              />
            </button>

            {/* Col 2 — stacked: top image + bottom row */}
            <div className="flex flex-col gap-2">
              {/* Top: image-2 */}
              <button
                className="relative flex-1 overflow-hidden group"
                onClick={() => setLightboxIndex(1)}
              >
                <img
                  src={ALL_IMAGES[1]}
                  alt="Hotel image 2"
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />
              </button>

              {/* Bottom row: image-3 "see all" + map — squares */}
              <div className="flex gap-2">
                <button
                  className="relative flex-1 overflow-hidden aspect-square group"
                  onClick={() => setLightboxIndex(2)}
                >
                  <img
                    src={ALL_IMAGES[2]}
                    alt="Hotel image 3"
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center">
                    <span className="bg-[#252525DB] border border-[#2F2F2F] text-white text-xs font-medium px-3 py-2 whitespace-nowrap">
                      see all images
                    </span>
                  </div>
                </button>

                {/* Map tile */}
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex-1 block overflow-hidden aspect-square group"
                >
                  <img
                    src="/landing/images/hotel/map.png"
                    alt="Map"
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <span className="bg-[#252525DB] border border-[#2F2F2F] text-white text-xs font-medium px-3 py-2 whitespace-nowrap flex items-center gap-1.5">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                      view on map
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Mobile: carousel + hotel info + map */}
          <div className="md:hidden">
            <MobileCarousel images={ALL_IMAGES} />

            {/* Hotel info */}
            <div className="px-3 pt-8 bg-black pb-11">
              <div className='pb-11'>
                <div className="flex items-start justify-between gap-3">
                  <h3 className="mt-1 text-2xl font-bold leading-snug text-white">Lisbon Marriott Hotel</h3>
                  <div className="flex items-center gap-1.5 bg-[#252525] border border-[#2F2F2F] px-2 py-1 shrink-0 mt-0.5">
                    <StarFourCircleFilledIcon className="text-white size-3.5" />
                    <span className="text-lg font-medium text-white">4.8</span>
                  </div>
                </div>
                <p className="text-[#CDCDCD] text-sm mt-1.5">
                  Rua Rodrigo da Fonseca 149, 1099-039 Lisbon, Portugal
                </p>
              </div>

              {/* Map tile */}
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block overflow-hidden h-[140px]"
              >
                <img src="/landing/images/hotel/map-mobile.png" alt="Map" className="object-cover w-full h-full" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <span className="bg-[#252525DB] border border-[#2F2F2F] text-white text-xs font-medium px-3 py-2 flex items-center gap-1.5">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    view on map
                  </span>
                </div>
              </a>
            </div>
          </div>

        </div>
      </section>

      {lightboxIndex !== null && (
        <GalleryModal startIndex={lightboxIndex} onClose={() => setLightboxIndex(null)} />
      )}
    </>
  )
}
