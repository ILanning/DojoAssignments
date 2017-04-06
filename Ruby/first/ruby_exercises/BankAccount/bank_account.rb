class BankAccount
  attr_reader :account_num, :savings, :checking, :interest_rate
  @@num_of_accounts = 0
  protected
    def gen_account_num
      return rand(100000)
    end
  public
    def initialize
      @account_num = self.gen_account_num
      @checking = 0
      @savings = 0
      @interest_rate = 0.01
      @@num_of_accounts += 1
    end
    def deposit_checking quantity
      @checking += quantity
      return self
    end
    def deposit_savings quantity
      @savings += quantity
      return self
    end
    def withdraw_savings quantity
      raise ArgumentError, "Insufficient funds in savings!" unless quantity <= @savings
      @savings -= quantity
      return self
    end
    def withdraw_checking quantity
      raise ArgumentError, "Insufficient funds in checking!" unless quantity <= @checking
      @checking -= quantity
      return self
    end
    def self.view_account_num
      puts @@num_of_accounts
    end
    def total
      return @savings + @checking
    end
    def view_total
      puts "Total: #{@savings + @checking}"
      return self
    end
    def account_information
      puts "Acct#: #{@account_num}"
      puts "Total: #{@savings + @checking}"
      puts "Savings: #{@savings}"
      puts "Checking: #{@checking}"
      puts "Interest Rate: #{@interest_rate}"
      return self
    end
end
