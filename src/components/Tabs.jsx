import React, { useState } from 'react';

const Tabs = () => {
    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };
    // const tabs = [
    //     {
    //         id: 1,
    //         tabTitle: 'Tab 1',
    //         title: 'Title 1',
    //         content: 'In sint do non adipisicing incididunt excepteur sit. Voluptate esse aliqua pariatur dolor ex occaecat sunt eu. Pariatur ullamco id dolore sint proident sint nostrud nisi sit id est. Duis et excepteur cupidatat sint nisi dolore qui irure qui in id excepteur irure laboris. Pariatur mollit duis cupidatat nisi Lorem non et in dolor aliquip ea sint aute. Dolore aute duis laboris exercitation occaecat sunt. Enim veniam Lorem do ipsum aliqua qui eu ipsum consectetur ex dolore ea ipsum.'
    //     },
    //     {
    //         id: 2,
    //         tabTitle: 'Tab 2',
    //         title: 'Title 2',
    //         content: 'Non aliquip fugiat velit ad officia Lorem tempor cillum incididunt elit proident mollit. Reprehenderit qui nisi ut occaecat minim velit deserunt occaecat quis magna mollit. Veniam proident consectetur sunt mollit est magna Lorem voluptate enim cupidatat consequat. Et pariatur aliquip commodo nisi deserunt exercitation enim officia voluptate in nisi. Eu ea esse qui est ea pariatur nostrud non elit irure. Ad exercitation Lorem exercitation ipsum eiusmod ea duis ad mollit veniam aliquip veniam. Lorem pariatur elit ea duis.'
    //     },
    //     {
    //         id: 3,
    //         tabTitle: 'Tab 3',
    //         title: 'Title 3',
    //         content: 'Deserunt et elit elit ad dolor magna. Nisi amet consectetur Lorem eiusmod dolore adipisicing do reprehenderit. Voluptate consequat magna nostrud in officia labore. Minim excepteur consectetur quis nostrud nisi magna duis sunt sint qui. Fugiat ea reprehenderit eiusmod proident officia. Consequat labore qui velit Lorem consectetur incididunt ut nisi.'
    //     },
    //     {
    //         id: 4,
    //         tabTitle: 'Tab 4',
    //         title: 'Title 4',
    //         content: 'Minim in dolor do fugiat laborum duis labore consectetur. Amet ut sint ipsum dolor ad nostrud commodo sunt veniam enim aliquip nulla sint ullamco. Do cupidatat et quis laborum esse est commodo. Commodo sunt consectetur do consequat minim occaecat id magna ullamco consequat irure.'
    //     }
    // ];

    return (
        <div className="container mx-auto p-4">
          
            <div className="flex justify-between border-b-4 border-black">
                {['Tab 1', 'Tab 2', 'Tab 3', 'Tab 4'].map((tab, index) => (
                    <button
                        key={index}
                        className={`w-full py-3 text-lg font-semibold focus:outline-none cursor-pointer transition-colors ${
                            activeTab === index + 1
                                ? 'bg-blue-900 text-white'
                                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                        }`}
                        onClick={() => handleTabClick(index + 1)}
                    >
                        {tab}
                    </button>
                ))}
            </div>

         
            <div className="p-6 border border-gray-300 bg-white">
                {activeTab === 1 && (
                    <div>
                        <h3 className="text-2xl font-bold mb-4">Title 1</h3>
                        <p className="text-gray-700">
                        In sint do non adipisicing incididunt excepteur sit. Voluptate esse aliqua pariatur dolor ex occaecat sunt eu. Pariatur ullamco id dolore sint proident sint nostrud nisi sit id est. Duis et excepteur cupidatat sint nisi dolore qui irure qui in id excepteur irure laboris. Pariatur mollit cupidatat nisi Lorem non et in dolor aliquip ea sint. Olore aute duis laboris exercitation occaecat sunt. Enim veniam Lorem do ipsum aliqua qui ipsum consectetur ex dolore ea ipsum.
                        </p>
                    </div>
                )}
                {activeTab === 2 && (
                    <div>
                        <h3 className="text-2xl font-bold mb-4">Title 2</h3>
                        <p className="text-gray-700">
                        Non aliquip fugiat velit ad officia Lorem tempor cillum incididunt elit proident mollit. Reprehenderit qui nisi ut occaecat minim velit deserunt occaecat quis magna mollit. Veniam proident consectetur sunt mollit est magna Lorem voluptate enim cupidatat consequat. Et pariatur aliquip commodo nisi deserunt exercitation enim officia voluptate in nisi. Eu ea esse qui est ea pariatur nostrud non elit irure. Ad exercitation Lorem exercitation ipsum eiusmod ea duis ad mollit veniam aliquip veniam. Lorem pariatur elit ea duis
                        </p>
                    </div>
                )}
                {activeTab === 3 && (
                    <div>
                        <h3 className="text-2xl font-bold mb-4">Title 3</h3>
                        <p className="text-gray-700">
                        Deserunt et elit ad dolor magna. Nisi amet consectetur Lorem eiusmod dolore adipisicing do reprehenderit. Voluptate consequat magna nostrud in officia labore. Minim excepteur consectetur quis nostrud nisi magna duis sunt sint qui. Fugiat ea reprehenderit eiusmod proident officia. Consequat labore qui velit Lorem consectetur incididunt ut nisi.
                        </p>
                    </div>
                )}
                {activeTab === 4 && (
                    <div>
                        <h3 className="text-2xl font-bold mb-4">Title 4</h3>
                        <p className="text-gray-700">
                        Minim in dolor do fugiat laborum duis labore consectetur. Amet ut sint ipsum dolor ad nostrud commodo sunt veniam enim aliquip nulla sint ullamco. Do cupidatat et quis laborum esse est commodo. Commodo sunt consectetur do consequat minim occaecat id magna ullamco consequat irure.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Tabs;
