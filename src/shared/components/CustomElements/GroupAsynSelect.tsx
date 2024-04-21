import { debounce } from 'lodash';
import { useCallback, useState } from 'react';
import { Box, Flex, Icon, Input, InputGroup, InputLeftElement, InputRightElement, Spinner, Text } from '@chakra-ui/react';
import { BiChevronLeft, BiSearch } from 'react-icons/bi';

enum GroupTypes {
  USUARIOS = "usuarios",
  GRUPOS = "grupos"
}

interface Props {
  loadOptions: (value?: string) => Promise<any>;
  onClick: (e: any, group: string) => void;
  placeholder?: string;
}

export function GroupAsyncSelect({
  onClick,
  loadOptions,
  placeholder = 'Escribe para buscar',
}: Props) {
  const [inputValue, setInputValue] = useState('');
  const [menu, setMenu] = useState<boolean>(false);
  const [searchOptions, setSearchOptions] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const debouncedLoadOptions = useCallback(
    debounce(async (value: string) => {
      if (value && value !== '') {
        setIsLoading(true);
        const options = await loadOptions(value);

        setSearchOptions(options);
        setIsLoading(false);
      }
      else
        setSearchOptions(null);
    }, 300),
    [loadOptions]
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setInputValue(value);
    debouncedLoadOptions(value);
  };

  const handleClick = (option: any, group: string) => {
    debouncedLoadOptions('')
    setInputValue('')
    setMenu(false)

    onClick(option, group)
  }

  return (
    <Box
      position="relative"
      w="350px"
    >
      <InputGroup>
        <Input
          color={"font"}
          fontSize="16px"
          fontWeight="400"
          value={inputValue}
          onChange={handleInputChange}
          placeholder={placeholder}
          onFocus={() => setMenu(true)}
          onBlur={() =>
            setTimeout(() => {
              setMenu(false)
            }, 200)
          }
        />

        <InputLeftElement>
          <Icon
            as={BiSearch}
            boxSize="20px"
          />
        </InputLeftElement>

        <InputRightElement>
          <Icon
            as={BiChevronLeft}
            boxSize="24px"
            transition={'transform 0.3s ease'}
            transform={menu ? 'rotate(-90deg)' : 'rotate(0deg)'}
          />
        </InputRightElement>
      </InputGroup>

      <Box
        position="absolute"
        zIndex={999}
        maxH={300}
        overflowY="scroll"
        css={{
          '&::-webkit-scrollbar': {
            width: '5px',
          },
          '&::-webkit-scrollbar-thumb': {
            background: "#E2E8F0",
            borderRadius: '20px',
          },
        }}
        top="115%"
        left="0"
        w="100%"
        bg={"background"}
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.05)"
        rounded="8px"
        display={menu ? 'block' : 'none'}
        padding="12px 8px"
      >
        {searchOptions ?
          <Flex
            direction="column"
            gap="10px"
          >
            {Object.keys(searchOptions || {}).map((group: string, index: number) => (
              searchOptions[group]?.options?.length > 0 &&
              <Box
                key={index}
              >
                <Text
                  fontSize="14px"
                  fontWeight="600"
                  color={"font"}
                  textTransform="uppercase"
                  mb="4px"
                >
                  {searchOptions[group].group}
                </Text>

                {searchOptions[group]?.options?.length > 0 ?
                  searchOptions[group]?.options?.map((option: any, i: number) => (
                    <Flex
                      key={i}
                      alignItems="center"
                      gap="10px"
                      cursor="pointer"
                      _hover={{ bg: "main_variant" }}
                      onClick={() => handleClick(option, searchOptions[group].group)}
                      p="8px"
                    >
                      <Text
                        fontSize="14px"
                        fontWeight="400"
                        color={"font"}
                      >
                        {searchOptions[group].group === GroupTypes.GRUPOS
                          ? <Flex gap="4px"><Text as={"strong"}>{option?.data?.nombre}</Text><Text>- {option?.data?.curso?.nombre}</Text></Flex>
                          : option.label
                        }
                      </Text>
                    </Flex>
                  ))
                  :
                  <Text
                    fontSize="14px"
                    fontWeight="400"
                    color={"font"}
                  >
                    No hay resultados
                  </Text>
                }
              </Box>
            ))}
          </Flex>
          :
          !isLoading ?
            <Text
              textAlign="center"
            >
              Escribe para mostrar opciones...
            </Text>
            :
            <Flex
              justifyContent="center"
              alignItems="center"
              w="100%"
            >
              <Spinner
                size="sm"
                color={"main"}
                thickness="2px"
                speed="0.65s"
                emptyColor="light_grey"
              />
            </Flex>
        }
      </Box>
    </Box>
  );
}
