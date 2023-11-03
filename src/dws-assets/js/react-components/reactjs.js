// const {useState, useEffect} = require('react');

// function AppEstimateStep() {
//   //React hooks
//   const [activeStep, setActiveStep] = useState(0);
//   const [listData, setListData] = useState([]);
//   const [stepsData, setStepsData] = useState({});
//   const [selectedData, setSelectedData] = useState([]);
//   const [questionList, setQuestionList] = useState([]);
//   const [allAnsIds, setAllAnsIds] = useState('');
//   const [hoursPriceData, setHoursPriceData] = useState({});
//   const [userName, setUserName] = useState('');
//   const [phone, setPhone] = useState('');
//   const [emailValue, setEmailValue] = useState('');
//   const [isWhatsapp, setIsWhatsapp] = useState(true);
//   const [projectDescription, setProjectDescription] = useState('');
//   const [freeBA, setFreeBA] = useState(true);
//   const [profession, setProfession] = useState('');
//   const [company, setCompany] = useState('');
//   const [projectStage, setProjectStage] = useState('');
//   const [budget, setBudget] = useState(3);
//   const [timeline, setTimeline] = useState(3);
//   const [totalPrice, setTotalPrice] = useState(0);
//   const [countryList, setCounrtyList] = useState([]);
//   const [loader, setLoader] = useState(false);
//   const [loader1, setLoader1] = useState(true);
//   const [boxHovered, setBoxHover] = useState(false);
//   const [loaderTurn, setLoaderTurn] = useState(0);
//   const [viewPrice, setViewPrice] = useState(false);
//   const isDevMode = location.protocol !== 'https:'; // Set Dev mode if working on Local
//   const fakeStepNav = true;

//   //API endpoints
//   const categoryListApi = baseUrl + '/v1/calculator/categories-list';
//   const questionListApi = baseUrl + '/v1/calculator/question-list';
//   const sendAppEstimateApi = baseUrl + '/v1/calculator/send-app-estimate';
//   const getAppEstimateApi = baseUrl + '/v1/calculator/get-sum';
//   const allCountriesListApi = baseUrl + '/v1/calculator/countries-list';
//   const professionArray = [
//     {
//       id: 0,
//       title: 'Student',
//       image: `${baseUrl}/uploads/app_cost_calculator/professionals/student.svg`,
//     },
//     {
//       id: 1,
//       title: 'Entrepreneur',
//       image: `${baseUrl}/uploads/app_cost_calculator/professionals/entrepreneur.svg`,
//     },
//     {
//       id: 2,
//       title: 'Business owner',
//       image: `${baseUrl}/uploads/app_cost_calculator/professionals/business_owner.svg`,
//     },
//     {
//       id: 3,
//       title: 'Manager',
//       image: `${baseUrl}/uploads/app_cost_calculator/professionals/manager.svg`,
//     },
//     {
//       id: 4,
//       title: 'Freelancer',
//       image: `${baseUrl}/uploads/app_cost_calculator/professionals/freelancer.svg`,
//     },
//     {
//       id: 5,
//       title: 'Designer',
//       image: `${baseUrl}/uploads/app_cost_calculator/professionals/designer.svg`,
//     },
//     {
//       id: 6,
//       title: 'Developer',
//       image: `${baseUrl}/uploads/app_cost_calculator/professionals/developer.svg`,
//     },
//     {
//       id: 7,
//       title: 'Marketer',
//       image: `${baseUrl}/uploads/app_cost_calculator/professionals/marketer.svg`,
//     },
//     {
//       id: 8,
//       title: 'Salesperson',
//       image: `${baseUrl}/uploads/app_cost_calculator/professionals/salesperson.svg`,
//     },
//     {
//       id: 9,
//       title: 'Consultant',
//       image: `${baseUrl}/uploads/app_cost_calculator/professionals/consultant.svg`,
//     },
//     {
//       id: 10,
//       title: 'Executive',
//       image: `${baseUrl}/uploads/app_cost_calculator/professionals/executive.svg`,
//     },
//     {
//       id: 11,
//       title: 'Other',
//       image: `${baseUrl}/uploads/app_cost_calculator/professionals/other.svg`,
//     },
//   ];
//   const projectStages = [
//     {
//       id: 1,
//       title: 'Ideation/ Conceptualization',
//       emoji: '💡',
//     },
//     {
//       id: 2,
//       title: 'Research and Planning',
//       emoji: '🔍',
//     },
//     {
//       id: 3,
//       title: 'Looking for Investment',
//       emoji: '🤑',
//     },
//     {
//       id: 4,
//       title: 'Finding a Tech Partner',
//       emoji: '🤝',
//     },
//     {
//       id: 5,
//       title: 'UI/UX or Prototype',
//       emoji: '💫',
//     },
//     {
//       id: 6,
//       title: 'App Development',
//       emoji: '💻',
//     },
//     {
//       id: 7,
//       title: 'Launch App',
//       emoji: '🚀',
//     },
//     {
//       id: 8,
//       title: 'Post-Launch Plan',
//       emoji: '🕔',
//     },
//     {
//       id: 9,
//       title: 'Planning Next Phase',
//       emoji: '🔥',
//     },
//     {
//       id: 10,
//       title: 'Switching Existing Team',
//       emoji: '😞',
//     },
//     {
//       id: 11,
//       title: 'Other',
//       emoji: '🤔',
//     },
//   ];
//   const budgetArray = [
//     '< $5000',
//     '$5K - $10K',
//     '$10K - $25K',
//     '$25K - $50K',
//     '$50K - $100K',
//     '$100K+',
//   ];
//   const timelineArray = [
//     '< 1 Month',
//     '1 - 2 Months',
//     '2 - 4 Months',
//     '4 - 8 Months',
//     '8 - 12 Months',
//     '12 Months+',
//   ];
//   const isBusiness = () => {
//     return [
//       'Entrepreneur',
//       'Business owner',
//       'Manager',
//       'Executive',
//       'Designer',
//       'Developer',
//       'Marketer',
//       'Salesperson',
//     ].find((ele) => ele === profession);
//   };

//   /* Custom Creative Slider */
//   var interval;
//   let slider = $('.c-slider');
//   let input = $('.c-slider input');
//   let random = (min, max) => min + Math.random() * (max - min);
//   let between = (min, max, percent) => max - (max - min) * (1 - percent);
//   let create = (slider) => {
//     let percent = slider.handle.dataset.percent,
//       position = slider.handle.dataset.position,
//       div = document.createElement('div');
//     div.classList.add('smoke');
//     slider.range.appendChild(div);
//     gsap.set(div, {
//       x: position,
//       y: -20,
//     });
//     gsap
//       .timeline()
//       .to(div, {
//         scale: random(between(0.15, 1, percent), between(0.4, 2, percent)),
//         duration: 1,
//       })
//       .to(div, {
//         scale: 0,
//         duration: 1,
//       });
//     gsap.to(div, {
//       duration: between(0.3, 0.4, percent),
//       opacity: 1,
//     });
//     gsap.to(div, {
//       duration: between(2, 3, percent),
//       y: random(between(-40, -200, percent), between(-70, -320, percent)),
//       x: random(between(-20, -90, percent), between(20, 90, percent)) + parseInt(position),
//       onComplete() {
//         div.remove();
//       },
//     });
//   };

