import React, { useState } from 'react';
import { Dimensions,TouchableOpacity,ScrollView, Text, View,Button,StyleSheet,Image, ImageBackground,TextInput,Alert,Switch} from 'react-native';
import { Icon, Input } from 'react-native-elements';
import data from '../../data.json';

import userinfo from '../../userInfo.json';

const {width:WIDTH} =Dimensions.get('window');

export default class Enterprise extends React.Component{
    constructor(props) {
        super(props);
        
        this.state = {
            //menu:'none',
            hmenu:false,
            nameIconmenu:'dehaze',
            //
            items:['none','none','none','none','none','none','none','none'],
            //
            miniItems:['none','none','none','none','none','none','none','none'],
            //
            nameIconitems:['chevron-right','chevron-right','chevron-right','chevron-right','chevron-right','chevron-right','chevron-right','chevron-right'],
            //
            nameIconMiniItems:['chevron-right','chevron-right','chevron-right','chevron-right','chevron-right','chevron-right','chevron-right','chevron-right'],
            //img:['https://cc-prod.scene7.com/is/image/CCProdAuthor/Feature%20carousel%201?$png$&jpegSize=200&wid=800','https://cc-prod.scene7.com/is/image/CCProdAuthor/Feature%20carousel%204?$png$&jpegSize=100&wid=599','https://cc-prod.scene7.com/is/image/CCProdAuthor/Feature%20carousel%205?$png$&jpegSize=200&wid=800'],
            n:0,

            //set sun/moon background
            bgColor:'#fff',
            bgIcon:'https://cdn-icons-png.flaticon.com/512/169/169367.png',
            textColor:'black',
            iconColor:'#323434',
            borderBColor:'#f3f3f3',
            bgColorB:'#f8f8f8',
            //hien thi list tu m den n
            m:0,
            n:9,
            //du lieu khi an vao dau ... canh nguoi dung
            checklist:['none','none','none','none','none','none','none','none','none','none'],
            checkUserColor:['#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff'],
            checkIconColor:['#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080',],
            customer:false,
            active:false,
            supplier:false,
            lockAccount:false,
            colorSwitchText:['#c1c4ba','#c1c4ba','#c1c4ba','#c1c4ba'],
            //check validate
            email:'',
            AlternativeEmail:'',
            phoneNumber:'',
            checkValidateEmail:'',
            checkValidateAEmail:'',

        }
    }
    //an/hien menu
    hideMenu(){
        console.log('menu clicked!')    
        this.setState({ 
            hmenu:!this.state.hmenu
        })
        if(this.state.hmenu == false){
            this.setState({
                nameIconmenu:'close',
                
            })
            this.resetHienItem()
        }else{
            this.setState({
                nameIconmenu:'dehaze',
            })
        }
    }

    resetHienItem(){
        this.setState({
             items:['none','none','none','none','none','none','none','none'],
        })
    }
    // an - hien item trong menu

    hideItems(n){
        console.log('items clicked!',n)
        if(this.state.items[n] == 'none'){

            let arr = this.state.items; 
            arr[n] = 'flex';
            let arricon = this.state.nameIconitems;
            arricon[n] = 'keyboard-arrow-down';
            this.setState({
                items:arr,  
                nameIconitems:arricon,
            })
        }else{
            let arr = this.state.items;
            arr[n] = 'none';
            let arricon = this.state.nameIconitems;
            arricon[n] = 'chevron-right';
            this.setState({
                items:arr,
                nameIconitems:arricon,
            })
        }
    }
    //giao dien sang toi
    changeBG(){
        console.log('change background clicked!')
        if(this.state.bgColor == '#0e0f0f'){
            this.setState({
                bgColor:'#fff',
                bgIcon:'https://cdn-icons-png.flaticon.com/512/169/169367.png',
                textColor:'black',
                iconColor:'#323434',
                borderBColor:'#f3f3f3',
                bgColorB:'#f8f8f8'
            })
        }else{
            this.setState({
                bgColor:'#0e0f0f',
                bgIcon:'https://cdn-icons-png.flaticon.com/512/180/180700.png',
                textColor:'#fff',
                iconColor:'#fff',
                borderBColor:'#727272',
                bgColorB:'#4a4a4a'
            })
        }
    }
    //huong dan khi an vao cho nao khac
    huongdan(){
        Alert.alert(
                "Hướng dẫn:",
                "Chạm vào người dùng để xem trang thông tin cá nhân",
            [
                {
                    text: "Tiếp",
                    onPress: () => {Alert.alert(
                        "Các chức năng bổ sung:",
                        "Giao diện sáng/tối, phân trang, menu Tab, định dạng Email...",
                        [
                            {
                                text: "Ok",
                                onPress: () => null,
                                style: "cancel",
                            }
                        ]
                    );},
                    style: "cancel",
                }
            ]
        );
    }

