
import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import BottomNavigation, { FullTab } from 'react-native-material-bottom-navigation';
import styles from './styles';
import tabs from './tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

const sizeIcon= 25;

const Identity = ({ navigation }) => {
    const [activeTab, setActiveTab] = useState(tabs[0]);

    const selectedTab = navigation.state.params.selectedScreen;
    const tabIndex = Object.keys(tabs).findIndex((tabKey) => tabs[tabKey].label.toLowerCase() === selectedTab.toLowerCase());

    const renderIcon = icon => () => (
     <Icon size={sizeIcon}  name={icon} style={styles.iconStyle} />
    );

    useEffect(() => {
        setActiveTab(tabs[tabIndex])
    }, [selectedTab, tabIndex, tabs])

    const renderTabItem = ({ tab, isActive }) => (
        <FullTab
            isActive={isActive}
            key={tab.key}
            label={tab.label}
            style={styles.bottomMenuStyle}
            renderIcon={renderIcon(tab.icon)}
            labelStyle={styles.bottomMenuLabelStyle}
        />
    );
    return (
        <View style={styles.root}>
            <activeTab.screen navigation={navigation} setActiveTab={setActiveTab} />
            <BottomNavigation
                useLayoutAnimation={false}
                onTabPress={newTab => setActiveTab(newTab)}
                renderTab={renderTabItem}
                tabs={tabs}
                activeTab={activeTab.key}
                style={styles.bottomNavigation}
            />
        </View>
    );
};

export default Identity;