//   // For Development mode going to Any step
//   useEffect(() => {
//     // For Dev mode is step is 0
//     if (isDevMode && fakeStepNav) {
//       if (activeStep === 0 && listData.length > 0) {
//         if (listData[0].id) {
//           callAnotherApi(listData[0].id);
//         }
//         // Enter Number of step you want to navigate to
//         setActiveStep(9);
//         // Fake Data for Steps
//         setStepsData([
//           {
//             id: 1,
//           },
//         ]);
//         setLoaderTurn(9);
//         // Set Fake Price Data
//         setHoursPriceData({
//           hours: 0,
//           price: 0,
//         });
//       }
//     }
//   }, [listData]);
//   // this function for category list
//   const callApi = async () => {
//     const response = await fetch(categoryListApi);
//     const jsonResponse = await response.json();
//     setListData(jsonResponse.data);
//   };

//   // this function for get questions list - Pankaj 18/10
//   const callAnotherApi = (question_id) => {
//     const url =
//       // selectedData &&
//       // selectedData.question_id &&
//       // `${questionListApi}?id=${selectedData.question_id}`;
//       `${questionListApi}?id=${question_id}`;
//     fetch(url)
//       .then((response) => response.json())
//       .then((response) => {
//         if (response && response.status && response.data) {
//           setQuestionList(response.data);
//         } else {
//           activeStep === 1
//             ? null
//             : swal({
//                 title: 'Opps !',
//                 text: response.message,
//                 icon: 'error',
//               }).then((e) => {
//                 window.location.reload();
//                 window.onscroll = function () {
//                   window.scrollTo(0, 0);
//                 };
//               });
//         }
//       })
//       .catch((err) => console.alert('error ===>>>', err));
//   };

//   //get sum total and price total function
//   const callGetSumApi = (ids) => {
//     const url = `${getAppEstimateApi}?ans_ids=${ids}`;
//     fetch(url)
//       .then((response) => response.json())
//       .then((response) => {
//         if (response.data) {
//           setHoursPriceData(response.data);
//         }
//       })
//       .catch((err) => console.log('error get summmm===>>>', err));
//   };

//   //function for send app estimate to backend
//   const sendAppEstimate = async (e) => {
//     setLoader(true);
//     e.preventDefault();
//     const uname = userName.trim();
//     const uemail = emailValue.trim();
//     const uphone = phone.trim();
//     const uprojectDesc = projectDescription.trim();
//     const emailVer =
//       /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     const nameVer = /^[a-zA-Z .]*$/; ///^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
//     const numberRegex = /^\d+$/;
//     if (uname == '' || uname.length == 0) {
//       swal({
//         title: 'Please Enter Name ',
//         text: 'All fields are required',
//         icon: 'error',
//         allowOutsideClick: false,
//         allowEscapeKey: false,
//         heightAuto: false,
//       }).then(() => {
//         setLoader(false);
//         e.preventDefault();
//         document.body.style.overflow = 'unset';
//       });
//     } else if (uphone == '' || uphone.length == 0) {
//       swal({
//         title: 'Please Enter Phone Number ',
//         text: 'All fields are required',
//         icon: 'error',
//         allowOutsideClick: false,
//         allowEscapeKey: false,
//         heightAuto: false,
//       }).then(() => {
//         setLoader(false);
//         e.preventDefault();
//         document.body.style.overflow = 'unset';
//       });
//     } else if (!numberRegex.test(uphone)) {
//       swal({
//         title: 'Please Enter Valid Phone Number ',
//         text: 'All fields are required',
//         icon: 'error',
//         allowOutsideClick: false,
//         allowEscapeKey: false,
//         heightAuto: false,
//       }).then(() => {
//         setLoader(false);
//         e.preventDefault();
//         document.body.style.overflow = 'unset';
//       });
//     } else if (!nameVer.test(userName)) {
//       document.body.style.overflow = 'hidden';
//       swal({
//         title: 'Please Enter Valid Full Name OR Email',
//         text: 'All fields are Proper required',
//         icon: 'error',
//         allowOutsideClick: false,
//         allowEscapeKey: false,
//         heightAuto: false,
//       }).then(() => {
//         setLoader(false);
//         e.preventDefault();
//         document.body.style.overflow = 'unset';
//       });
//     } else if (uemail == '' || uemail.length == 0) {
//       swal({
//         title: 'Please Enter Email',
//         text: 'All fields are required',
//         icon: 'error',
//         allowOutsideClick: false,
//         allowEscapeKey: false,
//         heightAuto: false,
//       }).then(() => {
//         setLoader(false);
//         e.preventDefault();
//         document.body.style.overflow = 'unset';
//       });
//     } else if (!emailVer.test(emailValue)) {
//       swal({
//         title: 'Please Enter Valid Email',
//         text: 'All fields are Proper required',
//         icon: 'error',
//         allowOutsideClick: false,
//         allowEscapeKey: false,
//         heightAuto: false,
//       }).then(() => {
//         setLoader(false);
//         e.preventDefault();
//         document.body.style.overflow = 'unset';
//       });
//     } else if (uname == '' || uname.length == 0 || uemail == '' || uemail.length == 0) {
//       document.body.style.overflow = 'hidden';
//       swal({
//         title: 'Please Enter Name OR Email OR Phone',
//         text: 'All fields are required',
//         icon: 'error',
//         allowOutsideClick: false,
//         allowEscapeKey: false,
//         heightAuto: false,
//       }).then(() => {
//         setLoader(false);
//         e.preventDefault();
//         document.body.style.overflow = 'unset';
//       });
//     } else {
//       document.body.style.overflow = 'hidden';
//       e.preventDefault();
//       const indId = stepsData[0].id;
//       var clientId = readCookie('clientId');
//       const formData = new FormData();
//       formData.append('AppEstimate[name]', uname);
//       formData.append('AppEstimate[email]', uemail.toString());
//       formData.append('AppEstimate[phone]', uphone.toString());
//       formData.append('AppEstimate[is_whatsapp]', isWhatsapp);
//       formData.append('AppEstimate[free_ba]', freeBA);
//       formData.append('AppEstimate[project_description]', uprojectDesc.toString());
//       formData.append('AppEstimate[country]', 'NA');
//       formData.append('AppEstimate[profession]', profession);
//       formData.append('AppEstimate[company]', company);
//       formData.append('AppEstimate[projectStage]', projectStage);
//       formData.append('AppEstimate[budget]', budgetArray[budget - 1]);
//       formData.append('AppEstimate[timeline]', timelineArray[timeline - 1]);
//       formData.append('AppEstimate[hours]', hoursPriceData.hours.toString());
//       formData.append('AppEstimate[price]', hoursPriceData.price.toString());
//       formData.append('AppEstimate[ans_ids]', allAnsIds);
//       formData.append('AppEstimate[industry_id]', indId);
//       formData.append('AppEstimate[clientId]', clientId);
//       fetch(sendAppEstimateApi, {
//         method: 'POST',
//         body: formData,
//         // headers: {
//         //   'Content-Type': 'multipart/form-data'
//         // },
//       })
//         .then((response) => response.json())
//         .then((response) => {
//           if (response.success) {
//             setLoader(false);
//             document.body.style.overflow = 'hidden';
//             swal({
//               title: 'Done 🚀',
//               text: response.message,
//               icon: 'success',
//             }).then((e) => {
//               setViewPrice(true);
//               setUserName('');
//               setPhone('');
//               setEmailValue('');
//               // window.location.reload();
//               document.body.style.overflow = 'unset';
//             });
//           } else {
//             setLoader(false);
//             document.body.style.overflow = 'unset';
//             swal({
//               title: response.title || 'Oops! Please try again',
//               text: response.message,
//               icon: 'error',
//             }).then((e) => {
//               e.preventDefault();
//             });
//           }
//           console.log('response grt sum===>> ', response);
//         })
//         .catch((err) => console.log('error get summmm===>>>', err));
//     }
//   };