    //swicth
    switchC(){
        let arr=this.state.colorSwitchText;
        if(this.state.colorSwitchText[0]=='#c1c4ba'){
            arr[0]='#5a5b5b'
        }else{
            arr[0]='#c1c4ba'
        }
        this.setState({
            customer:!this.state.customer,
            colorSwitchText:arr
        })
    }
    switchA(){
        let arr=this.state.colorSwitchText;
        if(this.state.colorSwitchText[1]=='#c1c4ba'){
            arr[1]='#5a5b5b'
        }else{
            arr[1]='#c1c4ba'
        }
        this.setState({
            active:!this.state.active,
            colorSwitchText:arr
        })
    }
    switchS(){
        let arr=this.state.colorSwitchText;
        if(this.state.colorSwitchText[2]=='#c1c4ba'){
            arr[2]='#5a5b5b'
        }else{
            arr[2]='#c1c4ba'
        }
        this.setState({
            supplier:!this.state.supplier,
            colorSwitchText:arr
        })
    }
    switchL(){
        let arr=this.state.colorSwitchText;
        if(this.state.colorSwitchText[3]=='#c1c4ba'){
            arr[3]='#5a5b5b'
        }else{
            arr[3]='#c1c4ba'
        }
        this.setState({
            lockAccount:!this.state.lockAccount,
            colorSwitchText:arr
        })
    }

    //check validate

    checkEmail(n){
        let regExp = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

        //let arr = this.state.checkValidate;
        
        if(this.state.email==''){
        
        }else if(this.state.email.match(regExp)){
            console.log('email hop le!')
            //arr[n]='flex'
            this.setState({
                checkValidateEmail:'flex'
            })
            
        }else{
            console.log('email k hop le!')
            //arr[n]='none'
            this.setState({
                checkValidateEmail:'none'
            })
            
        }
    }
    checkAEmail(){
        let regExp = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

        //let arr = this.state.checkValidate;
        
        if(this.state.AlternativeEmail==''){
        
        }else if(this.state.AlternativeEmail.match(regExp)){
            console.log('email hop le!')
            //arr[n]='flex'
            this.setState({
                checkValidateAEmail:'flex'
            })
            
        }else{
            console.log('email k hop le!')
            //arr[n]='none'
            this.setState({
                checkValidateAEmail:'none'
            })
            
        }
    }
    render(){
        const windowWidth = Dimensions.get('window').width;
        const windowHeight = Dimensions.get('window').height;
        const { route,navigation } = this.props;
        const { i} = route.params;
        //console.log(this.state.email)
        return(
        <View style={{flex:1,backgroundColor:this.state.bgColor}}>
            {
                //Header
            }
             <View  style={styles.topBar}>
                <View style={{borderWidth:0,flex:3,flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:50,marginBottom:10,}}>
                    <TouchableOpacity  style={styles.menuIcon} onPress={()=>this.hideMenu()}>
                        <Icon color={this.state.iconColor} size={45} name={this.state.nameIconmenu}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.logoDino} onPress={()=>navigation.navigate('front')}>
                        <Image style={{width:'100%',height:'90%',margin:4}} source={{uri:'https://scontent.fhan5-6.fna.fbcdn.net/v/t39.30808-6/281180635_152611243974169_3924143279976580711_n.png?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=GAYA71kYC58AX-TOxt-&_nc_ht=scontent.fhan5-6.fna&oh=00_AT9AWjEh7vrNcaGvr4ZOZnyErmUE9jc8Z_X-Q9fhlFKbGw&oe=628C1144'}}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.sunMoon} onPress={()=>this.changeBG()}>
                        <Image style={{width:30,height:30,margin:4}} source={{uri:this.state.bgIcon}}/>
                    </TouchableOpacity>
                    <TouchableOpacity  style={styles.normalIcon} onPress={()=>this.huongdan()}>
                        <View style={{borderRadius:20,width:20,height:20,position:'absolute',zIndex: 200,backgroundColor:'#941a21',alignItems:'center',justifyContent:'center',top:'2%',left:'60%'}}>
                            <Text style={{color:'#fff',fontSize:11}}>15</Text>
                        </View>
                        <Icon color={this.state.iconColor} size={35} name='notifications-none'/>
                    </TouchableOpacity>
                    <TouchableOpacity  style={styles.normalIcon} onPress={()=>this.huongdan()}>
                        <Icon color={this.state.iconColor} size={35} name='layers'/>
                    </TouchableOpacity>
                    <TouchableOpacity  style={styles.normalIcon} onPress={()=>this.huongdan()}>
                        <Icon color={this.state.iconColor} size={35} name='construction'/>
                    </TouchableOpacity>
                    
