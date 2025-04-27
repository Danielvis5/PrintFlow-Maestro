export interface QuotationFormData {
    // Client Information
    clientName: string;
    clientEmail: string;
    clientPhone: string;
    
    // Project Details
    projectName: string;
    projectDescription: string;
    deliveryDate: string;
    
    // Print Specifications
    printingTechnique: 'digital' | 'largeFormat' | 'offset' | 'flexography';
    quantity: number;
    width: number;
    height: number;
    sides: 'oneSided' | 'doubleSided';
    
    // Materials
    paperType: string;
    paperWeight: number;
    inkColors: number;
    
    // Finishing Options
    finishing: {
        lamination?: boolean;
        coating?: boolean;
        cutting?: boolean;
        folding?: boolean;
        binding?: boolean;
    };
    
    // Additional Information
    notes?: string;
    urgentDelivery: boolean;
    
    // Pricing
    basePrice?: number;
    discountPercentage?: number;
    additionalCharges?: number;
    finalPrice?: number;
}

export interface PrintingTechniqueConfig {
    name: string;
    basePrice: number;
    minimumQuantity: number;
    pricePerUnit: number;
    setupCost: number;
}

export interface MaterialPricing {
    paperType: string;
    pricePerUnit: number;
    minimumOrder: number;
}

export interface FinishingOption {
    name: string;
    price: number;
    description: string;
}