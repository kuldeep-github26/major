document.addEventListener('DOMContentLoaded', function () {
    const tractors = [
        { name: 'FARMTRAC 60', image: 'https://www.91tractors.com/_next/image?url=https%3A%2F%2Fimages.91trucks.com%2Ftractors%2Fmodels%2F27%2F388%2Ffarmtrac-60-29914528.jpg&w=640&q=75' },
        { name: 'FARMTRAC 6055', image: 'https://tractorguru.in/upload/tractor/Tractor%20Images/Farmtrac/Farmtrac-6055-T20.jpg' },
        { name: 'SWARAJ 855', image: 'https://5.imimg.com/data5/SELLER/Default/2021/8/BY/WP/TJ/61782129/855-fe-1591423741-1000x1000.jpg' },
        { name: 'SWARAJ FE', image: 'https://www.swarajtractors.com/sites/default/files/images/swaraj_744FE_615x473px_191023.png' },
        { name: 'FARMTRAC 45', image: 'https://5.imimg.com/data5/SELLER/Default/2024/5/417564874/RO/DT/UO/33879392/power-generator.png' },
        { name: 'EICHER 45', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9XfXsrllgEKVS3z2nBfO6j6sgRABkvHTLTw&s' },
        { name: 'JOHN DEERE 5055', image: 'https://www.deere.co.in/assets/images/tractors/e-series-tractors/5310e-tractor/john_deere_india_trem4_5310_right_angle_large_1a5dd6f40ebd3c6aac80321ed0a29f52e44dbe57.png' },
        { name: 'SONALIKA RX 50', image: 'https://assets.khetigaadi.com/new-tractor/Sonalika-52-RX-Tiger1643697996.png' },
        { name: 'POWERTRAC 50', image: 'https://www.powertracagri.com/content/dam/escortsdxp/powertrac-1-0/desktop/miscellaneous/360-degree-view/euro-g28/thumbnail/Euro-G28-RHS.png' },
        { name: 'MAHINDRA 575 DI XP ', image: 'https://www.mahindratractor.com/sites/default/files/styles/bestsellers_328x195_/public/2024-01/mahindra_xpplus_265_orchard_tractor.png.webp?itok=oRSE_CfO' },
        { name: 'MAHINDRA ARJUN 555D', image: 'https://5.imimg.com/data5/SELLER/Default/2021/2/IT/KQ/FV/9787712/mahindra-novo-655-di.jpg' },
        { name: 'NEW HOLLAND 3630', image: 'https://cnhi-p-001-delivery.sitecorecontenthub.cloud/api/public/content/ebe5f292908b4157bae127fd889df180?v=2ea61cbe' },
        { name: 'SONALIKA 745', image: 'https://5.imimg.com/data5/SELLER/Default/2021/12/GR/NB/ZG/31628403/sonalika-di-745-iii-rx-tractor-500x500.jpg' },
        { name: 'MASSEY FERGUSO ', image: 'https://5.imimg.com/data5/QG/QM/PW/SELLER-11460189/massey-ferguson-2635-75-hp-4wd-tractor-500x500.jpg' },
        { name: 'MAHINDRA YUVRAJ', image: 'https://www.khetiwadi.com/media/tractors/images/Eicher-188-khetiwadi_tractors.jpg' },
        { name: 'SONALIKA MM-18', image: 'https://5.imimg.com/data5/SELLER/Default/2023/2/FM/MV/YA/89535364/sonalika-mm-18-tractor.png' },
        { name: 'SWARAJ 717', image: 'https://5.imimg.com/data5/SELLER/Default/2023/11/360428364/GS/TL/WS/40754668/swaraj-742-xt-tractor-500x500.png' },
        { name: 'ESCORTS ', image: 'https://images.tractorgyan.com/uploads/3579/6176bea02202c_escorts-Josh-335-tractorgyan.webp' },
        { name: 'VST MT', image: 'https://5.imimg.com/data5/HX/QK/MY-8588455/vst-shakti-mt-270-tractor-500x500.jpg' },
        { name: 'VST MT 171', image: 'https://5.imimg.com/data5/RK/YJ/QG/SELLER-28361531/vst-shakti-mt-171-di-samraat-540-1000-rmp-tractors.jpg' },
        { name: 'JOHN DEERE 6120', image: 'https://www.deere.com/assets/images/region-4/products/tractors/e-series-tractors/6105e/6105e_eseries_r4d075210_large_9e3c1b7faec13e1034454a61766d73f9919fbaa7.jpg' },
        { name: 'FARMTRAC 6080', image: 'https://5.imimg.com/data5/EQ/WW/GQ/GLADMIN-7630/escorts-farmtrac-6050-executive-50-hp-tractor-1800-kg.jpg' },
        { name: 'INDO FARM 4110', image: 'https://www.indofarm.in/wp-content/uploads/2022/03/4190-1.jpg' },
        { name: 'PREET 10049', image: 'https://tractorguru.in/upload/tractor/Tractor%20Images/Preet/PREET-7549-4WD-1.jpg' },
        { name: 'FORD ', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEQRwfei_DulbH5QqaMjm5Irw7pA7iZPjLcT4CpET7qjJ2YtyZZ2OF78tt0xM2kHNaYio&usqp=CAU' },
        { name: 'EICHER 242', image: 'https://eichertractors.in/eichertractors/gallery/eicher-tractor-242-4.webp' },
        // Add 50 real tractor names and images here
    ];

    const tractorList = document.getElementById('tractor-list');
    const searchBar = document.getElementById('search-bar');
    
    // Display tractors
    function displayTractors(tractorsToShow) {
        tractorList.innerHTML = '';
        tractorsToShow.forEach(tractor => {
            const tractorItem = document.createElement('div');
            tractorItem.classList.add('tractor-item');
            tractorItem.innerHTML = `
                <img src="${tractor.image}" alt="${tractor.name}">
                <h3>${tractor.name}</h3>
                <button class="buy-now" data-tractor="${tractor.name}">Buy Now</button>
            `;
            tractorList.appendChild(tractorItem);
        });
    }

    displayTractors(tractors);

    // Search functionality
    searchBar.addEventListener('input', function (e) {
        const searchTerm = e.target.value.toLowerCase();
        const filteredTractors = tractors.filter(tractor => 
            tractor.name.toLowerCase().includes(searchTerm)
        );
        displayTractors(filteredTractors);
    });

    // Payment modal handling
    const paymentModal = document.getElementById('payment-modal');
    const closeModalButton = document.getElementById('close-modal');
    const submitPaymentButton = document.getElementById('submit-payment');
    const paymentForm = document.getElementById('payment-form');

    document.addEventListener('click', function (e) {
        if (e.target.classList.contains('buy-now')) {
            const tractorName = e.target.getAttribute('data-tractor');
            paymentModal.classList.remove('hidden');
            paymentForm.dataset.tractor = tractorName;
        }
    });

    closeModalButton.addEventListener('click', function () {
        paymentModal.classList.add('hidden');
    });

    // Submit payment form
    paymentForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const paymentMethod = document.getElementById('payment-method').value;
        const paymentDetails = document.getElementById('payment-details').value;
        const contactInfo = document.getElementById('contact-info').value;
        const accountInfo = document.getElementById('account-info').value;
    

        if (paymentDetails && contactInfo) {
            sendPaymentEmail(paymentForm.dataset.tractor, paymentMethod, paymentDetails, contactInfo,accountInfo);
            alert("YOUR WELCOME ! DEAR CUSTOMER");
            

            paymentModal.classList.add('hidden');
        } else {
            alert("Please fill in all payment details.");
        }
    });

    // Simulate sending email
    function sendPaymentEmail(tractorName, paymentMethod, paymentDetails, contactInfo,accountInfo) {
        const email = "your.customer emailID"; // Replace with your email address
        const subject = "New Tractor Purchase";
        const body = `A customer has bought ${tractorName} using ${paymentMethod}.
                      Payment Details: ${paymentDetails}
                      Contact Info: ${contactInfo}
                      Account Info: ${accountInfo}`;

        window.open(`mailto:${email}?subject=${subject}&body=${body}`);
    }
});
