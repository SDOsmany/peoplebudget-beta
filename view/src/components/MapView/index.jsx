import React from 'react';
import Map from '../Map/index'
import Marker from '../Map/Marker/index';
import ProjectDrawer from '../MapView/ProjectDrawer/index';
const MapView = () => {
    return (
        <div className="row">
            <div className="col">
                <Map>
                    <Marker
                        lat={25.77}
                        lng={-80.22}
                        title="Fix roadsFix roadsFix roadsFix roadsFix roadsFix roads"
                    >
                        <div>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
                            nesciunt eum cum nemo repellendus, optio alias architecto voluptas
                            neque, officiis sequi. Explicabo odit, officia sit error assumenda
                            impedit? Necessitatibus, ducimus!
                        </div>
                    </Marker>
                </Map>
            </div>
            <div className="col">
                <ProjectDrawer/>
            </div>
        </div>
    );
};

export default MapView;