//   //get country list data
//   const callCountryListApi = () => {
//     fetch(allCountriesListApi)
//       .then((response) => response.json())
//       .then((response) => {
//         if (response.data) {
//           setCounrtyList(response.data);
//         }
//       });
//   };

//   /* On Page Load */
//   useEffect(() => {
//     window.scrollTo(0, 0);

//     /* Call default Industries */
//     callApi();

//     // Country list api call - No More required as removing Country Dropdown
//     // callCountryListApi();
//   }, []);
//   useEffect(() => {
//     if (activeStep == 8) {
//       console.log(11111111);
//       // counter();
//     }

//     if (activeStep == 9) {
//       console.log('Step 9 ====> ');
//       slider = $('.c-slider');
//       input = $('.c-slider input');
//       console.log(slider, input);
//       if (input.length > 0) {
//         // setTimeout(() => {
//         rangesliderJs.create(input, {
//           onInit(value) {
//             this.handle.dataset.value = value;
//             // get range index labels
//             var rangeLabels = $(this.element).attr('labels');
//             rangeLabels = rangeLabels.split(', ');
//             // add labels
//             var rangeEl = $(this.element).next();
//             // console.log(slider, slider.find('.rangeslider'), rangeEl);
//             rangeEl.append('<div class="rangeslider__labels"></div>');
//             $(rangeLabels).each(function (index, value) {
//               rangeEl
//                 .find('.rangeslider__labels')
//                 .append('<span class="rangeslider__labels__label">' + value + '</span>');
//             });
//             this.handle.dataset.value = $(this.element).attr('handle');
//           },
//           onSlideStart(value, percent, position) {
//             this.handle.classList.add('active');
//             if ($(this.element).attr('animate') == 'true') {
//               interval = setInterval(() => {
//                 create(this);
//               }, 50);
//             }
//           },
//           onSlide(value, percent, position) {
//             this.handle.dataset.value = $(this.element).attr('handle');
//             // this.handle.dataset.value = value;
//             this.handle.dataset.percent = percent;
//             $(this.handle).css('fontSize', `${13 + value * 3}px`);
//             this.handle.dataset.position = position;
//           },
//           onSlideEnd() {
//             this.handle.classList.remove('active');
//             $(this.handle).css('fontSize', '14px');
//             clearInterval(interval);
//           },
//         });
//         // }, 1000);
//       }
//     }
//   }, [activeStep]);

//   // useEffect(() => {
//   //   if (activeStep == 1) {
//   //     callAnotherApi()
//   //   }
//   // }, [activeStep]);

//   function getAnswers() {
//     const nArr = [];
//     if (selectedData.length < 1) {
//       alert('provide data...');
//     } else {
//       Object.keys(stepsData).map((key) => {
//         if (Array.isArray(stepsData[key])) {
//           stepsData[key].map((i) => {
//             nArr.push(i.id);
//           });
//         } else {
//           nArr.push(stepsData[key].id);
//         }
//       });
//       nArr.shift();
//       setAllAnsIds(nArr.toString());
//       activeStep == 8 ? callGetSumApi(nArr.toString()) : null;
//     }
//   }

//   // this function for store data in local and update in state - Pankaj 18/10
//   function handleData(item = {}, type = '') {
//     let nObj = {
//       ...stepsData,
//     };
//     if (type === 'radio') {
//       if (nObj[activeStep] === item) {
//         item.isSelected = false;
//         nObj[activeStep] = {};
//       } else {
//         item.isSelected = true;
//         nObj[activeStep] = item;
//       }
//     } else if (type === 'checkbox') {
//       const nArr = nObj && nObj[activeStep] ? [...nObj[activeStep]] : [];
//       const index = nArr && nArr.findIndex((val) => val.id === item.id);
//       if (index > -1) {
//         item.isSelected = false;
//         nArr.splice(index, 1);
//       } else {
//         item.isSelected = true;
//         nArr.push(item);
//       }
//       nObj[activeStep] = nArr;
//     }
//     Object.keys(stepsData).map((key) => {
//       if (Number(key) > Number(activeStep) && activeStep >= 1) {
//         const qType = questionList && questionList[Number(key) - 1];
//         nObj[key] = qType && qType.type === 'checkbox' ? [] : {};
//       }
//       if (Number(key) > activeStep && activeStep === 0) {
//         nObj = {
//           0: item,
//         };
//       }
//     });
//     setStepsData(nObj);
//   }
//   // this function checks validation for current tab data
//   function validation(step) {
//     let valid = true;
//     if (step == 9) {
//       setBudget($('#pBudget').val());
//       setTimeline($('#pTimeline').val());
//       if (profession == '' || projectStage == '' || budget == '' || timeline == '') {
//         valid = false;
//       }
//     } else if (stepsData[step] === undefined) {
//       valid = false;
//     } else if (stepsData[step]) {
//       if (Array.isArray(stepsData[step]) && stepsData[step].length === 0) {
//         valid = false;
//       } else if (stepsData[step] === {} || Object.keys(stepsData[step]).length === 0) {
//         valid = false;
//       }
//     }
//     return valid;
//   }

