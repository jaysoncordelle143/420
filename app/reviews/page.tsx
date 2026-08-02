'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';

export default function ReviewsPage() {
  const [showAll, setShowAll] = useState(false);

  const reviews = [
    { name: 'michael_chen92@gmail.com', rating: 5, date: '2 days ago', comment: 'Outstanding quality! This is my third order and consistency is impressive. Delivery was discreet and fast.' },
    { name: 'sarah_williams', rating: 5, date: '3 days ago', comment: 'Best purchase I have made this year. The potency is exactly as described. Will definitely be a repeat customer.' },
    { name: 'james.rodriguez45@yahoo.com', rating: 4, date: '5 days ago', comment: 'Product quality is excellent but shipping took 5 days instead of 3. Still happy with the final result though.' },
    { name: 'emma_thompson', rating: 5, date: '1 week ago', comment: 'Absolutely premium! The organic certification is legitimate. Packaging was completely odorless and professional.' },
    { name: 'david_kim_88@gmail.com', rating: 5, date: '1 week ago', comment: 'Third time ordering from here. Never disappointed. The stealth delivery is no joke - arrived in perfect condition.' },
    { name: 'lisa_martinez', rating: 3, date: '1 week ago', comment: 'Took 6 days to arrive which was frustrating. Admin was responsive but I wish delivery was faster. Product itself is good quality.' },
    { name: 'robert.johnson@hotmail.com', rating: 5, date: '2 weeks ago', comment: 'Exceeded my expectations! Pure, clean, and effective. This is now my go-to source for herbal products.' },
    { name: 'jennifer_lee', rating: 4, date: '2 weeks ago', comment: 'Great product but had to wait longer than expected. Quality makes up for it though. Just order early if you need it by a specific date.' },
    { name: 'william_brown91@gmail.com', rating: 5, date: '2 weeks ago', comment: 'Phenomenal quality and service. The lab testing results they provide give me confidence in what I am buying.' },
    { name: 'amanda_garcia', rating: 5, date: '3 weeks ago', comment: 'Best in the business! I have tried at least 5 different vendors and this one is by far the most reliable.' },
    { name: 'christopher.davis@yahoo.com', rating: 2, date: '3 weeks ago', comment: 'Delivery took 8 days which was way too long. Product is decent but the wait was unacceptable. Hope they improve logistics.' },
    { name: 'jessica_miller', rating: 5, date: '3 weeks ago', comment: 'Worth every penny! The quality is unmatched and the customer service is exceptional.' },
    { name: 'matthew.wilson@gmail.com', rating: 4, date: '4 weeks ago', comment: 'Solid product. Took 4 days to arrive but admin kept me updated throughout. Would order again.' },
    { name: 'ashley_moore', rating: 5, date: '1 month ago', comment: 'Absolutely love it! This is premium quality at a fair price. Discreet packaging is a huge plus.' },
    { name: 'daniel_taylor93@hotmail.com', rating: 5, date: '1 month ago', comment: 'Fifth order and counting. Consistency is what keeps me coming back. Never had a bad experience.' },
    { name: 'stephanie_anderson', rating: 3, date: '1 month ago', comment: 'Product quality is good but delivery was delayed by a week. Communication could be better. Grateful it finally arrived safely though.' },
    { name: 'joshua_thomas@gmail.com', rating: 5, date: '1 month ago', comment: 'Top tier quality! The potency is incredible. This is exactly what I was looking for.' },
    { name: 'nicole_jackson', rating: 5, date: '1 month ago', comment: 'Amazing service and product! Arrived faster than expected and in perfect condition.' },
    { name: 'andrew.white45@yahoo.com', rating: 4, date: '1 month ago', comment: 'Very good quality but took 5 days. Still satisfied with the purchase overall.' },
    { name: 'rachel_harris', rating: 5, date: '1 month ago', comment: 'Best purchase ever! The quality speaks for itself. Will be ordering again soon.' },
    { name: 'kevin.martin@gmail.com', rating: 5, date: '5 weeks ago', comment: 'Exceptional! This is what premium looks like. Worth the wait and the price.' },
    { name: 'lauren_robinson', rating: 5, date: '5 weeks ago', comment: 'Could not be happier! Discreet, professional, and the product is outstanding.' },
    { name: 'brian_clark88@hotmail.com', rating: 4, date: '5 weeks ago', comment: 'Good product but shipping was slower than advertised. Quality is definitely there though.' },
    { name: 'megan_lewis', rating: 5, date: '6 weeks ago', comment: 'Absolutely fantastic! This is my new favorite vendor. Highly recommend to everyone.' },
    { name: 'ryan.walker@gmail.com', rating: 5, date: '6 weeks ago', comment: 'Premium quality at its finest. The attention to detail in packaging is impressive.' },
    { name: 'samantha_hall', rating: 2, date: '6 weeks ago', comment: 'Took 9 days to arrive which was really annoying. Product is okay but the delay was frustrating. Admin did respond eventually.' },
    { name: 'justin_allen92@yahoo.com', rating: 5, date: '6 weeks ago', comment: 'Outstanding! This is exactly what I needed. Fast, discreet, and top quality.' },
    { name: 'brittany_young', rating: 5, date: '7 weeks ago', comment: 'Love it! The quality is consistent and the service is professional. Will order again.' },
    { name: 'brandon.king@gmail.com', rating: 4, date: '7 weeks ago', comment: 'Very satisfied with the product. Delivery took a bit longer but worth the wait.' },
    { name: 'courtney_wright', rating: 5, date: '7 weeks ago', comment: 'Best vendor I have found! Reliable, quality products, and great customer service.' },
    { name: 'tyler_scott45@hotmail.com', rating: 5, date: '2 months ago', comment: 'Incredible quality! This is my fourth order and I have never been disappointed.' },
    { name: 'danielle_green', rating: 5, date: '2 months ago', comment: 'Perfect! Exactly as described and arrived safely. Highly recommend this vendor.' },
    { name: 'austin_adams@gmail.com', rating: 3, date: '2 months ago', comment: 'Product is good but took 7 days to arrive. Would have been 5 stars if delivery was faster.' },
    { name: 'kayla_baker', rating: 5, date: '2 months ago', comment: 'Amazing! The quality is unmatched. This is my go-to vendor now.' },
    { name: 'jordan_nelson88@yahoo.com', rating: 5, date: '2 months ago', comment: 'Exceptional service and product! Arrived in perfect condition. Will definitely order again.' },
    { name: 'alexis_hill', rating: 4, date: '2 months ago', comment: 'Great quality but shipping took 5 days. Still happy with my purchase overall.' },
    { name: 'nathan.ramirez@gmail.com', rating: 5, date: '2 months ago', comment: 'Best quality I have found online! Discreet packaging and fast shipping. Highly recommend.' },
    { name: 'taylor_campbell', rating: 5, date: '3 months ago', comment: 'Outstanding! This is premium quality at a fair price. Will be a repeat customer.' },
    { name: 'morgan_mitchell92@hotmail.com', rating: 5, date: '3 months ago', comment: 'Absolutely love it! The potency is incredible and delivery was discreet.' },
    { name: 'casey_roberts', rating: 4, date: '3 months ago', comment: 'Very good product. Took a bit longer than expected but quality is excellent.' },
    { name: 'jamie_carter@gmail.com', rating: 5, date: '3 months ago', comment: 'Perfect! This is exactly what I was looking for. High quality and professional service.' },
    { name: 'riley_phillips', rating: 5, date: '3 months ago', comment: 'Best vendor ever! Consistent quality and reliable delivery. Highly recommend.' },
    { name: 'avery_evans45@yahoo.com', rating: 2, date: '3 months ago', comment: 'Delivery took 10 days which was way too long. Product quality is decent but the wait was frustrating.' },
    { name: 'quinn_turner', rating: 5, date: '3 months ago', comment: 'Exceptional! The quality is outstanding and service is top-notch. Will order again.' },
    { name: 'dakota_torres@gmail.com', rating: 5, date: '3 months ago', comment: 'Amazing quality! This is my third order and consistency is impressive.' },
    { name: 'sage_parker', rating: 4, date: '4 months ago', comment: 'Great product but took 6 days to arrive. Quality makes up for it though.' },
    { name: 'river_collins88@hotmail.com', rating: 5, date: '4 months ago', comment: 'Outstanding! Premium quality and discreet delivery. This is my new favorite vendor.' },
    { name: 'phoenix_edwards', rating: 5, date: '4 months ago', comment: 'Best purchase! The quality is incredible and packaging was perfect.' },
    { name: 'skylar_stewart@gmail.com', rating: 5, date: '4 months ago', comment: 'Absolutely fantastic! This is premium quality at its finest. Highly recommend.' },
    { name: 'rowan_sanchez', rating: 3, date: '4 months ago', comment: 'Product is good but delivery took 8 days. Admin was helpful but I wish it was faster.' },
    { name: 'emerson_morris92@yahoo.com', rating: 5, date: '4 months ago', comment: 'Perfect! Exactly as described and arrived safely. Will definitely order again.' },
    // ... continuing with more reviews (showing first 50, rest hidden)
  ];

  const allReviews = [
    ...reviews,
    // Reviews 51-100
    { name: 'jordan_reed', rating: 5, date: '4 months ago', comment: 'Excellent quality! Very satisfied with this purchase.' },
    { name: 'cameron_cook@gmail.com', rating: 4, date: '4 months ago', comment: 'Good product but shipping was slow. Quality is there though.' },
    { name: 'alex_morgan45', rating: 5, date: '5 months ago', comment: 'Outstanding! This is premium quality.' },
    { name: 'taylor_bailey@hotmail.com', rating: 5, date: '5 months ago', comment: 'Best vendor! Consistent quality every time.' },
    { name: 'morgan_rivera', rating: 5, date: '5 months ago', comment: 'Amazing! Highly recommend to everyone.' },
    { name: 'casey_cooper88@gmail.com', rating: 4, date: '5 months ago', comment: 'Very good but took 5 days to arrive.' },
    { name: 'jamie_richardson', rating: 5, date: '5 months ago', comment: 'Perfect quality! Will order again.' },
    { name: 'riley_cox@yahoo.com', rating: 5, date: '5 months ago', comment: 'Exceptional service and product!' },
    { name: 'avery_howard', rating: 3, date: '5 months ago', comment: 'Good product but delivery took a week. Quality is decent.' },
    { name: 'quinn_ward@gmail.com', rating: 5, date: '5 months ago', comment: 'Outstanding! Best purchase I have made.' },
    { name: 'dakota_torres92', rating: 5, date: '6 months ago', comment: 'Amazing quality! Very impressed.' },
    { name: 'sage_peterson@hotmail.com', rating: 4, date: '6 months ago', comment: 'Great product but slow shipping.' },
    { name: 'river_gray45', rating: 5, date: '6 months ago', comment: 'Perfect! Exactly what I needed.' },
    { name: 'phoenix_ramirez@gmail.com', rating: 5, date: '6 months ago', comment: 'Best quality! Highly recommend.' },
    { name: 'skylar_james', rating: 5, date: '6 months ago', comment: 'Exceptional! Will be a repeat customer.' },
    { name: 'rowan_watson88@yahoo.com', rating: 2, date: '6 months ago', comment: 'Took 9 days to arrive. Product is okay but wait was long.' },
    { name: 'emerson_brooks', rating: 5, date: '6 months ago', comment: 'Outstanding quality! Very satisfied.' },
    { name: 'jordan_kelly@gmail.com', rating: 5, date: '6 months ago', comment: 'Amazing! This is premium quality.' },
    { name: 'cameron_sanders92', rating: 4, date: '7 months ago', comment: 'Good quality but took 6 days.' },
    { name: 'alex_price@hotmail.com', rating: 5, date: '7 months ago', comment: 'Perfect! Best vendor ever.' },
    { name: 'taylor_bennett45', rating: 5, date: '7 months ago', comment: 'Exceptional service! Highly recommend.' },
    { name: 'morgan_wood@gmail.com', rating: 5, date: '7 months ago', comment: 'Outstanding! Will order again.' },
    { name: 'casey_barnes', rating: 4, date: '7 months ago', comment: 'Very good product but slow delivery.' },
    { name: 'jamie_ross88@yahoo.com', rating: 5, date: '7 months ago', comment: 'Amazing quality! Very impressed.' },
    { name: 'riley_henderson', rating: 5, date: '7 months ago', comment: 'Perfect! Exactly as described.' },
    { name: 'avery_coleman@gmail.com', rating: 3, date: '7 months ago', comment: 'Good but took a week to arrive. Quality is there though.' },
    { name: 'quinn_jenkins92', rating: 5, date: '8 months ago', comment: 'Outstanding! Best purchase.' },
    { name: 'dakota_perry@hotmail.com', rating: 5, date: '8 months ago', comment: 'Exceptional quality! Highly recommend.' },
    { name: 'sage_powell45', rating: 4, date: '8 months ago', comment: 'Great product but shipping was slow.' },
    { name: 'river_long@gmail.com', rating: 5, date: '8 months ago', comment: 'Amazing! Will be ordering again.' },
    { name: 'phoenix_patterson', rating: 5, date: '8 months ago', comment: 'Perfect quality! Very satisfied.' },
    { name: 'skylar_hughes88@yahoo.com', rating: 5, date: '8 months ago', comment: 'Outstanding service! Best vendor.' },
    { name: 'rowan_flores', rating: 2, date: '8 months ago', comment: 'Took 8 days. Product is good but wait was frustrating.' },
    { name: 'emerson_washington@gmail.com', rating: 5, date: '8 months ago', comment: 'Exceptional! Premium quality.' },
    { name: 'jordan_butler92', rating: 4, date: '9 months ago', comment: 'Very good but took 5 days.' },
    { name: 'cameron_simmons@hotmail.com', rating: 5, date: '9 months ago', comment: 'Amazing! Highly recommend.' },
    { name: 'alex_foster45', rating: 5, date: '9 months ago', comment: 'Perfect! Best quality.' },
    { name: 'taylor_gonzales@gmail.com', rating: 5, date: '9 months ago', comment: 'Outstanding! Will order again.' },
    { name: 'morgan_bryant', rating: 4, date: '9 months ago', comment: 'Good quality but slow shipping.' },
    { name: 'casey_alexander88@yahoo.com', rating: 5, date: '9 months ago', comment: 'Exceptional service! Very impressed.' },
    { name: 'jamie_russell', rating: 5, date: '9 months ago', comment: 'Amazing quality! Perfect.' },
    { name: 'riley_griffin@gmail.com', rating: 3, date: '9 months ago', comment: 'Good product but took a week. Quality is decent.' },
    { name: 'avery_diaz92', rating: 5, date: '10 months ago', comment: 'Outstanding! Best purchase ever.' },
    { name: 'quinn_hayes@hotmail.com', rating: 5, date: '10 months ago', comment: 'Perfect! Highly recommend.' },
    { name: 'dakota_myers45', rating: 4, date: '10 months ago', comment: 'Very good but delivery was slow.' },
    { name: 'sage_ford@gmail.com', rating: 5, date: '10 months ago', comment: 'Exceptional! Premium quality.' },
    { name: 'river_hamilton', rating: 5, date: '10 months ago', comment: 'Amazing! Will be a repeat customer.' },
    { name: 'phoenix_graham88@yahoo.com', rating: 5, date: '10 months ago', comment: 'Outstanding service! Best vendor.' },
    { name: 'skylar_sullivan', rating: 2, date: '10 months ago', comment: 'Took 10 days. Product is okay but too long.' },
    { name: 'rowan_wallace@gmail.com', rating: 5, date: '10 months ago', comment: 'Perfect quality! Very satisfied.' },
    
    // Reviews 101-150
    { name: 'emerson_woods92', rating: 5, date: '11 months ago', comment: 'Exceptional! Highly recommend.' },
    { name: 'jordan_cole@hotmail.com', rating: 4, date: '11 months ago', comment: 'Good but took 6 days.' },
    { name: 'cameron_west45', rating: 5, date: '11 months ago', comment: 'Amazing! Best quality.' },
    { name: 'alex_jordan@gmail.com', rating: 5, date: '11 months ago', comment: 'Perfect! Will order again.' },
    { name: 'taylor_owens', rating: 5, date: '11 months ago', comment: 'Outstanding! Premium quality.' },
    { name: 'morgan_reynolds88@yahoo.com', rating: 4, date: '11 months ago', comment: 'Very good but slow shipping.' },
    { name: 'casey_fisher', rating: 5, date: '11 months ago', comment: 'Exceptional service! Very impressed.' },
    { name: 'jamie_ellis@gmail.com', rating: 5, date: '11 months ago', comment: 'Amazing quality! Perfect.' },
    { name: 'riley_harrison92', rating: 3, date: '12 months ago', comment: 'Good product but took a week. Quality is there.' },
    { name: 'avery_gibson@hotmail.com', rating: 5, date: '12 months ago', comment: 'Outstanding! Best purchase.' },
    { name: 'quinn_mcdonald45', rating: 5, date: '12 months ago', comment: 'Perfect! Highly recommend.' },
    { name: 'dakota_cruz@gmail.com', rating: 4, date: '12 months ago', comment: 'Very good but delivery slow.' },
    { name: 'sage_marshall', rating: 5, date: '12 months ago', comment: 'Exceptional! Premium quality.' },
    { name: 'river_ortiz88@yahoo.com', rating: 5, date: '12 months ago', comment: 'Amazing! Will be repeat customer.' },
    { name: 'phoenix_gomez', rating: 5, date: '12 months ago', comment: 'Outstanding service! Best vendor.' },
    { name: 'skylar_murray@gmail.com', rating: 2, date: '1 year ago', comment: 'Took 9 days. Product good but wait long.' },
    { name: 'rowan_freeman92', rating: 5, date: '1 year ago', comment: 'Perfect quality! Very satisfied.' },
    { name: 'emerson_wells@hotmail.com', rating: 4, date: '1 year ago', comment: 'Good but took 5 days.' },
    { name: 'jordan_webb45', rating: 5, date: '1 year ago', comment: 'Amazing! Best quality.' },
    { name: 'cameron_simpson@gmail.com', rating: 5, date: '1 year ago', comment: 'Perfect! Will order again.' },
    { name: 'alex_stevens', rating: 5, date: '1 year ago', comment: 'Outstanding! Premium quality.' },
    { name: 'taylor_tucker88@yahoo.com', rating: 4, date: '1 year ago', comment: 'Very good but slow shipping.' },
    { name: 'morgan_porter', rating: 5, date: '1 year ago', comment: 'Exceptional service! Very impressed.' },
    { name: 'casey_hunter@gmail.com', rating: 5, date: '1 year ago', comment: 'Amazing quality! Perfect.' },
    { name: 'jamie_hicks92', rating: 3, date: '1 year ago', comment: 'Good product but took week. Quality decent.' },
    { name: 'riley_crawford@hotmail.com', rating: 5, date: '1 year ago', comment: 'Outstanding! Best purchase.' },
    { name: 'avery_henry45', rating: 5, date: '1 year ago', comment: 'Perfect! Highly recommend.' },
    { name: 'quinn_boyd@gmail.com', rating: 4, date: '1 year ago', comment: 'Very good but delivery slow.' },
    { name: 'dakota_mason', rating: 5, date: '1 year ago', comment: 'Exceptional! Premium quality.' },
    { name: 'sage_morales88@yahoo.com', rating: 5, date: '1 year ago', comment: 'Amazing! Will be repeat customer.' },
    { name: 'river_kennedy', rating: 5, date: '1 year ago', comment: 'Outstanding service! Best vendor.' },
    { name: 'phoenix_warren@gmail.com', rating: 2, date: '1 year ago', comment: 'Took 8 days. Product okay but wait frustrating.' },
    { name: 'skylar_dixon92', rating: 5, date: '1 year ago', comment: 'Perfect quality! Very satisfied.' },
    { name: 'rowan_ramos@hotmail.com', rating: 4, date: '1 year ago', comment: 'Good but took 6 days.' },
    { name: 'emerson_reyes45', rating: 5, date: '1 year ago', comment: 'Amazing! Best quality.' },
    { name: 'jordan_burns@gmail.com', rating: 5, date: '1 year ago', comment: 'Perfect! Will order again.' },
    { name: 'cameron_gordon', rating: 5, date: '1 year ago', comment: 'Outstanding! Premium quality.' },
    { name: 'alex_shaw88@yahoo.com', rating: 4, date: '1 year ago', comment: 'Very good but slow shipping.' },
    { name: 'taylor_holmes', rating: 5, date: '1 year ago', comment: 'Exceptional service! Very impressed.' },
    { name: 'morgan_rice@gmail.com', rating: 5, date: '1 year ago', comment: 'Amazing quality! Perfect.' },
    { name: 'casey_bennett92', rating: 3, date: '1 year ago', comment: 'Good product but took week. Quality there.' },
    { name: 'jamie_wood@hotmail.com', rating: 5, date: '1 year ago', comment: 'Outstanding! Best purchase.' },
    { name: 'riley_barnes45', rating: 5, date: '1 year ago', comment: 'Perfect! Highly recommend.' },
    { name: 'avery_ross@gmail.com', rating: 4, date: '1 year ago', comment: 'Very good but delivery slow.' },
    { name: 'quinn_henderson', rating: 5, date: '1 year ago', comment: 'Exceptional! Premium quality.' },
    { name: 'dakota_coleman88@yahoo.com', rating: 5, date: '1 year ago', comment: 'Amazing! Will be repeat customer.' },
    { name: 'sage_jenkins', rating: 5, date: '1 year ago', comment: 'Outstanding service! Best vendor.' },
    { name: 'river_perry@gmail.com', rating: 2, date: '1 year ago', comment: 'Took 10 days. Product good but too long.' },
    { name: 'phoenix_powell92', rating: 5, date: '1 year ago', comment: 'Perfect quality! Very satisfied.' },
    { name: 'skylar_long@hotmail.com', rating: 4, date: '1 year ago', comment: 'Good but took 5 days.' },
    
    // Reviews 151-200
    { name: 'rowan_patterson45', rating: 5, date: '1 year ago', comment: 'Amazing! Best quality.' },
    { name: 'emerson_hughes@gmail.com', rating: 5, date: '1 year ago', comment: 'Perfect! Will order again.' },
    { name: 'jordan_flores', rating: 5, date: '1 year ago', comment: 'Outstanding! Premium quality.' },
    { name: 'cameron_washington88@yahoo.com', rating: 4, date: '1 year ago', comment: 'Very good but slow shipping.' },
    { name: 'alex_butler', rating: 5, date: '1 year ago', comment: 'Exceptional service! Very impressed.' },
    { name: 'taylor_simmons@gmail.com', rating: 5, date: '1 year ago', comment: 'Amazing quality! Perfect.' },
    { name: 'morgan_foster92', rating: 3, date: '1 year ago', comment: 'Good product but took week. Quality decent.' },
    { name: 'casey_gonzales@hotmail.com', rating: 5, date: '1 year ago', comment: 'Outstanding! Best purchase.' },
    { name: 'jamie_bryant45', rating: 5, date: '1 year ago', comment: 'Perfect! Highly recommend.' },
    { name: 'riley_alexander@gmail.com', rating: 4, date: '1 year ago', comment: 'Very good but delivery slow.' },
    { name: 'avery_russell', rating: 5, date: '1 year ago', comment: 'Exceptional! Premium quality.' },
    { name: 'quinn_griffin88@yahoo.com', rating: 5, date: '1 year ago', comment: 'Amazing! Will be repeat customer.' },
    { name: 'dakota_diaz', rating: 5, date: '1 year ago', comment: 'Outstanding service! Best vendor.' },
    { name: 'sage_hayes@gmail.com', rating: 2, date: '1 year ago', comment: 'Took 9 days. Product okay but wait long.' },
    { name: 'river_myers92', rating: 5, date: '1 year ago', comment: 'Perfect quality! Very satisfied.' },
    { name: 'phoenix_ford@hotmail.com', rating: 4, date: '1 year ago', comment: 'Good but took 6 days.' },
    { name: 'skylar_hamilton45', rating: 5, date: '1 year ago', comment: 'Amazing! Best quality.' },
    { name: 'rowan_graham@gmail.com', rating: 5, date: '1 year ago', comment: 'Perfect! Will order again.' },
    { name: 'emerson_sullivan', rating: 5, date: '1 year ago', comment: 'Outstanding! Premium quality.' },
    { name: 'jordan_wallace88@yahoo.com', rating: 4, date: '1 year ago', comment: 'Very good but slow shipping.' },
    { name: 'cameron_woods', rating: 5, date: '1 year ago', comment: 'Exceptional service! Very impressed.' },
    { name: 'alex_cole@gmail.com', rating: 5, date: '1 year ago', comment: 'Amazing quality! Perfect.' },
    { name: 'taylor_west92', rating: 3, date: '1 year ago', comment: 'Good product but took week. Quality there.' },
    { name: 'morgan_jordan@hotmail.com', rating: 5, date: '1 year ago', comment: 'Outstanding! Best purchase.' },
    { name: 'casey_owens45', rating: 5, date: '1 year ago', comment: 'Perfect! Highly recommend.' },
    { name: 'jamie_reynolds@gmail.com', rating: 4, date: '1 year ago', comment: 'Very good but delivery slow.' },
    { name: 'riley_fisher', rating: 5, date: '1 year ago', comment: 'Exceptional! Premium quality.' },
    { name: 'avery_ellis88@yahoo.com', rating: 5, date: '1 year ago', comment: 'Amazing! Will be repeat customer.' },
    { name: 'quinn_harrison', rating: 5, date: '1 year ago', comment: 'Outstanding service! Best vendor.' },
    { name: 'dakota_gibson@gmail.com', rating: 2, date: '1 year ago', comment: 'Took 8 days. Product good but frustrating.' },
    { name: 'sage_mcdonald92', rating: 5, date: '1 year ago', comment: 'Perfect quality! Very satisfied.' },
    { name: 'river_cruz@hotmail.com', rating: 4, date: '1 year ago', comment: 'Good but took 5 days.' },
    { name: 'phoenix_marshall45', rating: 5, date: '1 year ago', comment: 'Amazing! Best quality.' },
    { name: 'skylar_ortiz@gmail.com', rating: 5, date: '1 year ago', comment: 'Perfect! Will order again.' },
    { name: 'rowan_gomez', rating: 5, date: '1 year ago', comment: 'Outstanding! Premium quality.' },
    { name: 'emerson_murray88@yahoo.com', rating: 4, date: '1 year ago', comment: 'Very good but slow shipping.' },
    { name: 'jordan_freeman', rating: 5, date: '1 year ago', comment: 'Exceptional service! Very impressed.' },
    { name: 'cameron_wells@gmail.com', rating: 5, date: '1 year ago', comment: 'Amazing quality! Perfect.' },
    { name: 'alex_webb92', rating: 3, date: '1 year ago', comment: 'Good product but took week. Quality decent.' },
    { name: 'taylor_simpson@hotmail.com', rating: 5, date: '1 year ago', comment: 'Outstanding! Best purchase.' },
    { name: 'morgan_stevens45', rating: 5, date: '1 year ago', comment: 'Perfect! Highly recommend.' },
    { name: 'casey_tucker@gmail.com', rating: 4, date: '1 year ago', comment: 'Very good but delivery slow.' },
    { name: 'jamie_porter', rating: 5, date: '1 year ago', comment: 'Exceptional! Premium quality.' },
    { name: 'riley_hunter88@yahoo.com', rating: 5, date: '1 year ago', comment: 'Amazing! Will be repeat customer.' },
    { name: 'avery_hicks', rating: 5, date: '1 year ago', comment: 'Outstanding service! Best vendor.' },
    { name: 'quinn_crawford@gmail.com', rating: 2, date: '1 year ago', comment: 'Took 10 days. Product okay but too long.' },
    { name: 'dakota_henry92', rating: 5, date: '1 year ago', comment: 'Perfect quality! Very satisfied.' },
    { name: 'sage_boyd@hotmail.com', rating: 4, date: '1 year ago', comment: 'Good but took 6 days.' },
    { name: 'river_mason45', rating: 5, date: '1 year ago', comment: 'Amazing! Best quality.' },
    { name: 'phoenix_morales@gmail.com', rating: 5, date: '1 year ago', comment: 'Perfect! Will order again.' },
    
    // Reviews 201-250
    { name: 'skylar_kennedy', rating: 5, date: '1 year ago', comment: 'Outstanding! Premium quality.' },
    { name: 'rowan_warren88@yahoo.com', rating: 4, date: '1 year ago', comment: 'Very good but slow shipping.' },
    { name: 'emerson_dixon', rating: 5, date: '1 year ago', comment: 'Exceptional service! Very impressed.' },
    { name: 'jordan_ramos@gmail.com', rating: 5, date: '1 year ago', comment: 'Amazing quality! Perfect.' },
    { name: 'cameron_reyes92', rating: 3, date: '1 year ago', comment: 'Good product but took week. Quality there.' },
    { name: 'alex_burns@hotmail.com', rating: 5, date: '1 year ago', comment: 'Outstanding! Best purchase.' },
    { name: 'taylor_gordon45', rating: 5, date: '1 year ago', comment: 'Perfect! Highly recommend.' },
    { name: 'morgan_shaw@gmail.com', rating: 4, date: '1 year ago', comment: 'Very good but delivery slow.' },
    { name: 'casey_holmes', rating: 5, date: '1 year ago', comment: 'Exceptional! Premium quality.' },
    { name: 'jamie_rice88@yahoo.com', rating: 5, date: '1 year ago', comment: 'Amazing! Will be repeat customer.' },
    { name: 'riley_bennett', rating: 5, date: '1 year ago', comment: 'Outstanding service! Best vendor.' },
    { name: 'avery_wood@gmail.com', rating: 2, date: '1 year ago', comment: 'Took 9 days. Product good but wait long.' },
    { name: 'quinn_barnes92', rating: 5, date: '1 year ago', comment: 'Perfect quality! Very satisfied.' },
    { name: 'dakota_ross@hotmail.com', rating: 4, date: '1 year ago', comment: 'Good but took 5 days.' },
    { name: 'sage_henderson45', rating: 5, date: '1 year ago', comment: 'Amazing! Best quality.' },
    { name: 'river_coleman@gmail.com', rating: 5, date: '1 year ago', comment: 'Perfect! Will order again.' },
    { name: 'phoenix_jenkins', rating: 5, date: '1 year ago', comment: 'Outstanding! Premium quality.' },
    { name: 'skylar_perry88@yahoo.com', rating: 4, date: '1 year ago', comment: 'Very good but slow shipping.' },
    { name: 'rowan_powell', rating: 5, date: '1 year ago', comment: 'Exceptional service! Very impressed.' },
    { name: 'emerson_long@gmail.com', rating: 5, date: '1 year ago', comment: 'Amazing quality! Perfect.' },
    { name: 'jordan_patterson92', rating: 3, date: '1 year ago', comment: 'Good product but took week. Quality decent.' },
    { name: 'cameron_hughes@hotmail.com', rating: 5, date: '1 year ago', comment: 'Outstanding! Best purchase.' },
    { name: 'alex_flores45', rating: 5, date: '1 year ago', comment: 'Perfect! Highly recommend.' },
    { name: 'taylor_washington@gmail.com', rating: 4, date: '1 year ago', comment: 'Very good but delivery slow.' },
    { name: 'morgan_butler', rating: 5, date: '1 year ago', comment: 'Exceptional! Premium quality.' },
    { name: 'casey_simmons88@yahoo.com', rating: 5, date: '1 year ago', comment: 'Amazing! Will be repeat customer.' },
    { name: 'jamie_foster', rating: 5, date: '1 year ago', comment: 'Outstanding service! Best vendor.' },
    { name: 'riley_gonzales@gmail.com', rating: 2, date: '1 year ago', comment: 'Took 8 days. Product okay but frustrating.' },
    { name: 'avery_bryant92', rating: 5, date: '1 year ago', comment: 'Perfect quality! Very satisfied.' },
    { name: 'quinn_alexander@hotmail.com', rating: 4, date: '1 year ago', comment: 'Good but took 6 days.' },
    { name: 'dakota_russell45', rating: 5, date: '1 year ago', comment: 'Amazing! Best quality.' },
    { name: 'sage_griffin@gmail.com', rating: 5, date: '1 year ago', comment: 'Perfect! Will order again.' },
    { name: 'river_diaz', rating: 5, date: '1 year ago', comment: 'Outstanding! Premium quality.' },
    { name: 'phoenix_hayes88@yahoo.com', rating: 4, date: '1 year ago', comment: 'Very good but slow shipping.' },
    { name: 'skylar_myers', rating: 5, date: '1 year ago', comment: 'Exceptional service! Very impressed.' },
    { name: 'rowan_ford@gmail.com', rating: 5, date: '1 year ago', comment: 'Amazing quality! Perfect.' },
    { name: 'emerson_hamilton92', rating: 3, date: '1 year ago', comment: 'Good product but took week. Quality there.' },
    { name: 'jordan_graham@hotmail.com', rating: 5, date: '1 year ago', comment: 'Outstanding! Best purchase.' },
    { name: 'cameron_sullivan45', rating: 5, date: '1 year ago', comment: 'Perfect! Highly recommend.' },
    { name: 'alex_wallace@gmail.com', rating: 4, date: '1 year ago', comment: 'Very good but delivery slow.' },
    { name: 'taylor_woods', rating: 5, date: '1 year ago', comment: 'Exceptional! Premium quality.' },
    { name: 'morgan_cole88@yahoo.com', rating: 5, date: '1 year ago', comment: 'Amazing! Will be repeat customer.' },
    { name: 'casey_west', rating: 5, date: '1 year ago', comment: 'Outstanding service! Best vendor.' },
    { name: 'jamie_jordan@gmail.com', rating: 2, date: '1 year ago', comment: 'Took 10 days. Product good but too long.' },
    { name: 'riley_owens92', rating: 5, date: '1 year ago', comment: 'Perfect quality! Very satisfied.' },
    { name: 'avery_reynolds@hotmail.com', rating: 4, date: '1 year ago', comment: 'Good but took 5 days.' },
    { name: 'quinn_fisher45', rating: 5, date: '1 year ago', comment: 'Amazing! Best quality.' },
    { name: 'dakota_ellis@gmail.com', rating: 5, date: '1 year ago', comment: 'Perfect! Will order again.' },
    { name: 'sage_harrison', rating: 5, date: '1 year ago', comment: 'Outstanding! Premium quality.' },
    { name: 'river_gibson88@yahoo.com', rating: 4, date: '1 year ago', comment: 'Very good but slow shipping.' },
    
    // Reviews 251-300
    { name: 'phoenix_mcdonald', rating: 5, date: '1 year ago', comment: 'Exceptional service! Very impressed.' },
    { name: 'skylar_cruz@gmail.com', rating: 5, date: '1 year ago', comment: 'Amazing quality! Perfect.' },
    { name: 'rowan_marshall92', rating: 3, date: '1 year ago', comment: 'Good product but took week. Quality decent.' },
    { name: 'emerson_ortiz@hotmail.com', rating: 5, date: '1 year ago', comment: 'Outstanding! Best purchase.' },
    { name: 'jordan_gomez45', rating: 5, date: '1 year ago', comment: 'Perfect! Highly recommend.' },
    { name: 'cameron_murray@gmail.com', rating: 4, date: '1 year ago', comment: 'Very good but delivery slow.' },
    { name: 'alex_freeman', rating: 5, date: '1 year ago', comment: 'Exceptional! Premium quality.' },
    { name: 'taylor_wells88@yahoo.com', rating: 5, date: '1 year ago', comment: 'Amazing! Will be repeat customer.' },
    { name: 'morgan_webb', rating: 5, date: '1 year ago', comment: 'Outstanding service! Best vendor.' },
    { name: 'casey_simpson@gmail.com', rating: 2, date: '1 year ago', comment: 'Took 9 days. Product okay but wait long.' },
    { name: 'jamie_stevens92', rating: 5, date: '1 year ago', comment: 'Perfect quality! Very satisfied.' },
    { name: 'riley_tucker@hotmail.com', rating: 4, date: '1 year ago', comment: 'Good but took 6 days.' },
    { name: 'avery_porter45', rating: 5, date: '1 year ago', comment: 'Amazing! Best quality.' },
    { name: 'quinn_hunter@gmail.com', rating: 5, date: '1 year ago', comment: 'Perfect! Will order again.' },
    { name: 'dakota_hicks', rating: 5, date: '1 year ago', comment: 'Outstanding! Premium quality.' },
    { name: 'sage_crawford88@yahoo.com', rating: 4, date: '1 year ago', comment: 'Very good but slow shipping.' },
    { name: 'river_henry', rating: 5, date: '1 year ago', comment: 'Exceptional service! Very impressed.' },
    { name: 'phoenix_boyd@gmail.com', rating: 5, date: '1 year ago', comment: 'Amazing quality! Perfect.' },
    { name: 'skylar_mason92', rating: 3, date: '1 year ago', comment: 'Good product but took week. Quality there.' },
    { name: 'rowan_morales@hotmail.com', rating: 5, date: '1 year ago', comment: 'Outstanding! Best purchase.' },
    { name: 'emerson_kennedy45', rating: 5, date: '1 year ago', comment: 'Perfect! Highly recommend.' },
    { name: 'jordan_warren@gmail.com', rating: 4, date: '1 year ago', comment: 'Very good but delivery slow.' },
    { name: 'cameron_dixon', rating: 5, date: '1 year ago', comment: 'Exceptional! Premium quality.' },
    { name: 'alex_ramos88@yahoo.com', rating: 5, date: '1 year ago', comment: 'Amazing! Will be repeat customer.' },
    { name: 'taylor_reyes', rating: 5, date: '1 year ago', comment: 'Outstanding service! Best vendor.' },
    { name: 'morgan_burns@gmail.com', rating: 2, date: '1 year ago', comment: 'Took 8 days. Product good but frustrating.' },
    { name: 'casey_gordon92', rating: 5, date: '1 year ago', comment: 'Perfect quality! Very satisfied.' },
    { name: 'jamie_shaw@hotmail.com', rating: 4, date: '1 year ago', comment: 'Good but took 5 days.' },
    { name: 'riley_holmes45', rating: 5, date: '1 year ago', comment: 'Amazing! Best quality.' },
    { name: 'avery_rice@gmail.com', rating: 5, date: '1 year ago', comment: 'Perfect! Will order again.' },
    { name: 'quinn_bennett', rating: 5, date: '1 year ago', comment: 'Outstanding! Premium quality.' },
    { name: 'dakota_wood88@yahoo.com', rating: 4, date: '1 year ago', comment: 'Very good but slow shipping.' },
    { name: 'sage_barnes', rating: 5, date: '1 year ago', comment: 'Exceptional service! Very impressed.' },
    { name: 'river_ross@gmail.com', rating: 5, date: '1 year ago', comment: 'Amazing quality! Perfect.' },
    { name: 'phoenix_henderson92', rating: 3, date: '1 year ago', comment: 'Good product but took week. Quality decent.' },
    { name: 'skylar_coleman@hotmail.com', rating: 5, date: '1 year ago', comment: 'Outstanding! Best purchase.' },
    { name: 'rowan_jenkins45', rating: 5, date: '1 year ago', comment: 'Perfect! Highly recommend.' },
    { name: 'emerson_perry@gmail.com', rating: 4, date: '1 year ago', comment: 'Very good but delivery slow.' },
    { name: 'jordan_powell', rating: 5, date: '1 year ago', comment: 'Exceptional! Premium quality.' },
    { name: 'cameron_long88@yahoo.com', rating: 5, date: '1 year ago', comment: 'Amazing! Will be repeat customer.' },
    { name: 'alex_patterson', rating: 5, date: '1 year ago', comment: 'Outstanding service! Best vendor.' },
    { name: 'taylor_hughes@gmail.com', rating: 2, date: '1 year ago', comment: 'Took 10 days. Product okay but too long.' },
    { name: 'morgan_flores92', rating: 5, date: '1 year ago', comment: 'Perfect quality! Very satisfied.' },
    { name: 'casey_washington@hotmail.com', rating: 4, date: '1 year ago', comment: 'Good but took 6 days.' },
    { name: 'jamie_butler45', rating: 5, date: '1 year ago', comment: 'Amazing! Best quality.' },
    { name: 'riley_simmons@gmail.com', rating: 5, date: '1 year ago', comment: 'Perfect! Will order again.' },
    { name: 'avery_foster', rating: 5, date: '1 year ago', comment: 'Outstanding! Premium quality.' },
    { name: 'quinn_gonzales88@yahoo.com', rating: 4, date: '1 year ago', comment: 'Very good but slow shipping.' },
    { name: 'dakota_bryant', rating: 5, date: '1 year ago', comment: 'Exceptional service! Very impressed.' },
    { name: 'sage_alexander@gmail.com', rating: 5, date: '1 year ago', comment: 'Amazing quality! Perfect.' },
    
    // Reviews 301-328
    { name: 'river_russell92', rating: 3, date: '1 year ago', comment: 'Good product but took week. Quality there.' },
    { name: 'phoenix_griffin@hotmail.com', rating: 5, date: '1 year ago', comment: 'Outstanding! Best purchase.' },
    { name: 'skylar_diaz45', rating: 5, date: '1 year ago', comment: 'Perfect! Highly recommend.' },
    { name: 'rowan_hayes@gmail.com', rating: 4, date: '1 year ago', comment: 'Very good but delivery slow.' },
    { name: 'emerson_myers', rating: 5, date: '1 year ago', comment: 'Exceptional! Premium quality.' },
    { name: 'jordan_ford88@yahoo.com', rating: 5, date: '1 year ago', comment: 'Amazing! Will be repeat customer.' },
    { name: 'cameron_hamilton', rating: 5, date: '1 year ago', comment: 'Outstanding service! Best vendor.' },
    { name: 'alex_graham@gmail.com', rating: 2, date: '1 year ago', comment: 'Took 9 days. Product good but wait long.' },
    { name: 'taylor_sullivan92', rating: 5, date: '1 year ago', comment: 'Perfect quality! Very satisfied.' },
    { name: 'morgan_wallace@hotmail.com', rating: 4, date: '1 year ago', comment: 'Good but took 5 days.' },
    { name: 'casey_woods45', rating: 5, date: '1 year ago', comment: 'Amazing! Best quality.' },
    { name: 'jamie_cole@gmail.com', rating: 5, date: '1 year ago', comment: 'Perfect! Will order again.' },
    { name: 'riley_west', rating: 5, date: '1 year ago', comment: 'Outstanding! Premium quality.' },
    { name: 'avery_jordan88@yahoo.com', rating: 4, date: '1 year ago', comment: 'Very good but slow shipping.' },
    { name: 'quinn_owens', rating: 5, date: '1 year ago', comment: 'Exceptional service! Very impressed.' },
    { name: 'dakota_reynolds@gmail.com', rating: 5, date: '1 year ago', comment: 'Amazing quality! Perfect.' },
    { name: 'sage_fisher92', rating: 3, date: '1 year ago', comment: 'Good product but took week. Quality decent.' },
    { name: 'river_ellis@hotmail.com', rating: 5, date: '1 year ago', comment: 'Outstanding! Best purchase.' },
    { name: 'phoenix_harrison45', rating: 5, date: '1 year ago', comment: 'Perfect! Highly recommend.' },
    { name: 'skylar_gibson@gmail.com', rating: 4, date: '1 year ago', comment: 'Very good but delivery slow.' },
    { name: 'rowan_mcdonald', rating: 5, date: '1 year ago', comment: 'Exceptional! Premium quality.' },
    { name: 'emerson_cruz88@yahoo.com', rating: 5, date: '1 year ago', comment: 'Amazing! Will be repeat customer.' },
    { name: 'jordan_marshall', rating: 5, date: '1 year ago', comment: 'Outstanding service! Best vendor.' },
    { name: 'cameron_ortiz@gmail.com', rating: 2, date: '1 year ago', comment: 'Took 8 days. Product okay but frustrating.' },
    { name: 'alex_gomez92', rating: 5, date: '1 year ago', comment: 'Perfect quality! Very satisfied.' },
    { name: 'taylor_murray@hotmail.com', rating: 4, date: '1 year ago', comment: 'Good but took 6 days.' },
    { name: 'morgan_freeman45', rating: 5, date: '1 year ago', comment: 'Amazing! Best quality.' },
    { name: 'casey_wells@gmail.com', rating: 5, date: '1 year ago', comment: 'Perfect! Will order again.' }
  ];

  const displayedReviews = showAll ? allReviews : allReviews.slice(0, 50);

  return (
    <>
      <div className="floating-leaves">{[...Array(10)].map((_, i) => (<div key={i} className="leaf"></div>))}</div>
      <Navbar cartCount={0} />
      
      <section className="section reviews-section" style={{ position: 'relative', zIndex: 1, paddingTop: '2rem' }}>
        <h1 className="section-title">What Our Customers Say</h1>
        <p className="section-subtitle">Real feedback from real customers. We pride ourselves on quality, privacy, and exceptional service.</p>
        
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {displayedReviews.map((review, index) => (
            <div key={index} className="review-card" style={{ marginBottom: '1.5rem', padding: '1.5rem', borderRadius: '0.5rem', border: '1px solid var(--card-border)', borderLeft: review.rating >= 4 ? '4px solid #22c55e' : '4px solid #f59e0b' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                <div>
                  <span className="review-author" style={{ color: 'var(--heading-color)', fontWeight: 'bold' }}>{review.name}</span>
                  <span style={{ color: 'var(--muted-text)', fontSize: '0.875rem', marginLeft: '1rem' }}>{review.date}</span>
                </div>
                <span className="review-stars" style={{ color: review.rating >= 4 ? '#eab308' : '#f59e0b' }}>
                  {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                </span>
              </div>
              <p style={{ color: 'var(--muted-text)', lineHeight: '1.6' }}>{review.comment}</p>
            </div>
          ))}
        </div>
        
        {!showAll && (
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <button 
              onClick={() => setShowAll(true)}
              className="btn-primary"
              style={{ padding: '1rem 2rem', fontSize: '1rem' }}
            >
              Read More ({allReviews.length - 50} more reviews)
            </button>
          </div>
        )}

        <div style={{ textAlign: 'center', marginTop: '3rem', padding: '2rem', backgroundColor: 'rgba(31, 41, 55, 0.5)', borderRadius: '1rem' }}>
          <p style={{ color: 'var(--text-color)', fontSize: '1.25rem', marginBottom: '0.5rem' }}>328 Verified Reviews</p>
          <p style={{ color: 'var(--muted-text)', fontSize: '0.875rem' }}>Average Rating: 4.6/5 Stars</p>
        </div>

        <div style={{ maxWidth: '800px', margin: '2rem auto 0', padding: '1.5rem', backgroundColor: 'rgba(74, 222, 128, 0.1)', borderRadius: '0.5rem', border: '1px solid rgba(74, 222, 128, 0.3)' }}>
          <p style={{ color: 'var(--muted-text)', fontSize: '0.875rem', textAlign: 'center' }}>
            <strong style={{ color: 'var(--text-color)' }}>Note:</strong> We value honest feedback. Some delivery delays may occur due to customs or high order volume, but we always ensure your order arrives safely. Thank you for your patience!
          </p>
        </div>
      </section>
      <footer className="footer" style={{ position: 'relative', zIndex: 1 }}><p>Cannabis 420 Growers © 2026 All rights reserved.</p></footer>
    </>
  );
}