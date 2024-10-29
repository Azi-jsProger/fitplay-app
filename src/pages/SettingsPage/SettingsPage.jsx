import React from 'react';
import TopNav from "../../components/navigation/TopNav";
import BottomNav from "../../components/navigation/BottomNav";
import cls from './settings.module.css';
import SelectVariants from "../../components/MaterialSelect/select";
import { useLocation } from 'react-router-dom';

const SettingsPage = () => {
    const location = useLocation();

    // Определяем, находимся ли мы на странице настроек
    const isSettingsPage = location.pathname === '/settings';

    return (
        <div className={cls.settings}>
            {/* Всегда показываем TopNav */}
            <TopNav />

            <div className={cls.flex_setting}>
                <div><SelectVariants /></div>
                <div></div>
                <div></div>
            </div>

            {/* Показываем BottomNav с меньшей прозрачностью на странице настроек */}
            <BottomNav />
        </div>
    );
};

export default SettingsPage;


// import React from 'react';
// import TopNav from "../../components/navigation/TopNav";
// import BottomNav from "../../components/navigation/BottomNav";
// import cls from './settings.module.css';
// import SelectVariants from "../../components/MaterialSelect/select";
// import { useLocation } from 'react-router-dom';
//
// const SettingsPage = () => {
//     const location = useLocation();
//
//     // Определяем, нужно ли показывать верхнюю или нижнюю навигацию
//     const isSettingsPage = location.pathname === '/settings';
//
//     return (
//         <div className={cls.settings}>
//             {/* Показываем TopNav всегда */}
//             <TopNav />
//
//             <div className={cls.flex_setting}>
//                 <div><SelectVariants /></div>
//                 <div></div>
//                 <div></div>
//             </div>
//
//             {/* Показываем BottomNav всегда, но с логикой отключения на странице настроек */}
//             <BottomNav />
//         </div>
//     );
// };
//
// export default SettingsPage;
//
//
// // import React from 'react';
// // import TopNav from "../../components/navigation/TopNav";
// // import BottomNav from "../../components/navigation/BottomNav";
// // import cls from './settings.module.css';
// // import SelectVariants from "../../components/MaterialSelect/select";
// //
// // const SettingsPage = () => {
// //     return (
// //         <div className={cls.settings}>
// //             <TopNav />
// //             <div className={cls.flex_setting}>
// //                 <div><SelectVariants /></div>
// //                 <div></div>
// //                 <div></div>
// //             </div>
// //             <BottomNav />
// //         </div>
// //     );
// // };
// //
// // export default SettingsPage;