                </View>
            </View>
            {
                //an/hien menu

                this.state.hmenu ? <View style={{flex:11,position:'absolute',top:windowHeight/6,zIndex:2000,width:windowWidth,backgroundColor:'#484848a6',}}>
                <ScrollView  >

                    <View style={{
                        flex:1,
                        backgroundColor:this.state.bgColor,
                        padding:0,
                        marginTop:0,
                        elevation:2,
                        width:windowWidth-20,
                        height:windowHeight,
                    }}> 
                        <View style={styles.input}>
                            <TextInput 
                            style={{flex:9,}}
                            placeholder={'Search'}
                            placeholderTextColor={'#7a7a7a'}
                            underlineColorAndroid='transparent'
                            />
                            <TouchableOpacity style={styles.inputIcon}>
                                <Icon name={'search'} size={25} color={'#2d2d2d'} />
                            </TouchableOpacity>
                        </View>
                        {
                            [...Array(data.menu.length)].map((o,n) => {
                                    return(
                                        <View key={n} style={{}}>
                                            <TouchableOpacity style={{padding:10,borderBottomWidth:1,borderColor:this.state.borderBColor,height:60,}}
                                                onPress={()=>this.hideItems(n)}>
                                                <View style={{flex: 5,
                                                        backgroundColor: this.state.bgColor,
                                                        alignItems: 'center',
                                                        width:'100%',
                                                        flexDirection:'row',
                                                        justifyContent:'center'}}>
                                                        <Text style={{
                                                            fontSize:16,
                                                            marginLeft:12,
                                                            color:this.state.textColor,
                                                            flex:1}} >{data.menu[n].name}
                                                        </Text>
                                                        <View style={{flex:1,alignItems:'flex-end'}}>
                                                            <Icon color={'#808080'} style={{}} size={30} name={this.state.nameIconitems[n]}/>
                                                        </View>
                                                </View>
                                            </TouchableOpacity>
                                            {
                                            [...Array(data.menu[n].items.length)].map((o,m) => {
                                                return(
                                                    <View key={m} style={{display:this.state.items[n],}}>
                                                       <View>
                                                            <TouchableOpacity style={{padding:10,height:50,borderColor:this.state.borderBColor,borderBottomWidth:1}}
                                                            onPress={()=>this.huongdan()}>
                                                                <View style={{flex: 5,
                                                                        backgroundColor: this.state.bgColor,     
                                                                        marginLeft:25,
                                                                        width:windowWidth-55,
                                                                        }}>
                                                                    <Text style={{
                                                                            fontSize:15,
                                                                            color:this.state.textColor,
                                                                            fontStyle:'italic'}} >{data.menu[n].items[m].name}</Text>
                                                                </View>
                                                            </TouchableOpacity>
                                                        </View>
                                                    </View>
                                                )}
                                                )}  

                                        </View>
                                    )
                                })
                        }
                    </View>
                    
                </ScrollView>
            </View> : null
            }
            {
                //End Header
            }
                {
                    //Khoang trang
                }
                <View style={{flex:2}}></View>
                {
                    //ket thuc khoang trang
                }
            {
                //Noi dung
            }
            <View style={{flex:18,backgroundColor:this.state.bgColor,borderWidth:0}}>
                <ScrollView style={{flex:1,backgroundColor:'#fff',backgroundColor:this.state.bgColor,borderWidth:0}}>
                        {
                            // Content
                        }
                        <View style={{height:'0%',borderWidth:0}}></View>
                        <View style={{borderWidth:0,width:'100%',marginTop:windowHeight/18,borderWidth:0,flexDirection:'row'}}>
                            <TouchableOpacity onPress={()=>this.huongdan()} style={{borderWidth:0,flex:2,height:windowHeight/11,borderWidth:0}}>
                                <View style={styles.viewContact}>
                                    <Text style={styles.textContact}>
                                        Contacts Infomation
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity  onPress={()=>navigation.navigate('front')} style={{borderWidth:0,flex:1,height:windowHeight/11,borderWidth:0}}>
                                <View style={styles.viewContact}>
                                    <Icon style = {{}} name="chevron-left" size={30} color="#565658"/>
                                    <Text style={styles.textCancel}>
                                        cancel
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View> 
                        <View  style={styles.userInfoListView}>
                            {
                                //cho vao styles
                            }




















