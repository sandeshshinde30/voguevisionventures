import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en", // Set default fallback language to English
    lng: localStorage.getItem("i18nextLng") || "en", // Get the saved language from localStorage
    returnObjects: true,
    resources: {
      en: {
        translation: {
          header : {
            title : "VOGUE VISION VENTURES"
          },

          total : "Total",

          contactUs : "Contact us",

          mainPage : {
            title: "VOGUE VISION VENTURES FRANCHISE PLAN",
          },

          fixCost : {
            title : "FIXED COST",
            columnTitle : {
              one : "Details",
              two : "Actual Amount",
              three : "Company Offered Amount",
              four : "Total"
            },
            fixedCostData : [
              { details: "Software Licence & Franchise Fee", MRP: "2,49,999", offerPrice : "99,999" , limitedOffer : "(Limited time offer)" },
              { details: "Company profit commission security deposit", MRP: "3,96,000" , offerPrice : "1,99,998" , limitedOffer : ""},
            ]
          },

          capitalCost : {
            title : "CAPITAL COST",
            columnTitle : {
              one : "Details",
              two : "Actual Amount",
              three : "Company Offered Amount",
            },
            capitalCostData : [
                  {
                    "heading": "Interior",
                    "content": "(MS Rack & Furniture, Mat & Curtain, Storage, Paint, Glass Work etc.)",
                    "MRP": "6,00,000",
                    "offerPrice": "3,25,000"
                  },
                  {
                    "heading": "Branding",
                    "content": "(Signage, Fabric Board, Other Brandings, Displays etc.)",
                    "MRP": "2,75,000",
                    "offerPrice": "1,50,000"
                  },
                  {
                    "heading": "Electronic",
                    "content": "(Customized Light Structure, Fan, AC, Vacuum Cleaner, LED Screen, Tablet, Computer, Music System, Inverter etc.)",
                    "MRP": "2,50,000",
                    "offerPrice": "1,75,000"
                  },
                  {
                    "heading": "Customization Equipment",
                    "content": "(Heat Press Machine, Mannequins-4, Hangers-200 & Other Equipments etc.)",
                    "MRP": "75,000",
                    "offerPrice": "50,000"
                  },
                  {
                    "heading": "Security",
                    "content": "(CCTV, Anti-Theft Alarm & Other Tools etc.)",
                    "MRP": "75,000",
                    "offerPrice": "50,000"
                  },
                  {
                    "heading": "Software",
                    "content": "(Billing Software, Antivirus, Server etc.)",
                    "MRP": "1,25,000",
                    "offerPrice": "50,000"
                  }
            ]
          },

          operatingCost : {
            title : "OPERATING COST",
            columnTitle : {
              one : "Operating Expenses",
              two : "Amount",
            },
            opexData : [
              { operatingExpenses: "Rent", price: "15,000"},
              { operatingExpenses: "Electricity", price: "6,300"},
              { operatingExpenses: "Internet", price: "700"},
            ],
            opexOtherData : {
              title1 : "Operating cost (Active)",
              title2 : "Total Operating Expenses (Passive)"
            },
            salaries: {
              title : "* Sales Executive Salaries (PartTime & Fulltime)",
              salary : "12,000"
            }
          },

          sales : {
            title : "SALES",
            columnTitle : {
              one : "Details",
              two : "Avg Sales Qty",
              three : "ASP",
              four : "Retailer~Margin",
              five : "Commission on profit",
              six : "Sale value"
            },
            salesData : [
              { details: "Shirts", avgSalesQty: "3,999", ASP: "499", retailerMargin: "67%", commissionOnSale: "3,35,000", saleValue: "19,95,500" },
              { details: "T-Shirt", avgSalesQty: "3,000", ASP: "399", retailerMargin: "67%", commissionOnSale: "2,00,000", saleValue: "11,97,000" },
              { details: "Jeans", avgSalesQty: "1,000", ASP: "999", retailerMargin: "67%", commissionOnSale: "1,65,000", saleValue: "9,99,000" },
              { details: "Formal Pants", avgSalesQty: "1,150", ASP: "699", retailerMargin: "67%", commissionOnSale: "1,35,000", saleValue: "8,03,850" },
              { details: "Kurtis", avgSalesQty: "850", ASP: "599", retailerMargin: "67%", commissionOnSale: "85,000", saleValue: "5,09,150" },
              { details: "Sport Jackets", avgSalesQty: "500", ASP: "599", retailerMargin: "67%", commissionOnSale: "50,000", saleValue: "2,99,500" },
              { details: "Sportwear", avgSalesQty: "490", ASP: "399", retailerMargin: "67%", commissionOnSale: "30,000", saleValue: "1,96,000" }
            ],
            warning : "* All values here are representation of approximate values"
          },

          summary : {
            title : "SUMMARY",
            columnTitle : "Summary",
            summaryData : [
              { label: "Fix Cost", value: "2,99,997" },
              { label: "Capital Cost", value: "8,00,000" },
              { label: "Inventory", value: "13,00,000" },
              { label: "Profit Commission", value: "67%" },
              { label: "ROI on Investment", value: "33%" },
              { label: "Yearly Earning Potential", value: "5,40,000" },
            ]
          }
         
        },
      },







      mr: {
        translation: {
          header : {
            title : "व्होग व्हिजन व्हेंचर्स"
          },

          total : "टोटल",

          contactUs : "कॉण्टॅक्ट अस",


          
          mainPage : {
            title: "व्होग व्हिजन व्हेंचर्स फ्रँचायझ प्लॅन",
          },

          fixCost : {
            title : "फिक्स्ड कॉस्ट",
            columnTitle : {
              one : "डिटेल्स",
              two : "अ‍ॅक्ट्युअल अमाउंट",
              three : "कंपनी ऑफर्ड अमाउंट",
              four : "टोटल"
            },
            fixedCostData : [
              { details: "सॉफ़्टवेअर लायसन्स आणि फ्रँचायझ फी", MRP: "2,49,999", offerPrice : "99,999" , limitedOffer : "(लिमिटेड टाइम ऑफर)" },
              { details: "कंपनी प्रॉफिट कमिशन सिक्योरिटी डिपॉझिट", MRP: "3,96,000" , offerPrice : "1,99,998" , limitedOffer : ""},
            ]
          },

          capitalCost : {
            title : "कॅपिटल कॉस्ट",
            columnTitle : {
              one : "डिटेल्स",
              two : "अ‍ॅक्ट्युअल अमाउंट",
              three : "कंपनी ऑफर्ड अमाउंट",
            },
            capitalCostData : 
              [
                {
                  "heading": "इंटीरियर्स",
                  "content": "(एमएस रॅक आणि फर्निचर, मॅट आणि कार्टन, स्टोरेज, पेंट, ग्लास वर्क इत्यादी)",
                  "MRP": "6,00,000",
                  "offerPrice": "3,25,000"
                },
                {
                  "heading": "ब्रँडिंग",
                  "content": "(साइनज, फॅब्रिक बोर्ड, इतर ब्रँडिंग्ज, डिस्प्लेज इत्यादी)",
                  "MRP": "2,75,000",
                  "offerPrice": "1,50,000"
                },
                {
                  "heading": "इलेक्ट्रॉनिक",
                  "content": "(कस्टमाइज्ड लाईट स्ट्रक्चर, फॅन, एसी, व्हॅक्यूम क्लिनर, एलईडी स्क्रीन, टॅबलेट, संगणक, म्युझिक सिस्टम, इन्व्हर्टर इत्यादी)",
                  "MRP": "2,50,000",
                  "offerPrice": "1,75,000"
                },
                {
                  "heading": "कस्टमायझेशन उपकरण",
                  "content": "(हीट प्रेस मशीन, मॅनक्विन्स-4, हॅंगर्स-200 आणि इतर उपकरणे इत्यादी)",
                  "MRP": "75,000",
                  "offerPrice": "50,000"
                },
                {
                  "heading": "सुरक्षा",
                  "content": "(सीसीटीव्ही, अँटी-थेफ्ट अलार्म आणि इतर साधनं इत्यादी)",
                  "MRP": "75,000",
                  "offerPrice": "50,000"
                },
                {
                  "heading": "सॉफ्टवेअर",
                  "content": "(बिलिंग सॉफ्टवेअर, अँटीवायरस, सर्व्हर इत्यादी)",
                  "MRP": "1,25,000",
                  "offerPrice": "50,000"
                }                
            ]
          },

          operatingCost : {
            title : "ऑपरेटिंग कॉस्ट",
            columnTitle : {
              one : "ऑपरेटिंग एक्सपेंस",
              two : "अमाउंट",
            },
            opexData : [
              { operatingExpenses: "रेण्ट", price: "15,000"},
              { operatingExpenses: "इलेक्ट्रिसिटी", price: "6,300"},
              { operatingExpenses: "इंटरनेट", price: "700"},
            ],
            opexOtherData : {
              title1 : "ऑपरेटिंग कॉस्ट (ऍक्टिव)",
              title2 : "टोटल ऑपरेटिंग एक्सपेंस (पॅसिव)"
            },
            salaries: {
              title : "* सेल्स एक्सिक्युटिव सॅलरी (पार्टटाईम आणि फुलटाईम)",
              salary : "12,000"
            }
          },

          sales : {
            title : "सेल्स",
            columnTitle : {
              one : "डिटेल्स",
              two : "एव्हरेज सेल्स क्यूटी",
              three : "एएसपी",
              four : "रिटेलर~मार्जिन",
              five : "कमीशन ऑन प्रोफिट",
              six : "सेल व्हॅल्यू"
            },
            salesData : [
              { details: "शर्ट्स", avgSalesQty: "3,999", ASP: "499", retailerMargin: "67%", commissionOnSale: "3,35,000", saleValue: "19,95,500" },
              { details: "टी-शर्ट", avgSalesQty: "3,000", ASP: "399", retailerMargin: "67%", commissionOnSale: "2,00,000", saleValue: "11,97,000" },
              { details: "जीन्स", avgSalesQty: "1,000", ASP: "999", retailerMargin: "67%", commissionOnSale: "1,65,000", saleValue: "9,99,000" },
              { details: "फॉर्मल पॅंट्स", avgSalesQty: "1,150", ASP: "699", retailerMargin: "67%", commissionOnSale: "1,35,000", saleValue: "8,03,850" },
              { details: "कुर्ती", avgSalesQty: "850", ASP: "599", retailerMargin: "67%", commissionOnSale: "85,000", saleValue: "5,09,150" },
              { details: "स्पोर्ट जॅकेट्स", avgSalesQty: "500", ASP: "599", retailerMargin: "67%", commissionOnSale: "50,000", saleValue: "2,99,500" },
              { details: "स्पोर्टविअर", avgSalesQty: "490", ASP: "399", retailerMargin: "67%", commissionOnSale: "30,000", saleValue: "1,96,000" }
            ],
            warning : "* आल व्हॅल्यूज हिअर आर रेप्रेझेंटेशन ऑफ अ‍ॅप्रॉक्सिमेट व्हॅल्यूज"
          },

          summary : {
            title : "समरी",
            columnTitle : "समरी",
            summaryData : [
              { label: "फिक्स्ट कॉस्ट", value: "2,99,997" },
              { label: "कॅपिटल कॉस्ट", value: "8,00,000" },
              { label: "इंव्हेंटरी", value: "13,00,000" },
              { label: "प्रॉफिट कमीशन", value: "67%" },
              { label: "रॉय ऑन इन्व्हेस्टमेंट", value: "33%" },
              { label: "वार्षिक कमाई क्षमता", value: "5,40,000" },
            ]
          }


        },
      },
    },
    detection: {
      order: ["localStorage", "navigator"], // Check localStorage first, then browser language
      caches: ["localStorage"], // Cache the selected language in localStorage
    },
  });

export default i18n;
