﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Kursa
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Клиент.
    /// </summary>
    // *** Start programmer edit section *** (Клиент CustomAttributes)

    // *** End programmer edit section *** (Клиент CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("КлиентE", new string[] {
            "Наимен as \'ФИО\'",
            "НомТел as \'Номер телефона\'",
            "EMail as \'EMail\'",
            "ДатаРожд as \'Дата рождения\'",
            "БанкДан.НомКарт as \'вф\'",
            "КартаЛояль.Ном as \'net\'"})]
    [View("КлиентL", new string[] {
            "Наимен as \'ФИО\'",
            "НомТел as \'Номер телефона\'",
            "EMail as \'EMail\'",
            "ДатаРожд as \'Дата рождения\'",
            "БанкДан.НомКарт as \'da\'"})]
    public class Клиент : ICSSoft.STORMNET.DataObject
    {
        
        private string fНомТел;
        
        private System.DateTime fДатаРожд;
        
        private string fНаимен;
        
        private string fEMail;
        
        private IIS.Kursa.БанкДан fБанкДан;
        
        private IIS.Kursa.КартаЛояль fКартаЛояль;
        
        // *** Start programmer edit section *** (Клиент CustomMembers)

        // *** End programmer edit section *** (Клиент CustomMembers)

        
        /// <summary>
        /// EMail.
        /// </summary>
        // *** Start programmer edit section *** (Клиент.EMail CustomAttributes)

        // *** End programmer edit section *** (Клиент.EMail CustomAttributes)
        [StrLen(255)]
        public virtual string EMail
        {
            get
            {
                // *** Start programmer edit section *** (Клиент.EMail Get start)

                // *** End programmer edit section *** (Клиент.EMail Get start)
                string result = this.fEMail;
                // *** Start programmer edit section *** (Клиент.EMail Get end)

                // *** End programmer edit section *** (Клиент.EMail Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Клиент.EMail Set start)

                // *** End programmer edit section *** (Клиент.EMail Set start)
                this.fEMail = value;
                // *** Start programmer edit section *** (Клиент.EMail Set end)

                // *** End programmer edit section *** (Клиент.EMail Set end)
            }
        }
        
        /// <summary>
        /// ДатаРожд.
        /// </summary>
        // *** Start programmer edit section *** (Клиент.ДатаРожд CustomAttributes)

        // *** End programmer edit section *** (Клиент.ДатаРожд CustomAttributes)
        public virtual System.DateTime ДатаРожд
        {
            get
            {
                // *** Start programmer edit section *** (Клиент.ДатаРожд Get start)

                // *** End programmer edit section *** (Клиент.ДатаРожд Get start)
                System.DateTime result = this.fДатаРожд;
                // *** Start programmer edit section *** (Клиент.ДатаРожд Get end)

                // *** End programmer edit section *** (Клиент.ДатаРожд Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Клиент.ДатаРожд Set start)

                // *** End programmer edit section *** (Клиент.ДатаРожд Set start)
                this.fДатаРожд = value;
                // *** Start programmer edit section *** (Клиент.ДатаРожд Set end)

                // *** End programmer edit section *** (Клиент.ДатаРожд Set end)
            }
        }
        
        /// <summary>
        /// Наимен.
        /// </summary>
        // *** Start programmer edit section *** (Клиент.Наимен CustomAttributes)

        // *** End programmer edit section *** (Клиент.Наимен CustomAttributes)
        [StrLen(255)]
        public virtual string Наимен
        {
            get
            {
                // *** Start programmer edit section *** (Клиент.Наимен Get start)

                // *** End programmer edit section *** (Клиент.Наимен Get start)
                string result = this.fНаимен;
                // *** Start programmer edit section *** (Клиент.Наимен Get end)

                // *** End programmer edit section *** (Клиент.Наимен Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Клиент.Наимен Set start)

                // *** End programmer edit section *** (Клиент.Наимен Set start)
                this.fНаимен = value;
                // *** Start programmer edit section *** (Клиент.Наимен Set end)

                // *** End programmer edit section *** (Клиент.Наимен Set end)
            }
        }
        
        /// <summary>
        /// НомТел.
        /// </summary>
        // *** Start programmer edit section *** (Клиент.НомТел CustomAttributes)

        // *** End programmer edit section *** (Клиент.НомТел CustomAttributes)
        [StrLen(255)]
        public virtual string НомТел
        {
            get
            {
                // *** Start programmer edit section *** (Клиент.НомТел Get start)

                // *** End programmer edit section *** (Клиент.НомТел Get start)
                string result = this.fНомТел;
                // *** Start programmer edit section *** (Клиент.НомТел Get end)

                // *** End programmer edit section *** (Клиент.НомТел Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Клиент.НомТел Set start)

                // *** End programmer edit section *** (Клиент.НомТел Set start)
                this.fНомТел = value;
                // *** Start programmer edit section *** (Клиент.НомТел Set end)

                // *** End programmer edit section *** (Клиент.НомТел Set end)
            }
        }
        
        /// <summary>
        /// Клиент.
        /// </summary>
        // *** Start programmer edit section *** (Клиент.БанкДан CustomAttributes)

        // *** End programmer edit section *** (Клиент.БанкДан CustomAttributes)
        [PropertyStorage(new string[] {
                "БанкДан"})]
        [NotNull()]
        public virtual IIS.Kursa.БанкДан БанкДан
        {
            get
            {
                // *** Start programmer edit section *** (Клиент.БанкДан Get start)

                // *** End programmer edit section *** (Клиент.БанкДан Get start)
                IIS.Kursa.БанкДан result = this.fБанкДан;
                // *** Start programmer edit section *** (Клиент.БанкДан Get end)

                // *** End programmer edit section *** (Клиент.БанкДан Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Клиент.БанкДан Set start)

                // *** End programmer edit section *** (Клиент.БанкДан Set start)
                this.fБанкДан = value;
                // *** Start programmer edit section *** (Клиент.БанкДан Set end)

                // *** End programmer edit section *** (Клиент.БанкДан Set end)
            }
        }
        
        /// <summary>
        /// Клиент.
        /// </summary>
        // *** Start programmer edit section *** (Клиент.КартаЛояль CustomAttributes)

        // *** End programmer edit section *** (Клиент.КартаЛояль CustomAttributes)
        [PropertyStorage(new string[] {
                "КартаЛояль"})]
        [NotNull()]
        public virtual IIS.Kursa.КартаЛояль КартаЛояль
        {
            get
            {
                // *** Start programmer edit section *** (Клиент.КартаЛояль Get start)

                // *** End programmer edit section *** (Клиент.КартаЛояль Get start)
                IIS.Kursa.КартаЛояль result = this.fКартаЛояль;
                // *** Start programmer edit section *** (Клиент.КартаЛояль Get end)

                // *** End programmer edit section *** (Клиент.КартаЛояль Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Клиент.КартаЛояль Set start)

                // *** End programmer edit section *** (Клиент.КартаЛояль Set start)
                this.fКартаЛояль = value;
                // *** Start programmer edit section *** (Клиент.КартаЛояль Set end)

                // *** End programmer edit section *** (Клиент.КартаЛояль Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "КлиентE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View КлиентE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("КлиентE", typeof(IIS.Kursa.Клиент));
                }
            }
            
            /// <summary>
            /// "КлиентL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View КлиентL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("КлиентL", typeof(IIS.Kursa.Клиент));
                }
            }
        }
    }
}