                            <View style={{width:'100%',alignItems:'center',marginTop:windowHeight/15,borderWidth:0,marginBottom:'5%'}}>
                                <View style={{width:'96%',height:windowHeight/5,borderWidth:0,borderRadius:10,backgroundColor:'#f1f5e6',alignItems:'center'}}>
                                    <View  style={{borderWidth:0,top:'-37%',borderWidth:0,alignItems:'center',width:'90%',}}>
                                        <View style={{borderWidth:0,top:'0%',}}>
                                            <Image
                                                style={{
                                                    width:windowHeight/7,
                                                    height:windowHeight/7,
                                                    borderRadius:1000,
                                                    borderWidth:3,
                                                    borderColor:'#fff',
                                                    zIndex:1990

                                                }}
                                                source={{uri:userinfo.user[i].img}}
                                            />
                                            <View style={{width: 20,height:20,borderWidth:0,borderRadius:4,position:'absolute',zIndex: 2000,top:'80%',backgroundColor:'#fff',borderWidth:0.5,left:'20%',alignItems:'center',justifyContent:'center',borderColor:'#68686a'}}>
                                                <Icon color='#a0a59c' style={{}} size={15} name='create'/>
                                            </View>
                                        </View>
                                        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',borderWidth:0,marginLeft:'4%'}}>
                                            <Text style={{marginRight: '4%',color:'#504f54',fontSize:20,fontWeight:'bold'}}>
                                                {userinfo.user[i].name}
                                            </Text>
                                            <Icon color='#a0a59c' style={{}} size={15} name='create'/>
                                        </View>
                                        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginLeft:'4%'}}>
                                            <Text style={{marginRight: '4%',color:'#504f54',fontSize:20,fontFamily:'sans-serif-light'}}>
                                                {userinfo.user[i].info}
                                            </Text>
                                            <Icon color='#a0a59c' style={{}} size={15} name='create'/>
                                        </View>
                                    </View>
                                </View>
                            </View>


                            <View  style={{width:'100%',alignItems:'center',borderWidth:0}}>
                                <View style={{width:'96%',borderWidth:0,borderRadius:10,backgroundColor:'#f1f5e6',alignItems:'center',padding:10}}>
                                    <View style={{width:'100%',borderWidth:0}}>
                                        <Text style={{marginRight: '4%',color:'#504f54',fontSize:20,fontWeight:'bold'}}>
                                                Phone Number:
                                        </Text>
                                    </View>
                                    <View style={styles.input}>
                                        <TextInput 
                                        style={{flex:9,}}
                                        placeholder='Home Phone'
                                        placeholderTextColor={'#7a7a7a'}
                                        underlineColorAndroid='transparent'     
                                        keyboardType='phone-pad'
                                        />
                                    </View>
                                    <View style={styles.input}>
                                        <TextInput 
                                        style={{flex:9,}}
                                        placeholder='Mobile Phone'
                                        placeholderTextColor={'#7a7a7a'}
                                        underlineColorAndroid='transparent'     
                                        keyboardType='phone-pad'
                                        />
                                    </View>
                                    <View style={styles.input}>
                                        <TextInput 
                                        style={{flex:9,}}
                                        placeholder='Work Phone'
                                        placeholderTextColor={'#7a7a7a'}
                                        underlineColorAndroid='transparent'     
                                        keyboardType='phone-pad'
                                        />
                                    </View>
                                    <View style={{width:'100%',borderWidth:0,marginTop:'5%'}}>
                                        <Text style={{marginRight: '4%',color:'#504f54',fontSize:20,fontWeight:'bold'}}>
                                                Email Address:
                                        </Text>
                                    </View>
                                    <View style={styles.input}>
                                        <TextInput 
                                        style={{flex:9,}}
                                        placeholder='Primary Email'
                                        placeholderTextColor={'#7a7a7a'}
                                        underlineColorAndroid='transparent'     
                                        keyboardType='email-address'
                                        value={this.state.email}
                                        onChangeText={(text) => { this.setState({ email: text});this.checkEmail()}}
                                        />
                                    </View>
                                    {
                                        this.state.checkValidateEmail=='none'?
                                            <View style={{borderWidth:3,borderColor:'#bf1f1f',padding:5,borderRadius:5,marginTop:'2%'}}>
                                                <Text style={{color:'#bf1f1f'}}>Định dạng Email không hợp lệ!</Text>
                                            </View>
                                            :null
                                        
                                    }
                                    <View style={styles.input}>
                                        <TextInput 
                                        style={{flex:9,}}
                                        placeholder='Alternative Email'
                                        placeholderTextColor={'#7a7a7a'}
                                        underlineColorAndroid='transparent'     
                                        keyboardType='email-address'
                                        value={this.state.AlternativeEmail}
                                        onChangeText={(text) => { this.setState({ AlternativeEmail: text});this.checkAEmail()}}
                                        />
                                        
                                    </View>
                                        {
                                            this.state.checkValidateAEmail=='none'?
                                                <View style={{borderWidth:3,borderColor:'#bf1f1f',padding:5,borderRadius:5,marginTop:'2%'}}>
                                                    <Text style={{color:'#bf1f1f'}}>Định dạng Email không hợp lệ!</Text>
                                                </View>
                                                :null
                                            
                                        }
                                </View>
                            </View>
                            <View  style={{width:'100%',alignItems:'center',borderWidth:0,marginTop:'5%'}}>
                                <View style={{width:'96%',borderWidth:0,borderRadius:10,backgroundColor:'#f1f5e6',alignItems:'center',padding:10}}>
                                    <View style={{width:'100%',borderWidth:0}}>
                                        <Text style={{marginRight: '4%',color:'#504f54',fontSize:25,fontWeight:'bold'}}>
                                                Address:
                                        </Text>
                                    </View>
                                    <View style={styles.input}>
                                        <TextInput 
                                        style={{flex:9,}}
                                        placeholder='Address Line 1'
                                        placeholderTextColor={'#7a7a7a'}
                                        underlineColorAndroid='transparent'     
                                        />
                                    </View>
                                    <View style={styles.input}>
                                        <TextInput 
                                        style={{flex:9,}}
                                        placeholder='Address Line 2'
                                        placeholderTextColor={'#7a7a7a'}
                                        underlineColorAndroid='transparent'     
                                        />
                                    </View>
                                    <View style={styles.input}>
                                        <TextInput 
                                        style={{flex:9,}}
                                        placeholder='Street'
                                        placeholderTextColor={'#7a7a7a'}
                                        underlineColorAndroid='transparent'     
                                        />
                                    </View>
                                    <View style={styles.input}>
                                        <TextInput 
                                        style={{flex:9,}}
                                        placeholder='Ward'
                                        placeholderTextColor={'#7a7a7a'}
                                        underlineColorAndroid='transparent'     
                                        />
                                    </View>
                                    <View style={styles.input}>
                                        <TextInput 
                                        style={{flex:9,}}
                                        placeholder='City/ Region'
                                        placeholderTextColor={'#7a7a7a'}
                                        underlineColorAndroid='transparent'     
                                        />
                                    </View>
                                    <View style={styles.input}>
                                        <TextInput 
                                        style={{flex:9,}}
                                        placeholder='Country'
                                        placeholderTextColor={'#7a7a7a'}
                                        underlineColorAndroid='transparent'     
                                        />
                                    </View>
                                    <View style={styles.input}>
                                        <TextInput 
                                        style={{flex:9,}}
                                        placeholder='Postal Code'
                                        placeholderTextColor={'#7a7a7a'}
                                        underlineColorAndroid='transparent'     
                                        keyboardType='number-pad'
                                        />
                                    </View>
                                </View>
                                <View  style={{width:'100%',alignItems:'center',borderWidth:0}}>
                                    <View style={{width:'96%',borderWidth:0,borderRadius:10,backgroundColor:'#f1f5e6',alignItems:'center',padding:10}}>
                                        <View style={{width:'100%',borderWidth:0}}>
                                            <Text style={{marginRight: '4%',color:'#504f54',fontSize:20,fontWeight:'bold'}}>
                                                Tax Region:
                                            </Text>
                                        </View>
                                        <View style={styles.input}>
                                            <TextInput 
                                            style={{flex:9,}}
                                            placeholder='Tax Region'
                                            placeholderTextColor={'#7a7a7a'}
                                            underlineColorAndroid='transparent'     
                                            keyboardType='number-pad'
                                            />
                                        </View>
                                        <View style={{width:'100%',borderWidth:0,marginTop:'5%'}}>
                                            <Text style={{marginRight: '4%',color:'#504f54',fontSize:20,fontWeight:'bold'}}>
                                                Tax Refference:
                                            </Text>
                                        </View>
                                        <View style={styles.input}>
                                            <TextInput 
                                            style={{flex:9,}}
                                            placeholder='Tax Refference Code'
                                            placeholderTextColor={'#7a7a7a'}
                                            underlineColorAndroid='transparent'     
                                            keyboardType='number-pad'
                                            />
                                        </View>
                                        <View style={{width:'100%',borderWidth:0,marginTop:'5%'}}>
                                            <Text style={{marginRight: '4%',color:'#504f54',fontSize:20,fontWeight:'bold'}}>
                                                Invoice Terms:
                                            </Text>
                                        </View>
                                        <View style={styles.input}>
                                            <TextInput 
                                            style={{flex:9,}}
                                            placeholder='Terms and Conditions'
                                            placeholderTextColor={'#7a7a7a'}
                                            underlineColorAndroid='transparent'     
                                            keyboardType='number-pad'
                                            />
                                        </View>
                                        <View style={{width:'100%',borderWidth:0,marginTop:'5%'}}>
                                            <Text style={{marginRight: '4%',color:'#504f54',fontSize:20,fontWeight:'bold'}}>
                                                Invoice Note:
                                            </Text>
                                        </View>
                                        <View style={styles.inputB}>
                                            <TextInput 
                                            style={{}}
                                            placeholder='Notes to the Customer'
                                            
                                            placeholderTextColor={'#7a7a7a'}
                                            underlineColorAndroid='transparent'    
                                            keyboardType='number-pad'
                                            multiline = {true}
                                            numberOfLines = {4}
                                            />
                                        </View>
                                    </View>
                                </View>
                                <View  style={{width:'100%',alignItems:'center',borderWidth:0,marginTop:'5%'}}>
                                    <View style={{width:'96%',borderWidth:0,borderRadius:10,backgroundColor:'#f1f5e6',alignItems:'center',padding:10}}>
                                        <View style={{width:'100%',borderWidth:0}}>
                                            <Text style={{marginRight: '4%',color:'#504f54',fontSize:20,fontWeight:'bold'}}>
                                            Seach Tags:
                                            </Text>
                                        </View>
                                        <View style={styles.inputB}>
                                            <TextInput 
                                            style={{flex:9,}}
                                            placeholder='e.g. Company Name, Trade Service,
                                            Product Name'
                                            placeholderTextColor={'#7a7a7a'}
                                            underlineColorAndroid='transparent'     
                                            multiline = {true}
                                            numberOfLines = {4}
                                            />
                                        </View>
                                    </View>
                                </View>
                                <View style={{width: '95%',}}>
                                <View style={{width: '100%',borderWidth:0,flexDirection:'row'}}>
                                    <View style={{flexDirection:'row',alignItems:'center',borderWidth:0,flex:1}}>
                                        <Switch
                                            trackColor={{ false: "#767577", true: "#81b0ff" }}
                                            thumbColor={this.state.customer ? "#f5dd4b" : "#f4f3f4"}
                                            onValueChange={()=>this.switchC()}
                                            value={this.state.customer}
                                        />
                                        <Text style={{color:this.state.colorSwitchText[0],fontWeight:'bold'}}>CUSTOMER</Text>
                                    </View>
                                    <View style={{flexDirection:'row',alignItems:'center',borderWidth:0,flex:1}}>
                                        <Switch
                                            trackColor={{ false: "#767577", true: "#81b0ff" }}
                                            thumbColor={this.state.customer ? "#f5dd4b" : "#f4f3f4"}
                                            ios_backgroundColor="#3e3e3e"
                                            onValueChange={()=>this.switchA()}
                                            value={this.state.active}
                                        />
                                        <Text style={{color:this.state.colorSwitchText[1],fontWeight:'bold'}}>ACTIVE</Text>
                                    </View>
                                </View>
                                <View style={{width: '100%',borderWidth:0,flexDirection:'row'}}>
                                    <View style={{flexDirection:'row',alignItems:'center',borderWidth:0,flex:1}}>
                                        <Switch
                                            trackColor={{ false: "#767577", true: "#81b0ff" }}
                                            thumbColor={this.state.customer ? "#f5dd4b" : "#f4f3f4"}
                                            ios_backgroundColor="#3e3e3e"
                                            onValueChange={()=>this.switchS()}
                                            value={this.state.supplier}
                                        />
                                        <Text style={{color:this.state.colorSwitchText[2],fontWeight:'bold'}}>SUPPLIER</Text>
                                    </View>
                                    <View style={{flexDirection:'row',alignItems:'center',borderWidth:0,flex:1}}>
                                        <Switch
                                            trackColor={{ false: "#767577", true: "#81b0ff" }}
                                            thumbColor={this.state.customer ? "#f5dd4b" : "#f4f3f4"}
                                            ios_backgroundColor="#3e3e3e"
                                            onValueChange={()=>this.switchL()}
                                            value={this.state.lockAccount}
                                        />
                                        <Text style={{color:this.state.colorSwitchText[3],fontWeight:'bold'}}>LOCK ACCOUNT</Text>
                                    </View>
                                </View>
                                </View>
                                
                            </View>


                        </View>
                        
                </ScrollView>
            </View> 
            {
                //khoang trang
            }
            <View style={{height:windowHeight/9}}>

            </View>
            {
                //Ket thuc noi dung
            }
            {
                //Footer
            }
            <View style={{height:windowHeight/9,paddingTop:2,paddingLeft:2,paddingRight:2,elevation:5,width:'95%',borderTopRightRadius:32,alignSelf:'center',
                                borderTopLeftRadius:32,position: 'absolute',zIndex: 2000,top:'89%',backgroundColor:'#fff'}}>
                    <View  style={styles.footerA}>
                        <TouchableOpacity  style={styles.c4} onPress={()=>this.huongdan()}>
                            <Icon style = {{}} name="plagiarism" size={30} color="#565658"
                            />
                            <Text style={{fontSize:10,color:'#565658'}}>Estimates</Text>
                        </TouchableOpacity>
                        <TouchableOpacity  style={styles.c4} onPress={()=>this.huongdan()}>
                            <View style={{borderRadius:20,width:20,height:20,position:'absolute',zIndex: 200,backgroundColor:'#941a21',alignItems:'center',justifyContent:'center',top:'10%',left:'70%'}}>
                                <Text style={{color:'#fff',fontSize:11}}>15</Text>
                            </View>
                            <Icon style = {{}} name="next-week" size={30} color="#565658"
                            />
                            <Text style={{fontSize:10,color:'#565658'}}>Projects</Text>
                        </TouchableOpacity>
                        <TouchableOpacity  style={styles.c4Center} onPress={()=>this.huongdan()}>
                            <Icon style = {{}} name="save" size={50} color="#fff"
                            />
                            <Text style={{fontSize:10,color:'#565658'}}></Text>
                        </TouchableOpacity>
                        <TouchableOpacity  style={styles.c4} onPress={()=>this.huongdan()}>
                            <Icon style = {{}} name="request-quote" size={30} color="#565658"
                            />
                            <Text style={{fontSize:10,color:'#565658'}}>Cash Sales</Text>
                        </TouchableOpacity>
                        <TouchableOpacity  style={styles.c4} onPress={()=>this.huongdan()}>
                            <Icon style = {{}} name="keyboard-control" size={40} color="#565658"
                            />
                            <Text style={{fontSize:10,color:'#565658'}}>More</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {
                    //End Footer
                }
        </View>
        
    )
}
};
const styles = StyleSheet.create({
    //Header
    topBar:{
        flexDirection:'row',
        backgroundColor:'#bcd280',
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30,
        padding:10,
        paddingLeft:10,
        paddingRight:10,
        position:'absolute',
        zIndex: 2000,
    },
    insTopBar:{
        borderWidth:0,
        flex:3,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginTop:70,
        marginBottom:10,
    },
    menuIcon:{
        borderWidth:0,
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    logoDino:{
        borderWidth:0,
        flex:3,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        width:'90%',
        height:'70%',
    },
    sunMoon:{
        borderWidth:0,
        alignItems:'center',
        flex:2,
        flexDirection:'row',
        justifyContent:'flex-end'
    },
    normalIcon:{
        borderWidth:0,
        padding:2,
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    //Menu 
    input:{
        height:45,
        borderRadius:4,
        fontSize:16,
        borderColor:'#d3d3d3',
        borderWidth:1,
        backgroundColor:'#fff',
        alignSelf:'center',
        marginTop:10,
        justifyContent:'center',
        flexDirection:'row',
        
    },
    inputB:{
        height:95,
        borderRadius:4,
        fontSize:16,
        borderColor:'#d3d3d3',
        borderWidth:1,
        backgroundColor:'#fff',
        marginTop:10,
        flexDirection:'row',
        padding:10,
        width: '100%',
    },
    inputIcon:{
        flex:1,
        //borderWidth:1,
        paddingRight:5,
        alignSelf:'center',
        height:'100%',
        justifyContent:'center'
    },
    //End Header
    //Content
    viewContact:{
        borderWidth:0,
        width: '100%',
        height:'100%',
        paddingLeft:10,
        flexDirection:'row',
        alignItems:'center'
    },
    textContact:{
        fontSize:25,
        color:'#941a21',
        textDecorationLine: 'underline',
        fontWeight:'bold',
        marginLeft:'3%'
    },
    textCancel:{
        fontSize:23,
        color:'#5d5d5f',
        textTransform:'uppercase',
        fontFamily:'sans-serif-light',

    },
    userInfoListView:{
        borderWidth:0,
        flex:9,
        padding:10,
        alignItems:'center',
        justifyContent:'center'
    },
    input:{
        width:WIDTH -60,
        height:45,
        borderRadius:4,
        fontSize:16,
        paddingLeft:10,
        borderColor:'#d3d3d3',
        borderWidth:1,
        backgroundColor:'#fff',
        alignSelf:'center',
        marginTop:10,
        justifyContent:'center',
        flexDirection:'row',
    },
    //Footer
    footerA:{
        backgroundColor: '#bcd280',
        height:'100%',
        alignSelf:'center',
        alignItems: 'center',
        flexDirection:'row',
        borderTopRightRadius:30,
        borderTopLeftRadius:30,
    },
    c4Center:{
        padding:10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'row',
        borderRadius:50,
        borderWidth:3,
        borderColor:'#fff',
        width: 80,
        height:80, 
        top:'-30%',
        backgroundColor:'#991b20',
        
      },
      c4: { 
        padding:10,
        flex: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth:0,
        top:'0%',
      },
      //end Footer
});

