import React from 'react';

// Packages
import { Select, FormControl, CheckIcon, WarningOutlineIcon, } from "native-base";


const CustomSelect = ({ 
    text, onBlur, placeholder, accessibilityLabel, isInvalid, value, size, onChange, onFocus, errorMsg 
    }) => { 
      let [service, setService] = React.useState("");
        return (
          <FormControl
              isInvalid={isInvalid} 
              maxW="300" 
          >
              <FormControl.Label
                  _text={{ 
                      color: 'black', 
                      fontWeight: 'bold',
                      bg:'coolGray.300',  
                      p:'1',
                      opacity:'.8',
                      borderColor:'#bbf7d0',
                      borderWidth: 2,
                      fontSize: 'xs',
                 }}
              >
                  {text}
              </FormControl.Label>
              <Select 
                  _focus={{
                      bg: 'coolGray.300', 
                      borderColor:'#bbf7d0',
                      borderWidth: 2,
                    }}
                      _invalid={{
                        borderColor: 'error.500',
                          _stack: {
                            style: {
                              outlineWidth: '1px',
                              outlineColor:  'error[500]',
                              outlineStyle: 'solid',
                            }
                          }
                      }}
                  selectedValue={service}
                  onValueChange={itemValue => setService(itemValue)}
                  borderRadius='5'
                  py='4' 
                  bg='coolGray.300' 
                  variant="filled"
                  size={size} 
                  accessibilityLabel={accessibilityLabel}
                  placeholder={placeholder}
                  onChange={onChange}
                  onFocus={onFocus}
                  onBlur={onBlur} 
                  _selectedItem={{
                      bg: "teal.600",
                      endIcon: <CheckIcon size={5} />
                  }} 
              >
                <Select.Item label="MA" value="Massachusettes" />
                <Select.Item label="Web Development" value="web" />
                <Select.Item label="Cross Platform Development" value="cross" />
                <Select.Item label="UI Designing" value="ui" />
                <Select.Item label="Backend Development" value="backend" />
                <Select.Item label="Backend Development" value="backend" />
                <Select.Item label="Backend Development" value="backend" />
                <Select.Item label="Backend Development" value="backend" />
                <Select.Item label="Backend Development" value="backend" />
                <Select.Item label="Backend Development" value="backend" />
                <Select.Item label="Backend Development" value="backend" />
                <Select.Item label="Backend Development" value="backend" />
                <Select.Item label="Backend Development" value="backend" />
                <Select.Item label="Backend Development" value="backend" />
                <Select.Item label="Backend Development" value="backend" />
                <Select.Item label="Backend Development" value="backend" />
                <Select.Item label="Backend Development" value="backend" />
                <Select.Item label="Backend Development" value="backend" />
                <Select.Item label="Backend Development" value="backend" />
                <Select.Item label="Backend Development" value="backend" />
                <Select.Item label="Backend Development" value="backend" />
                <Select.Item label="Backend Development" value="backend" />
                <Select.Item label="Backend Development" value="backend" />
                <Select.Item label="Backend Development" value="backend" />
                <Select.Item label="Backend Development" value="backend" />
                <Select.Item label="Backend Development" value="backend" />
                <Select.Item label="Backend Development" value="backend" />
                <Select.Item label="Backend Development" value="backend" />
                <Select.Item label="Backend Development" value="backend" />
                <Select.Item label="Backend Development" value="backend" />
                <Select.Item label="Backend Development" value="backend" />
                <Select.Item label="Backend Development" value="backend" />
                <Select.Item label="Backend Development" value="backend" />
                <Select.Item label="Backend Development" value="backend" />
                <Select.Item label="Backend Development" value="backend" />
                <Select.Item label="Backend Development" value="backend" />
                <Select.Item label="Backend Development" value="backend" />
                <Select.Item label="Backend Development" value="backend" />
                <Select.Item label="Backend Development" value="backend" />
                <Select.Item label="Backend Development" value="backend" />
                <Select.Item label="Backend Development" value="backend" />
                <Select.Item label="Backend Development" value="backend" />
                <Select.Item label="Backend Development" value="backend" />
                <Select.Item label="Backend Development" value="backend" />
                <Select.Item label="Backend Development" value="backend" />
                <Select.Item label="Backend Development" value="backend" />
                <Select.Item label="Backend Development" value="backend" />
                <Select.Item label="Backend Development" value="backend" />
                <Select.Item label="Backend Development" value="backend" />
                <Select.Item label="Backend Development" value="backend" />
                <Select.Item label="Backend Development" value="backend" />
                <Select.Item label="Backend Development" value="backend" />
                <Select.Item label="Backend Development" value="backend" />
                <Select.Item label="Backend Development" value="backend" />
                <Select.Item label="Backend Development" value="backend" />
                <Select.Item label="Backend Development" value="backend" />
                <Select.Item label="Backend Development" value="backend" />
                <Select.Item label="Backend Development" value="backend" />
              </Select>
              <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}
                  textAlign='right'
                      _text= {{
                          fontSize: 'xs',
                          bg: 'coolGray.300',
                          p: '1',
                          opacity:'.8',
                          borderColor:'error[500]',
                          borderWidth: 2,
                      }}
              >
                  {errorMsg}
              </FormControl.ErrorMessage>
          </FormControl>
      );
}

export default CustomSelect;