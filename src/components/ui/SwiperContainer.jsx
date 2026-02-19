import { Navigation, Pagination } from 'swiper/modules';
import { Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function SwiperContainer({ slidesPerView, spaceBetween, direction, breakpoints, className = "", navigationRefs, onSlideChange, children, navigation = false, pagination = false, centered = false, initialSlide = 0, }) {

    return (
        <Swiper
            className={className}
            modules={[Pagination, Navigation]}
            slidesPerView={slidesPerView}
            spaceBetween={spaceBetween}
            breakpoints={breakpoints}
            navigation={navigation}
            pagination={pagination}
            centeredSlides={centered}
            initialSlide={initialSlide}
            onSlideChange={onSlideChange}
            direction={direction}
            onBeforeInit={(swiper) => {
                if (navigationRefs) {
                    swiper.params.navigation.prevEl =
                        navigationRefs.prevRef?.current
                    swiper.params.navigation.nextEl =
                        navigationRefs.nextRef?.current
                }
            }}
        >
            {children}
        </Swiper>
    )
}
export default SwiperContainer;