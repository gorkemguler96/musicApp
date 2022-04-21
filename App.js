import { StatusBar } from 'expo-status-bar';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import muscic_data from './music_data.json'
import SongCard from "./components/SongCard/";
import SearchBar from "./components/SearchBar";
import {useState} from "react";

export default function App() {

    const renderSong = ({item}) => <SongCard song={item}/>
    const renderSeperator = () => <View style={styles.seperator}/>
    const [data,setData] = useState(muscic_data)
    const handleSearch = (text) => {
        const filteredList = muscic_data.filter((song)=>{
            const searchedText = text.toLowerCase();
            const currentTitle = song.title.toLowerCase()

            return  currentTitle.indexOf(searchedText) > -1;
        })

        setData(filteredList)
    }


  return (
      <View style={styles.container}>
          <SearchBar onSearch={handleSearch}/>
        <FlatList
            data={data}
            renderItem={renderSong}
            ItemSeparatorComponent={renderSeperator}
        />
        {/*<StatusBar style="auto" />*/}
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
    seperator:{
        borderWidth:0.5,
        opacity:0.4
    }
});