//   // this function for render button - Pankaj 18/10
//   function renderButton() {
//     return /*#__PURE__*/ createElement(
//       'div',
//       {
//         className: 'form-group btn-wizard-Div Flip-wizard-Div  clearfix',
//       },
//       activeStep > 0
//         ? /*#__PURE__*/ createElement(
//             'div',
//             {
//               className: 'Previous-Div',
//             },
//             /*#__PURE__*/ createElement(
//               'a',
//               {
//                 className: `form-wizard-next-btn float-right  step-${activeStep}`,
//                 onClick: () => {
//                   window.scrollTo(0, 0);
//                   setLoaderTurn(loaderTurn - 1);
//                   if (activeStep > 0) {
//                     setActiveStep((step) => step - 1);
//                   }
//                 },
//               },
//               /*#__PURE__*/ createElement('i', {
//                 className: 'icon-Path-13735 flip-icon',
//               }),
//               ' Previous'
//             )
//           )
//         : null,
//       /*#__PURE__*/ createElement(
//         'div',
//         {
//           className: 'Next-Div',
//         },
//         /*#__PURE__*/ createElement(
//           'a',
//           {
//             className: `form-wizard-next-btn float-right step-${activeStep}`,
//             onClick: async () => {
//               const bool = await validation(activeStep);
//               if (bool) {
//                 setLoaderTurn(loaderTurn + 1);
//                 setTimeout(() => {
//                   setActiveStep((step) => step + 1);
//                   window.scrollTo(0, 0);
//                 }, 1000);
//                 getAnswers();
//               } else {
//                 document.body.style.overflow = 'hidden';
//                 swal({
//                   title: '',
//                   text: 'The following questions require you to select an option.',
//                   // "Please select answer.",
//                   icon: 'error',
//                 }).then(() => {
//                   window.scrollTo(0, 0);
//                   document.body.style.overflow = 'unset';
//                 });
//               }
//             },
//           },
//           activeStep !== loaderTurn ? 'Loading...' : 'Next',
//           ' ',
//           /*#__PURE__*/ createElement('i', {
//             className: 'icon-Path-13734',
//           })
//         )
//       )
//     );
//   }
//   return /*#__PURE__*/ createElement(
//     'section',
//     {
//       className: 'wizard-section',
//     },
//     activeStep > 9
//       ? /*#__PURE__*/ createElement(
//           'div',
//           {
//             className: 'container',
//           },
//           /*#__PURE__*/ createElement(
//             'h5',
//             {
//               className: 'lastFormTitle',
//             },
//             'Stop. Your search for the right Development Partner ends here...'
//           ),
//           /*#__PURE__*/ createElement(
//             'div',
//             {
//               className: 'last-wizard-Bg',
//             },
//             /*#__PURE__*/ createElement(
//               'div',
//               {
//                 className: 'row no-gutters',
//               },
//               /*#__PURE__*/ createElement(
//                 'div',
//                 {
//                   className: 'col-lg-12 col-md-12',
//                 },
//                 /*#__PURE__*/ createElement(
//                   'div',
//                   {
//                     className: 'row',
//                   },
//                   /*#__PURE__*/ createElement(
//                     'div',
//                     {
//                       className: 'col-md-6 col-sm-6 col-xs-12',
//                     },
//                     /*#__PURE__*/ createElement(
//                       'div',
//                       {
//                         className: 'blueBG_offers',
//                       },
//                       /*#__PURE__*/ createElement(
//                         'div',
//                         {
//                           className: 'OfferDiv',
//                         },
//                         /*#__PURE__*/ createElement('img', {
//                           className: 'Wizad-OfferedImg',
//                           src: '../uploads/app_estimate/giphy.gif',
//                           alt: 'giphy',
//                         })
//                       ),
//                       /*#__PURE__*/ createElement(
//                         'div',
//                         {
//                           className: 'offerBtnWizad',
//                         },
//                         /*#__PURE__*/ createElement(
//                           'a',
//                           {
//                             href: '#',
//                             className: 'btn-wizadSubmit',
//                           },
//                           /*#__PURE__*/ createElement('img', {
//                             className: 'Wizad-OfferedBtn',
//                             src: '../uploads/app_estimate/Union.png',
//                             alt: 'Union',
//                           }),
//                           /*#__PURE__*/ createElement(
//                             'small',
//                             null,
//                             'Submit the form on your right',
//                             '   ',
//                             /*#__PURE__*/ createElement('i', {
//                               className: 'icon-Path-13734',
//                             })
//                           )
//                         )
//                       ),
//                       /*#__PURE__*/ createElement(
//                         'div',
//                         {
//                           className: 'OfferText',
//                         },
//                         /*#__PURE__*/ createElement(
//                           'h6',
//                           null,
//                           'Get ',
//                           /*#__PURE__*/ createElement('strong', null, 'one-week'),
//                           ' project discovery sessions with our experts at ',
//                           /*#__PURE__*/ createElement('strong', null, 'zero'),
//                           ' ',
//                           'cost.'
//                         )
//                       )
//                     )
//                   ),
//                   /*#__PURE__*/ createElement(
//                     'div',
//                     {
//                       className: 'col-md-6 col-sm-6 col-xs-12',
//                     },
//                     /*#__PURE__*/ createElement(
//                       'div',
//                       {
//                         className: 'lastWizad_FormMain',
//                       },
//                       /*#__PURE__*/ createElement(
//                         'div',
//                         {
//                           className: 'WizadHoursDiv',
//                         },
//                         /*#__PURE__*/ createElement(
//                           'div',
//                           {
//                             className: 'HoureDiv',
//                           },
//                           /*#__PURE__*/ createElement(
//                             'div',
//                             {
//                               className: 'HoureDivBg',
//                             },
//                             /*#__PURE__*/ createElement('i', {
//                               className: 'icon-ant-design_field-time-outlined',
//                             })
//                           ),
//                           /*#__PURE__*/ createElement(
//                             'div',
//                             {
//                               className: 'outlinedWizad',
//                             },
//                             /*#__PURE__*/ createElement(
//                               'span',
//                               null,
//                               `${
//                                 hoursPriceData.labeltype == 'hours' ? 'Hours' : 'Months'
//                               } of development`
//                             ),
//                             /*#__PURE__*/ createElement(
//                               'p',
//                               {
//                                 style: viewPrice
//                                   ? {}
//                                   : {
//                                       filter: 'blur(4px)',
//                                     },
//                               },
//                               viewPrice ? hoursPriceData.hours : '00:00',
//                               ' ',
//                               /*#__PURE__*/ createElement(
//                                 'small',
//                                 null,
//                                 hoursPriceData.labeltype || ''
//                               )
//                             )
//                           )
//                         ),
//                         /*#__PURE__*/ createElement(
//                           'div',
//                           {
//                             className: 'HoureDiv',
//                           },
//                           /*#__PURE__*/ createElement(
//                             'div',
//                             {
//                               className: 'HoureDivBg',
//                             },
//                             /*#__PURE__*/ createElement('i', {
//                               className: 'icon-Cost-of-building-your-app',
//                             })
//                           ),
//                           /*#__PURE__*/ createElement(
//                             'div',
//                             {
//                               className: 'outlinedWizad',
//                             },
//                             /*#__PURE__*/ createElement('span', null, 'Cost of building your app'),
//                             /*#__PURE__*/ createElement(
//                               'p',
//                               {
//                                 style: viewPrice
//                                   ? {}
//                                   : {
//                                       filter: 'blur(4px)',
//                                     },
//                               },
//                               viewPrice ? hoursPriceData.price : '0.00',
//                               ' ',
//                               /*#__PURE__*/ createElement('small', null, '$')
//                             )
//                           )
//                         )
//                       ),
//                       /*#__PURE__*/ createElement(
//                         'div',
//                         {
//                           className: 'WizadLetsForm',
//                         },
//                         /*#__PURE__*/ createElement('h5', null, "Let's Get Started"),
//                         /*#__PURE__*/ createElement('small', null, 'Get a full estimate'),
//                         /*#__PURE__*/ createElement(
//                           'div',
//                           {
//                             className: 'GetLink',
//                           },
//                           /*#__PURE__*/ createElement('span', null, 'Detailed feature list,'),
//                           ' ',
//                           /*#__PURE__*/ createElement('span', null, 'Technical architecture,'),
//                           ' ',
//                           /*#__PURE__*/ createElement('span', null, 'and'),
//                           ' ',
//                           /*#__PURE__*/ createElement('span', null, 'Delivery roadmap')
//                         )
//                       ),
//                       /*#__PURE__*/ createElement(
//                         'div',
//                         {
//                           className: 'WizadLetsFormLast',
//                         },
//                         /*#__PURE__*/ createElement(
//                           'form',
//                           null,
//                           /*#__PURE__*/ createElement(
//                             'div',
//                             {
//                               className: 'row',
//                             },
//                             /*#__PURE__*/ createElement(
//                               'div',
//                               {
//                                 className: 'col-md-6 col-xs-12',
//                               },
//                               /*#__PURE__*/ createElement(
//                                 'div',
//                                 {
//                                   className: 'group-input',
//                                 },
//                                 /*#__PURE__*/ createElement(
//                                   'label',
//                                   {
//                                     for: 'fname',
//                                   },
//                                   'Full Name*'
//                                 ),
//                                 /*#__PURE__*/ createElement('input', {
//                                   type: 'text',
//                                   id: 'fname',
//                                   name: 'fname',
//                                   placeholder: 'Enter your name',
//                                   className: 'Wizad_last-input',
//                                   value: userName,
//                                   onChange: (e) => setUserName(e.target.value),
//                                   autocomplete: 'name',
//                                 })
//                               )
//                             ),
//                             /*#__PURE__*/ createElement(
//                               'div',
//                               {
//                                 className: 'col-md-6 col-xs-12 contact-number',
//                               },
//                               /*#__PURE__*/ createElement(
//                                 'div',
//                                 {
//                                   className: 'group-input mb0',
//                                 },
//                                 /*#__PURE__*/ createElement(
//                                   'label',
//                                   {
//                                     for: 'Phone',
//                                   },
//                                   'Contact Number'
//                                 ),
//                                 /*#__PURE__*/ createElement('input', {
//                                   type: 'tel',
//                                   id: 'Phone',
//                                   name: 'Phone',
//                                   placeholder: 'Enter your Phone',
//                                   className: 'Wizad_last-input',
//                                   value: phone,
//                                   onChange: (e) => setPhone(e.target.value),
//                                   autocomplete: 'tel',
//                                 })
//                               ),
//                               /*#__PURE__*/ createElement(
//                                 'div',
//                                 {
//                                   class: 'form-check',
//                                 },
//                                 /*#__PURE__*/ createElement('input', {
//                                   class: 'form-check-input',
//                                   type: 'checkbox',
//                                   checked: isWhatsapp,
//                                   onChange: (e) => setIsWhatsapp(e.target.checked),
//                                   id: 'isWhatsapp',
//                                 }),
//                                 /*#__PURE__*/ createElement(
//                                   'label',
//                                   {
//                                     class: 'form-check-label',
//                                     for: 'isWhatsapp',
//                                   },
//                                   'This is my whatsapp number'
//                                 )
//                               )
//                             )
//                           ),
//                           /*#__PURE__*/ createElement(
//                             'div',
//                             {
//                               className: 'row',
//                             },
//                             /*#__PURE__*/ createElement(
//                               'div',
//                               {
//                                 className: 'col-md-12 col-xs-12',
//                               },
//                               /*#__PURE__*/ createElement(
//                                 'div',
//                                 {
//                                   className: 'group-input',
//                                 },
//                                 /*#__PURE__*/ createElement(
//                                   'label',
//                                   {
//                                     for: 'email',
//                                   },
//                                   'Work Email*'
//                                 ),
//                                 /*#__PURE__*/ createElement('input', {
//                                   type: 'text',
//                                   id: 'email',
//                                   name: 'email',
//                                   placeholder: 'Enter your email',
//                                   className: 'Wizad_last-input',
//                                   value: emailValue,
//                                   onChange: (e) => setEmailValue(e.target.value),
//                                   autocomplete: 'email',
//                                 }),
//                                 /*#__PURE__*/ createElement(
//                                   'p',
//                                   {
//                                     class: 'input-note',
//                                   },
//                                   'Please enter your work email if you have. Example: you@company.com'
//                                 )
//                               )
//                             )
//                           ),
//                           /*#__PURE__*/ createElement(
//                             'div',
//                             {
//                               className: 'row',
//                             },
//                             /*#__PURE__*/ createElement(
//                               'div',
//                               {
//                                 className: 'col-md-12 col-xs-12',
//                               },
//                               /*#__PURE__*/ createElement(
//                                 'div',
//                                 {
//                                   className: 'group-input',
//                                 },
//                                 /*#__PURE__*/ createElement(
//                                   'label',
//                                   {
//                                     for: 'project_desc',
//                                   },
//                                   'Project Description'
//                                 ),
//                                 /*#__PURE__*/ createElement('textarea', {
//                                   type: 'text',
//                                   id: 'project_desc',
//                                   name: 'project_desc',
//                                   placeholder: 'Write your Project Description',
//                                   className: 'Wizad_last-input',
//                                   value: projectDescription,
//                                   onChange: (e) => setProjectDescription(e.target.value),
//                                   autocomplete: 'none',
//                                 })
//                               )
//                             )
//                           ),
//                           /*#__PURE__*/ createElement(
//                             'div',
//                             {
//                               className: 'DiscoverMore text-left',
//                             },
//                             /*#__PURE__*/ createElement(
//                               'div',
//                               {
//                                 class: 'form-check',
//                               },
//                               /*#__PURE__*/ createElement('input', {
//                                 class: 'form-check-input',
//                                 type: 'checkbox',
//                                 checked: freeBA,
//                                 onChange: (e) => setFreeBA(e.target.checked),
//                                 id: 'freeBA',
//                               }),
//                               /*#__PURE__*/ createElement(
//                                 'label',
//                                 {
//                                   class: 'form-check-label label-dark',
//                                   for: 'freeBA',
//                                 },
//                                 'Count me in for the free consultation call and BA session (worth $999)'
//                               )
//                             ),
//                             /*#__PURE__*/ createElement(
//                               'button',
//                               {
//                                 type: 'submit',
//                                 className: 'btn custom-btn common-btn blue wizadButton',
//                                 disabled: loader ? true : false,
//                                 onClick: sendAppEstimate,
//                               },
//                               loader ? 'Loading...' : 'get full estimate'
//                             )
//                           )
//                         ),
//                         /*#__PURE__*/ createElement(
//                           'div',
//                           {
//                             className: 'wizadDownClick',
//                           },
//                           /*#__PURE__*/ createElement(
//                             'div',
//                             {
//                               className: 'wizadDownText',
//                             },
//                             /*#__PURE__*/ createElement(
//                               'span',
//                               null,
//                               'Facing trouble in submitting the form? then simply mail us on',
//                               /*#__PURE__*/ createElement(
//                                 'a',
//                                 {
//                                   type: 'email',
//                                   href: 'mailto:hello@groovyweb.co',
//                                 },
//                                 ' ',
//                                 'hello@groovyweb.co'
//                               )
//                             )
//                           )
//                         )
//                       )
//                     )
//                   )
//                 )
//               )
//             )
//           )
//         )
//       : /*#__PURE__*/ createElement(
//           'div',
//           {
//             className: 'container-fluid-step',
//           },
//           /*#__PURE__*/ createElement(
//             'div',
//             {
//               className: 'row no-gutters',
//             },
//             /*#__PURE__*/ createElement(
//               'div',
//               {
//                 className: 'col-lg-12 col-md-12',
//               },
//               /*#__PURE__*/ createElement(
//                 'div',
//                 {
//                   className: 'form-wizard',
//                 },
//                 /*#__PURE__*/ createElement(
//                   'form',
//                   {
//                     action: '',
//                     method: 'post',
//                     role: 'form',
//                     style:
//                       activeStep !== loaderTurn
//                         ? {
//                             pointerEvents: 'none',
//                           }
//                         : null,
//                   },
//                   /*#__PURE__*/ createElement(
//                     'div',
//                     {
//                       className: 'form-wizard-header',
//                     },
//                     activeStep == 19
//                       ? /*#__PURE__*/ createElement(
//                           'div',
//                           null,
//                           /*#__PURE__*/ createElement('h1', null, 'Hey There! \uD83D\uDC4B'),
//                           /*#__PURE__*/ createElement(
//                             'p',
//                             {
//                               class: 'mt-14',
//                             },
//                             "We're thrilled to help you plan your app development journey. \uD83D\uDE80 Our easy-to-use cost calculator takes into account all the factors that can affect app development costs, so you can get a reliable estimate in minutes.",
//                             /*#__PURE__*/ createElement('br', null),
//                             /*#__PURE__*/ createElement('br', null),
//                             'To get started, please provide us with some details about your project.'
//                           )
//                         )
//                       : /*#__PURE__*/ createElement(
//                           'ul',
//                           {
//                             className: 'list-unstyled form-wizard-steps clearfix',
//                           },
//                           /*#__PURE__*/ createElement(
//                             'li',
//                             {
//                               className:
//                                 activeStep === 0 || activeStep === 1
//                                   ? 'active'
//                                   : activeStep > 1
//                                   ? 'activated'
//                                   : '',
//                             },
//                             /*#__PURE__*/ createElement(
//                               'p',
//                               null,
//                               activeStep === 0 ? 'Industry' : 'Platforms'
//                             ),
//                             /*#__PURE__*/ createElement('span', null, '1')
//                           ),
//                           /*#__PURE__*/ createElement(
//                             'li',
//                             {
//                               className:
//                                 activeStep === 2 ? 'active' : activeStep > 2 ? 'activated' : '',
//                             },
//                             /*#__PURE__*/ createElement('p', null, 'Size'),
//                             /*#__PURE__*/ createElement('span', null, '2')
//                           ),
//                           /*#__PURE__*/ createElement(
//                             'li',
//                             {
//                               className:
//                                 activeStep === 3 ? 'active' : activeStep > 3 ? 'activated' : '',
//                             },
//                             /*#__PURE__*/ createElement('p', null, 'Users'),
//                             /*#__PURE__*/ createElement('span', null, '3')
//                           ),
//                           /*#__PURE__*/ createElement(
//                             'li',
//                             {
//                               className:
//                                 activeStep === 4 ? 'active' : activeStep > 4 ? 'activated' : '',
//                             },
//                             /*#__PURE__*/ createElement('p', null, '3rd Party'),
//                             /*#__PURE__*/ createElement('span', null, '4')
//                           ),
//                           /*#__PURE__*/ createElement(
//                             'li',
//                             {
//                               className:
//                                 activeStep === 5 ? 'active' : activeStep > 5 ? 'activated' : '',
//                             },
//                             /*#__PURE__*/ createElement('p', null, 'UI Design'),
//                             /*#__PURE__*/ createElement('span', null, '5')
//                           ),
//                           /*#__PURE__*/ createElement(
//                             'li',
//                             {
//                               className:
//                                 activeStep === 6 ? 'active' : activeStep > 6 ? 'activated' : '',
//                             },
//                             /*#__PURE__*/ createElement('p', null, 'Database'),
//                             /*#__PURE__*/ createElement('span', null, '6')
//                           ),
//                           /*#__PURE__*/ createElement(
//                             'li',
//                             {
//                               className:
//                                 activeStep === 7 ? 'active' : activeStep > 7 ? 'activated' : '',
//                             },
//                             /*#__PURE__*/ createElement('p', null, 'Security'),
//                             /*#__PURE__*/ createElement('span', null, '7')
//                           ),
//                           /*#__PURE__*/ createElement(
//                             'li',
//                             {
//                               className:
//                                 activeStep === 8 ? 'active' : activeStep > 8 ? 'activated' : '',
//                             },
//                             /*#__PURE__*/ createElement('p', null, 'Features'),
//                             /*#__PURE__*/ createElement('span', null, '8')
//                           ),
//                           /*#__PURE__*/ createElement(
//                             'li',
//                             {
//                               className:
//                                 activeStep === 9 ? 'active' : activeStep > 9 ? 'activated' : '',
//                             },
//                             /*#__PURE__*/ createElement('p', null, "You're"),
//                             /*#__PURE__*/ createElement('span', null, '9')
//                           )
//                         )
//                   ),
//                   activeStep === 0 &&
//                     /*#__PURE__*/ createElement(
//                       'fieldset',
//                       {
//                         className: `wizard-fieldset show ${boxHovered ? 'box-hovered' : ''}`,
//                       },
//                       /*#__PURE__*/ createElement('h5', null, 'Select Your Industry'),
//                       /*#__PURE__*/ createElement(
//                         'div',
//                         {
//                           className: activeStep === 2 ? 'mainDivWizard' : 'mainDivWizard',
//                         },
//                         listData &&
//                           listData.length > 0 &&
//                           listData.map((item) => {
//                             const dData = stepsData[activeStep];
//                             let bool = false;
//                             bool = dData && dData.id === item.id && dData.isSelected;
//                             return /*#__PURE__*/ createElement(
//                               'div',
//                               {
//                                 className: 'control-group wizad-active',
//                                 onMouseEnter: () => setBoxHover(true),
//                                 onMouseLeave: () => setBoxHover(false),
//                                 // onClick={() => {
//                                 //   setSelectedData(item);
//                                 //   handleData(item);
//                                 // }}
//                                 // mainDivWizard length_Wizard
//                                 style: bool
//                                   ? {
//                                       borderWidth: 1,
//                                       borderColor: '#104cba',
//                                       borderStyle: 'solid',
//                                     }
//                                   : null,
//                                 'data-isSelected': item.isSelected,
//                               },
//                               /*#__PURE__*/ createElement(
//                                 'label',
//                                 {
//                                   className: 'control control--checkbox',
//                                 },
//                                 /*#__PURE__*/ createElement(
//                                   'div',
//                                   {
//                                     className: 'checkImg',
//                                   },
//                                   /*#__PURE__*/ createElement('img', {
//                                     className: 'solution-OfferedImg',
//                                     src: item.image,
//                                     alt: item.title,
//                                   })
//                                 ),
//                                 /*#__PURE__*/ createElement(
//                                   'span',
//                                   {
//                                     style: {
//                                       color: bool ? '#104cba' : null,
//                                     },
//                                   },
//                                   item.title
//                                 ),
//                                 /*#__PURE__*/ createElement('input', {
//                                   type: 'radio',
//                                   name: 'firstcheckbox',
//                                   onClick: () => {
//                                     setSelectedData(item);
//                                     handleData(item, 'radio');
//                                     callAnotherApi(item.question_id);
//                                   },
//                                 })
//                               ),
//                               item.tooltip
//                                 ? /*#__PURE__*/ createElement(
//                                     'div',
//                                     {
//                                       class: 'CustomToolTip',
//                                     },
//                                     /*#__PURE__*/ createElement(
//                                       'div',
//                                       {
//                                         class: 'toolbg',
//                                       },
//                                       /*#__PURE__*/ createElement('img', {
//                                         class: 'InfoTool',
//                                         src: baseUrl + '/uploads/app_estimate/info.svg',
//                                         alt: 'Info',
//                                       }),
//                                       /*#__PURE__*/ createElement('span', null, item.tooltip)
//                                     )
//                                   )
//                                 : null
//                             );
//                           })
//                       ),
//                       renderButton()
//                     ),
//                   activeStep === 9 &&
//                     /*#__PURE__*/ createElement(
//                       'div',
//                       {
//                         class: 'mainDivWizard',
//                       },
//                       /*#__PURE__*/ createElement(
//                         'fieldset',
//                         {
//                           className: `mt-50 wizard-fieldset show ${
//                             boxHovered ? 'box-hovered' : ''
//                           }`,
//                         },
//                         /*#__PURE__*/ createElement(
//                           'div',
//                           {
//                             className: `q-set prof-set ${
//                               isBusiness(profession) ? '' : 'hide-sub-q'
//                             }`,
//                           },
//                           /*#__PURE__*/ createElement(
//                             'h5',
//                             {
//                               class: 'question-box',
//                             },
//                             "1. You're a",
//                             /*#__PURE__*/ createElement(
//                               'div',
//                               {
//                                 className: 'i-head-input',
//                               },
//                               /*#__PURE__*/ createElement('input', {
//                                 type: 'text',
//                                 id: 'oProfession',
//                                 name: 'oProfession',
//                                 placeholder: 'Your Profession',
//                                 className: 'Wizad_last-input',
//                                 value: profession,
//                                 onChange: (e) => setProfession(e.target.value),
//                                 autocomplete: 'organization-title',
//                               })
//                             ),
//                             /*#__PURE__*/ createElement(
//                               'div',
//                               {
//                                 className: `i-head-input company-name`,
//                               },
//                               ' of ',
//                               /*#__PURE__*/ createElement('input', {
//                                 type: 'text',
//                                 id: 'companyName',
//                                 name: 'companyName',
//                                 placeholder: 'Your Company Name',
//                                 className: 'Wizad_last-input',
//                                 value: company,
//                                 onChange: (e) => setCompany(e.target.value),
//                                 autocomplete: 'organization',
//                               })
//                             )
//                           ),
//                           /*#__PURE__*/ createElement(
//                             'div',
//                             {
//                               class: 'answer-box',
//                             },
//                             professionArray &&
//                               professionArray.length > 0 &&
//                               professionArray.map((item) => {
//                                 const dData = stepsData[activeStep];
//                                 let bool = false;
//                                 bool = dData && dData.id === item.id && dData.isSelected;
//                                 return /*#__PURE__*/ createElement(
//                                   'div',
//                                   {
//                                     className: 'control-group size-xs wizad-active',
//                                     onMouseEnter: () => setBoxHover(true),
//                                     onMouseLeave: () => setBoxHover(false),
//                                     style: bool
//                                       ? {
//                                           borderWidth: 1,
//                                           borderColor: '#104cba',
//                                           borderStyle: 'solid',
//                                         }
//                                       : null,
//                                     'data-isSelected': item.isSelected,
//                                   },
//                                   /*#__PURE__*/ createElement(
//                                     'label',
//                                     {
//                                       className: 'control control--checkbox',
//                                     },
//                                     /*#__PURE__*/ createElement(
//                                       'div',
//                                       {
//                                         className: 'checkImg',
//                                       },
//                                       /*#__PURE__*/ createElement('img', {
//                                         className: 'solution-OfferedImg',
//                                         src: item.image,
//                                         alt: item.title,
//                                       })
//                                     ),
//                                     /*#__PURE__*/ createElement(
//                                       'span',
//                                       {
//                                         className: 'small-text',
//                                         style: {
//                                           color: bool ? '#104cba' : null,
//                                         },
//                                       },
//                                       item.title
//                                     ),
//                                     /*#__PURE__*/ createElement('input', {
//                                       type: 'radio',
//                                       name: 'firstcheckbox',
//                                       onClick: () => {
//                                         // setSelectedData(item);
//                                         // handleData(item, "radio");
//                                         let newTitle = item.title;
//                                         if (item.title === 'Other') {
//                                           newTitle = '';
//                                         }
//                                         setProfession(newTitle);
//                                       },
//                                     })
//                                   ),
//                                   item.tooltip
//                                     ? /*#__PURE__*/ createElement(
//                                         'div',
//                                         {
//                                           class: 'CustomToolTip',
//                                         },
//                                         /*#__PURE__*/ createElement(
//                                           'div',
//                                           {
//                                             class: 'toolbg',
//                                           },
//                                           /*#__PURE__*/ createElement('img', {
//                                             class: 'InfoTool',
//                                             src: baseUrl + '/uploads/app_estimate/info.svg',
//                                             alt: 'Info',
//                                           }),
//                                           /*#__PURE__*/ createElement('span', null, item.tooltip)
//                                         )
//                                       )
//                                     : null
//                                 );
//                               })
//                           )
//                         ),
//                         /*#__PURE__*/ createElement(
//                           'div',
//                           {
//                             class: 'q-set',
//                           },
//                           /*#__PURE__*/ createElement(
//                             'h5',
//                             {
//                               class: 'question-box ptop',
//                             },
//                             "2. You're at Stage of",
//                             /*#__PURE__*/ createElement(
//                               'div',
//                               {
//                                 className: 'i-head-input stage-name',
//                               },
//                               /*#__PURE__*/ createElement('input', {
//                                 type: 'text',
//                                 id: 'pStage',
//                                 name: 'pStage',
//                                 placeholder: 'Please Specify',
//                                 className: 'Wizad_last-input',
//                                 value: projectStage,
//                                 onChange: (e) => setProjectStage(e.target.value),
//                                 autocomplete: 'none',
//                               })
//                             )
//                           ),
//                           /*#__PURE__*/ createElement(
//                             'div',
//                             {
//                               class: 'answer-box',
//                             },
//                             projectStages &&
//                               projectStages.length > 0 &&
//                               projectStages.map((item) => {
//                                 const dData = stepsData[activeStep];
//                                 let bool = false;
//                                 bool = dData && dData.id === item.id && dData.isSelected;
//                                 return /*#__PURE__*/ createElement(
//                                   'div',
//                                   {
//                                     className: 'control-group size-xs only-title wizad-active',
//                                     onMouseEnter: () => setBoxHover(true),
//                                     onMouseLeave: () => setBoxHover(false),
//                                     style: bool
//                                       ? {
//                                           borderWidth: 1,
//                                           borderColor: '#104cba',
//                                           borderStyle: 'solid',
//                                         }
//                                       : null,
//                                     'data-isSelected': item.isSelected,
//                                   },
//                                   /*#__PURE__*/ createElement(
//                                     'label',
//                                     {
//                                       className: 'control control--checkbox',
//                                     },
//                                     /*#__PURE__*/ createElement(
//                                       'span',
//                                       {
//                                         className: 'small-text',
//                                         style: {
//                                           color: bool ? '#104cba' : null,
//                                         },
//                                       },
//                                       item.emoji &&
//                                         /*#__PURE__*/ createElement(
//                                           'span',
//                                           {
//                                             class: 'b-icon',
//                                           },
//                                           item.emoji
//                                         ),
//                                       item.title
//                                     ),
//                                     /*#__PURE__*/ createElement('input', {
//                                       type: 'radio',
//                                       name: 'firstcheckbox',
//                                       onClick: () => {
//                                         // handleData(item, "radio");
//                                         let newTitle = item.title;
//                                         if (item.title === 'Other') {
//                                           newTitle = '';
//                                         }
//                                         setProjectStage(newTitle);
//                                       },
//                                     })
//                                   ),
//                                   item.tooltip
//                                     ? /*#__PURE__*/ createElement(
//                                         'div',
//                                         {
//                                           class: 'CustomToolTip',
//                                         },
//                                         /*#__PURE__*/ createElement(
//                                           'div',
//                                           {
//                                             class: 'toolbg',
//                                           },
//                                           /*#__PURE__*/ createElement('img', {
//                                             class: 'InfoTool',
//                                             src: baseUrl + '/uploads/app_estimate/info.svg',
//                                             alt: 'Info',
//                                           }),
//                                           /*#__PURE__*/ createElement('span', null, item.tooltip)
//                                         )
//                                       )
//                                     : null
//                                 );
//                               })
//                           )
//                         ),
//                         /*#__PURE__*/ createElement(
//                           'div',
//                           {
//                             class: 'q-set',
//                           },
//                           /*#__PURE__*/ createElement(
//                             'h5',
//                             {
//                               class: 'question-box ptop',
//                             },
//                             '3. Your Budget is  '
//                           ),
//                           /*#__PURE__*/ createElement(
//                             'div',
//                             {
//                               className: 'budget-slider',
//                             },
//                             /*#__PURE__*/ createElement(
//                               'div',
//                               {
//                                 class: 'c-slider',
//                               },
//                               /*#__PURE__*/ createElement('input', {
//                                 type: 'range',
//                                 id: 'pBudget',
//                                 name: 'pBudget',
//                                 animate: 'true',
//                                 handle: '\uD83D\uDE80',
//                                 min: '1',
//                                 max: '6',
//                                 labels:
//                                   '< $5000, $5K - $10K, $10K - $25K, $25K - $50K, $50K - $100K, $100K+',
//                                 onChange: (e) => setBudget(e.target.value),
//                                 value: budget,
//                               })
//                             )
//                           )
//                         ),
//                         /*#__PURE__*/ createElement(
//                           'div',
//                           {
//                             class: 'q-set mb-50',
//                           },
//                           /*#__PURE__*/ createElement(
//                             'h5',
//                             {
//                               class: 'question-box ptop',
//                             },
//                             '4. Project Timeline '
//                           ),
//                           /*#__PURE__*/ createElement(
//                             'div',
//                             {
//                               className: 'timeline-slider',
//                             },
//                             /*#__PURE__*/ createElement(
//                               'div',
//                               {
//                                 class: 'c-slider',
//                               },
//                               /*#__PURE__*/ createElement('input', {
//                                 type: 'range',
//                                 id: 'pTimeline',
//                                 name: 'pTimeline',
//                                 animate: 'false',
//                                 handle: '\uD83D\uDD54',
//                                 min: '1',
//                                 max: '6',
//                                 labels:
//                                   '< 1 Month, 1 - 2 Months, 2 - 4 Months, 4 - 8 Months, 8 - 12 Months, 12 Months+',
//                                 onChange: (e) => setTimeline(e.target.value),
//                                 value: timeline,
//                               })
//                             )
//                           )
//                         ),
//                         renderButton()
//                       )
//                     ),
//                   activeStep >= 1 &&
//                     questionList &&
//                     questionList.length > 0 &&
//                     questionList.map((item, index) => {
//                       // console.log("item.answers", item);
//                       if (activeStep === index + 1) {
//                         return /*#__PURE__*/ createElement(
//                           'fieldset',
//                           {
//                             className: `wizard-fieldset show ${boxHovered ? 'box-hovered' : ''}`,
//                           },
//                           /*#__PURE__*/ createElement(
//                             'div',
//                             null,
//                             /*#__PURE__*/ createElement('h5', null, item.title || ''),
//                             /*#__PURE__*/ createElement(
//                               'div',
//                               {
//                                 // className={
//                                 //   activeStep === 2
//                                 //     ? "mainDivWizard"
//                                 //     : "mainDivWizard"
//                                 // }
//                                 className: 'mainDivWizard',
//                               },
//                               item.answers.map((val, index) => {
//                                 const dData = stepsData[activeStep];
//                                 let bool = false;
//                                 if (item.type === 'radio') {
//                                   bool =
//                                     item.type === 'radio' &&
//                                     dData &&
//                                     dData.id === val.id &&
//                                     dData.isSelected;
//                                 } else if (Array.isArray(dData)) {
//                                   const testData =
//                                     dData && dData.find((nData) => nData.id === val.id);
//                                   bool = (testData && testData.isSelected) || false;
//                                 }
//                                 return /*#__PURE__*/ createElement(
//                                   'div',
//                                   {
//                                     className: 'control-group',
//                                     onMouseEnter: () => setBoxHover(true),
//                                     onMouseLeave: () => setBoxHover(false),
//                                     style: bool
//                                       ? {
//                                           borderWidth: 1,
//                                           borderColor: '#104cba',
//                                           borderStyle: 'solid',
//                                         }
//                                       : null,
//                                   },
//                                   /*#__PURE__*/ createElement(
//                                     'label',
//                                     {
//                                       className: 'control control--checkbox',
//                                     },
//                                     /*#__PURE__*/ createElement(
//                                       'div',
//                                       {
//                                         className: 'checkImg',
//                                         style:
//                                           activeStep == 4
//                                             ? {
//                                                 alignItems: 'end',
//                                               }
//                                             : null,
//                                       },
//                                       /*#__PURE__*/ createElement('img', {
//                                         className: 'solution-OfferedImg',
//                                         src: val.image,
//                                         alt: val.title,
//                                         height: activeStep == 7 && index == 2 ? 130 : null,
//                                         width: activeStep == 7 && index == 2 ? 80 : null,
//                                       })
//                                     ),
//                                     /*#__PURE__*/ createElement(
//                                       'span',
//                                       {
//                                         style: {
//                                           color: bool ? '#104cba' : null,
//                                         },
//                                       },
//                                       val.title
//                                     ),
//                                     /*#__PURE__*/ createElement('input', {
//                                       type: item.type === 'radio' ? 'radio' : 'checkbox',
//                                       name: 'fira',
//                                       onClick: () => {
//                                         setSelectedData(val);
//                                         handleData(val, item.type);
//                                         setTotalPrice(totalPrice + Number(val.price));
//                                       },
//                                     })
//                                   ),
//                                   val.tooltip
//                                     ? /*#__PURE__*/ createElement(
//                                         'div',
//                                         {
//                                           class: 'CustomToolTip',
//                                         },
//                                         /*#__PURE__*/ createElement(
//                                           'div',
//                                           {
//                                             class: 'toolbg',
//                                           },
//                                           /*#__PURE__*/ createElement('img', {
//                                             class: 'InfoTool',
//                                             src: baseUrl + '/uploads/app_estimate/info.svg',
//                                             alt: 'Info',
//                                           }),
//                                           /*#__PURE__*/ createElement('span', null, val.tooltip)
//                                         )
//                                       )
//                                     : null
//                                 );
//                               })
//                             )
//                           ),
//                           renderButton()
//                         );
//                       }
//                       return null;
//                     })
//                 )
//               )
//             )
//           )
//         )
//   );
// }
// createRoot.render(
//   /*#__PURE__*/ createElement(AppEstimateStep, null),
//   document.getElementById('appEstimateStep2')
// );
